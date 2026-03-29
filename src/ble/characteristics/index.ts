import { saveReading } from "../../hooks/saveReadings";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface Characteristic {
  id: string;
  name: string;
  unit: string;
}

type ConsumeCharacteristicsParam = {
  service: BluetoothRemoteGATTService;
  characteristic: Characteristic;
  setState: SetState<number>;
  parse: (dataView: DataView) => number;
};

export const consumeCharacteristics = async ({
  service,
  characteristic,
  parse,
  setState,
}: ConsumeCharacteristicsParam) => {
  const characteristicService = await service?.getCharacteristic(characteristic.id);
  const characteristicNotification = await characteristicService.startNotifications();
  characteristicNotification.addEventListener("characteristicvaluechanged", (e) => {
    const target = e.target as BluetoothRemoteGATTCharacteristic;
    if (!target.value) {
      return;
    }
    const value = parse(target.value);
    setState(value);
    saveReading({ value, characteristic_id: characteristic.id });
  });
};
