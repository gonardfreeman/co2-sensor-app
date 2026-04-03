import { Badge } from "@/components/ui/badge";

import { getBadgeText } from "../utils/getBadgeText";
import { BadgeIcon } from "./BadgeIcon";

type ReadingBadgeProps = {
  badgeVariant: "secondary" | "destructive";
  isConnected: boolean;
  isNormal: boolean;
  type: "co2" | "temperature" | "humidity";
};

export function ReadingBadge({ badgeVariant, isConnected, isNormal, type }: ReadingBadgeProps) {
  return (
    <Badge variant={badgeVariant}>
      <BadgeIcon isConnected={isConnected} isNormal={isNormal} />
      {getBadgeText({ isConnected, isNormal, type })}
    </Badge>
  );
}
