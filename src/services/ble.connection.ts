/// <reference types="web-bluetooth" />

import { DEVICE_NAME } from "../constants";
import { bleConfig } from "./config.service";

export async function deviceConnectQuery() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          name: DEVICE_NAME,
        },
      ],
      optionalServices: [bleConfig.services.environment.service.toUuid()],
    });
    return device;
  } catch (error) {
    console.error(error);
  }
}
