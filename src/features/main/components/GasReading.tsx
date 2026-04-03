import { useBLE } from "@/hooks/bleHooks";

import { CO2_MAX_LEVEL } from "../constants/levels";
import { getBadgeVariant } from "../utils/badgeVariant";
import { ReadingBadge } from "./ReadingBadge";
import { ReadingCard } from "./ReadingCard";

export function GasReading() {
  const { co2, isConnected } = useBLE();
  const isNormal = co2 < CO2_MAX_LEVEL;
  const co2Label = co2 !== 0 ? `${co2}ppm` : "-";
  const badgeVariant = getBadgeVariant({ isNormal, isConnected });
  return (
    <ReadingCard
      cardDescription="Shows real-time CO₂ from a BLE sensor."
      cardTitle="CO2 Readings"
      readingValue={co2Label}
      badgeElement=<ReadingBadge
        badgeVariant={badgeVariant}
        isConnected={isConnected}
        isNormal={isNormal}
        type="co2"
      />
    />
  );
}
