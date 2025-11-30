import { bleConfig } from "./config.service";

export const environmentServiceUuid =
  bleConfig.services.environment.service.toUuid();
export const humUuid =
  bleConfig.services.environment.characteristics.humidity.toUuid();
export const co2Uuid =
  bleConfig.services.environment.characteristics.gas.toUuid();
export const tempUuid =
  bleConfig.services.environment.characteristics.temperature.toUuid();

export { bleConfig } from "./config.service";
