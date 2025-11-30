import { ENVIRONMENT_SERVICE, GAS, HUMIDITY, TEMPERATURE } from "../constants";
import BaseUuidService from "./base";

export const bleConfig = {
  services: {
    environment: {
      service: new BaseUuidService(ENVIRONMENT_SERVICE),
      characteristics: {
        gas: new BaseUuidService(GAS),
        humidity: new BaseUuidService(HUMIDITY),
        temperature: new BaseUuidService(TEMPERATURE),
      },
    },
  },
};
