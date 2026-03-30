import { NORMAL_COPY } from "../constants/misc";
import { type BadgeReadingProps } from "./badgeVariant";

type BadgeTextProps = BadgeReadingProps & { type: "co2" | "humidity" | "temperature" };

export function getBadgeText({ isConnected, isNormal, type }: BadgeTextProps) {
  if (!isConnected) {
    return "Sensor is not connected";
  }

  switch (type) {
    case "co2":
      return isNormal ? NORMAL_COPY : "CO2 out of range";
    case "humidity":
      return isNormal ? NORMAL_COPY : "Humidity out of range";
    case "temperature":
      return isNormal ? NORMAL_COPY : "Temperature out of range";
    default:
      return isNormal ? NORMAL_COPY : "Out of range";
  }
}
