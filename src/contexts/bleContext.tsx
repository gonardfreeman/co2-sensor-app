import React, { useState } from "react";
import { BLEContext } from "../hooks/bleHooks";

import { co2Uuid, humUuid, tempUuid } from "../services";
import { connectToServer, fetchDevice } from "../ble";
import { connectToService } from "../ble/services";
import { consumeCharacteristics } from "../ble/characteristics";

export const BLEProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = useState<BluetoothDevice | null>(null);
  const [server, setServer] = useState<BluetoothRemoteGATTServer | null>(null);
  const [service, setService] = useState<BluetoothRemoteGATTService | null>(
    null
  );

  const [humidity, setHumidity] = useState<number>(0);
  const [co2, setCo2] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);

  const connect = async () => {
    const device = await fetchDevice();
    setDevice(device);

    const gattServer = await connectToServer(device);

    setServer(gattServer);

    const envService = await connectToService(gattServer);
    setService(envService);

    await consumeCharacteristics({
      service: envService,
      characteristicsUuid: humUuid,
      setState: setHumidity,
      parse: (value) => value.getUint8(0),
    });

    await consumeCharacteristics({
      service: envService,
      characteristicsUuid: tempUuid,
      setState: setTemperature,
      parse: (value) => value.getUint8(0),
    });

    await consumeCharacteristics({
      service: envService,
      characteristicsUuid: co2Uuid,
      setState: setCo2,
      parse: (value) => value.getUint16(0, true),
    });
  };

  const disconnect = () => {
    if (device?.gatt?.connected) {
      device.gatt.disconnect();
    }
    setDevice(null);
    setServer(null);
    setService(null);

    setHumidity(0);
    setCo2(0);
    setTemperature(0);
  };

  return (
    <BLEContext.Provider
      value={{
        device,
        server,
        service,
        humidity,
        co2,
        temperature,
        connect,
        disconnect,
      }}
    >
      {children}
    </BLEContext.Provider>
  );
};
