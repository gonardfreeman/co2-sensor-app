import { environmentServiceUuid } from "../../services";

export const connectToService = async (
  gattServer: BluetoothRemoteGATTServer | null
) => {
  if (!gattServer) {
    throw new Error("No gatt server");
  }
  const envService = await gattServer.getPrimaryService(environmentServiceUuid);
  return envService;
};
