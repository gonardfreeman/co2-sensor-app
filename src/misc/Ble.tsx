/// <reference types="web-bluetooth" />
// import { useQuery } from "@tanstack/react-query";
// import { convertToUuid } from "../ble/base";
// import { CONFIG_SERVICE_UUID_DEFINITION } from "../ble/config.service";
// import { Button } from "./Button";

// const service_uuid = convertToUuid(
//   CONFIG_SERVICE_UUID_DEFINITION.environment.uuid
// );
// const hum_uuid = convertToUuid(
//   CONFIG_SERVICE_UUID_DEFINITION.environment.characteristics.humidity
// );
// const co2_uuid = convertToUuid(
//   CONFIG_SERVICE_UUID_DEFINITION.environment.characteristics.gas
// );
// const temp_uuid = convertToUuid(
//   CONFIG_SERVICE_UUID_DEFINITION.environment.characteristics.temperature
// );

export const Ble = () => {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["connect"],
  //   queryFn: async () => {
  //     const device = await navigator.bluetooth.requestDevice({
  //       filters: [
  //         {
  //           name: "co2_sens",
  //         },
  //       ],
  //       optionalServices: [service_uuid],
  //     });
  //     const server = await device.gatt?.connect();
  //     const service = await server?.getPrimaryService(service_uuid);
  //     const characteristic = await service?.getCharacteristic(hum_uuid);
  //     if (!characteristic) {
  //       return;
  //     }
  //     const v = await characteristic.startNotifications();
  //     v.addEventListener("characteristicvaluechanged", (e) => {
  //       const target = e.target as BluetoothRemoteGATTCharacteristic;
  //       if (!target.value) {
  //         return;
  //       }
  //       console.log(target.value.getUint8(0));
  //     });
  //     return v;
  //   },
  // });
  // const handleClick = async () => {
  //   const device = await navigator.bluetooth.requestDevice({
  //     filters: [
  //       {
  //         name: "co2_sens",
  //       },
  //     ],
  //     optionalServices: [service_uuid],
  //   });
  //   const server = await device.gatt?.connect();
  //   const service = await server?.getPrimaryService(service_uuid);
  //   const characteristic = await service?.getCharacteristic(hum_uuid);
  //   if (!characteristic) {
  //     return;
  //   }
  //   const v = await characteristic.startNotifications();
  //   v.addEventListener("characteristicvaluechanged", (e) => {
  //     const target = e.target as BluetoothRemoteGATTCharacteristic;
  //     if (!target.value) {
  //       return;
  //     }
  //     console.log(target.value.getUint8(0));
  //   });
  // };
  // if (isError) {
  //   return <div>Error</div>;
  // }
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return <div>test</div>;
};
