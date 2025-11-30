import { DEVICE_NAME } from "../constants";
import { environmentServiceUuid } from "../services";

export const fetchDevice = async () => {
  const isAvailable = await navigator.bluetooth.getAvailability();
  if (!isAvailable) {
    throw Error("Bluetooth is not avaialable");
  }
  const device = await navigator.bluetooth.requestDevice({
    filters: [
      {
        name: DEVICE_NAME,
      },
    ],
    optionalServices: [environmentServiceUuid],
  });
  return device;
};
