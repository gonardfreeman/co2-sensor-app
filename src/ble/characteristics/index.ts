type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type ConsumeCharacteristicsParam<T> = {
  service: BluetoothRemoteGATTService;
  characteristicsUuid: string;
  setState: SetState<T>;
  parse: (dataView: DataView) => T;
};

export const consumeCharacteristics = async <T>({
  service,
  characteristicsUuid,
  parse,
  setState,
}: ConsumeCharacteristicsParam<T>) => {
  const characteristic = await service?.getCharacteristic(characteristicsUuid);
  const characteristicNotification = await characteristic.startNotifications();
  characteristicNotification.addEventListener(
    "characteristicvaluechanged",
    (e) => {
      const target = e.target as BluetoothRemoteGATTCharacteristic;
      if (!target.value) {
        return;
      }
      setState(parse(target.value));
    }
  );
};
