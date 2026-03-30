import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { useBLE } from "@/hooks/bleHooks";
import { HUMIDITY_MAX_LEVEL, HUMIDITY_MIN_LEVEL } from "../constants/levels";
import { BadgeIcon } from "./BadgeIcon";
import { getBadgeVariant } from "../utils/badgeVariant";
import { getBadgeText } from "../utils/getBadgeText";

export function HumidityReading() {
  const { humidity, isConnected } = useBLE();
  const isNormal = HUMIDITY_MIN_LEVEL < humidity && HUMIDITY_MAX_LEVEL >= humidity;
  const humidityLabel = humidity > 0 ? `${humidity}%` : "-";
  const badgeVariant = getBadgeVariant({ isNormal, isConnected });
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Humidity Readings</CardTitle>
        <CardAction>
          <Badge variant={badgeVariant}>
            <BadgeIcon isConnected={isConnected} isNormal={isNormal} />
            {getBadgeText({ isConnected, isNormal, type: "humidity" })}
          </Badge>
        </CardAction>
        <CardDescription>Shows real-time humidity from a BLE sensor.</CardDescription>
      </CardHeader>
      <CardFooter>{humidityLabel}</CardFooter>
    </Card>
  );
}
