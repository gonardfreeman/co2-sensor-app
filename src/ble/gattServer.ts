export const connectToServer = async (device: BluetoothDevice | null) => {
  if (!device) {
    throw new Error("No device to connect to");
  }
  const gattServer = await device.gatt?.connect();
  if (!gattServer) {
    throw new Error("Failed to connect GATT");
  }
  return gattServer;
};
