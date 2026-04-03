import { useBLE } from "@/hooks/bleHooks";

import { TEMPERATURE_MAX_LEVEL, TEMPERATURE_MIN_LEVEL } from "../constants/levels";
import { getBadgeVariant } from "../utils/badgeVariant";
import { ReadingBadge } from "./ReadingBadge";
import { ReadingCard } from "./ReadingCard";

export function TemperatureReading() {
  const { temperature, isConnected } = useBLE();
  const isNormal = TEMPERATURE_MIN_LEVEL <= temperature && TEMPERATURE_MAX_LEVEL >= temperature;
  const temperatureLabel = temperature > 0 ? `${temperature}°C` : "-";
  const badgeVariant = getBadgeVariant({ isNormal, isConnected });
  return (
    <ReadingCard
      cardTitle="Temperature Readings"
      cardDescription="Shows real-time temperature from a BLE sensor."
      readingValue={temperatureLabel}
      badgeElement=<ReadingBadge
        type="temperature"
        isConnected={isConnected}
        isNormal={isNormal}
        badgeVariant={badgeVariant}
      />
    />
  );
}
