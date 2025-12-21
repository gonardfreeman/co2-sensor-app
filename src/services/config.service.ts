import { ENVIRONMENT_SERVICE, GAS, HUMIDITY, TEMPERATURE } from "../constants";
import BaseUuidService from "./base";

export const bleConfig = {
  services: {
    environment: {
      service: new BaseUuidService(ENVIRONMENT_SERVICE),
      characteristics: {
        gas: {
          uuid: new BaseUuidService(GAS),
          sensorName: "co2_sensor",
        },
        humidity: {
          uuid: new BaseUuidService(HUMIDITY),
          sensorName: "humidity_sensor",
        },
        temperature: {
          uuid: new BaseUuidService(TEMPERATURE),
          sensorName: "temperature_sensor",
        },
      },
    },
  },
};
