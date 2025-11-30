import React, { useState } from "react";
import { BLEContext } from "../hooks/bleHooks";
import { DEVICE_NAME } from "../constants";
import { bleConfig } from "../services";
import { queryClient } from "../hooks/rcQuery";

const environmentServiceUuid = bleConfig.services.environment.service.toUuid();
const humUuid =
  bleConfig.services.environment.characteristics.humidity.toUuid();
const co2Uuid = bleConfig.services.environment.characteristics.gas.toUuid();
const tempUuid =
  bleConfig.services.environment.characteristics.temperature.toUuid();

export const BLEProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = useState<BluetoothDevice | null>(null);
  const [server, setServer] = useState<BluetoothRemoteGATTServer | null>(null);
  const [service, setService] = useState<BluetoothRemoteGATTService | null>(
    null
  );

  const connect = async () => {
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          name: DEVICE_NAME,
        },
      ],
      optionalServices: [environmentServiceUuid],
    });
    setDevice(device);

    const s = await device.gatt?.connect();
    if (!s) throw new Error("Failed to connect GATT");
    setServer(s);

    const envService = await s.getPrimaryService(environmentServiceUuid);
    setService(envService);

    const humidityCharacteristic = await envService?.getCharacteristic(humUuid);
    const humidityNotifications =
      await humidityCharacteristic.startNotifications();
    humidityNotifications.addEventListener(
      "characteristicvaluechanged",
      (e) => {
        const target = e.target as BluetoothRemoteGATTCharacteristic;
        if (!target.value) {
          return;
        }
        queryClient.setQueryData(["humidity"], target.value.getUint8(0));
      }
    );

    const tempCharacteristic = await envService?.getCharacteristic(tempUuid);
    const tempNotifications = await tempCharacteristic.startNotifications();
    tempNotifications.addEventListener("characteristicvaluechanged", (e) => {
      const target = e.target as BluetoothRemoteGATTCharacteristic;
      if (!target.value) {
        return;
      }
      queryClient.setQueryData(["temperature"], target.value.getUint8(0));
    });

    const co2Characteristic = await envService?.getCharacteristic(co2Uuid);
    const co2Notifications = await co2Characteristic.startNotifications();
    co2Notifications.addEventListener("characteristicvaluechanged", (e) => {
      const target = e.target as BluetoothRemoteGATTCharacteristic;
      if (!target.value) {
        return;
      }

      queryClient.setQueryData(["co2"], target.value.getUint16(0, true));
    });
  };

  const disconnect = () => {
    if (device?.gatt?.connected) {
      device.gatt.disconnect();
    }
    setDevice(null);
    setServer(null);
    setService(null);
  };

  return (
    <BLEContext.Provider
      value={{
        device,
        server,
        service,
        connect,
        disconnect,
      }}
    >
      {children}
    </BLEContext.Provider>
  );
};
