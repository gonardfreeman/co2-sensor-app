import { TriangleAlert, CloudCheck } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBLE } from "@/hooks/bleHooks";
import { CO2_MAX_LEVEL } from "../constants/levels";

export function GasReading() {
  const { co2 } = useBLE();
  const isNormal = co2 < CO2_MAX_LEVEL;
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>CO2 Readings</CardTitle>
        <CardAction>
          <Badge variant={isNormal ? "secondary" : "destructive"}>
            {isNormal ? <CloudCheck /> : <TriangleAlert />}
            {isNormal ? "Normal" : "CO2 is high"}
          </Badge>
        </CardAction>
        <CardDescription>
          Shows real-time CO₂ from a BLE sensor with air quality indicator.
        </CardDescription>
      </CardHeader>
      <CardContent>{co2}ppm</CardContent>
    </Card>
  );
}
