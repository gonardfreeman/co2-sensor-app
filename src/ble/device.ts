import { DEVICE_NAME } from "../constants";
import { environmentServiceUuid } from "../services";

export const fetchDevice = async () => {
  const devices = await navigator.bluetooth.getDevices();
  const cachedDevice = devices.find((d) => d.name === DEVICE_NAME);
  if (cachedDevice !== undefined) {
    return cachedDevice;
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
