import { useBLE } from "@/hooks/bleHooks";

import { HUMIDITY_MAX_LEVEL, HUMIDITY_MIN_LEVEL } from "../constants/levels";
import { getBadgeVariant } from "../utils/badgeVariant";
import { ReadingBadge } from "./ReadingBadge";
import { ReadingCard } from "./ReadingCard";

export function HumidityReading() {
  const { humidity, isConnected } = useBLE();
  const isNormal = HUMIDITY_MIN_LEVEL < humidity && HUMIDITY_MAX_LEVEL >= humidity;
  const humidityLabel = humidity > 0 ? `${humidity}%` : "-";
  const badgeVariant = getBadgeVariant({ isNormal, isConnected });
  return (
    <ReadingCard
      cardTitle="Humidity Readings"
      cardDescription="Shows real-time humidity from a BLE sensor."
      readingValue={humidityLabel}
      badgeElement=<ReadingBadge
        type="humidity"
        isConnected={isConnected}
        isNormal={isNormal}
        badgeVariant={badgeVariant}
      />
    />
  );
}
