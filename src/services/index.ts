import { bleConfig } from "./config.service";

export const environmentServiceUuid =
  bleConfig.services.environment.service.toUuid();

export const humUuid =
  bleConfig.services.environment.characteristics.humidity.uuid.toUuid();
export const co2Uuid =
  bleConfig.services.environment.characteristics.gas.uuid.toUuid();
export const tempUuid =
  bleConfig.services.environment.characteristics.temperature.uuid.toUuid();

export const humiditySensorName =
  bleConfig.services.environment.characteristics.humidity.sensorName;
export const gasSensorName =
  bleConfig.services.environment.characteristics.gas.sensorName;
export const temperatureSensorName =
  bleConfig.services.environment.characteristics.temperature.sensorName;

export { bleConfig } from "./config.service";
