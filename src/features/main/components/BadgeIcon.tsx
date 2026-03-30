import { CircleCheckBig, TriangleAlert, RadioOff } from "lucide-react";
import { BadgeReadingProps } from "../utils/badgeVariant";

export function BadgeIcon({ isNormal, isConnected }: BadgeReadingProps) {
  if (!isConnected) {
    return <RadioOff />;
  }
  if (!isNormal) {
    return <TriangleAlert />;
  }
  return <CircleCheckBig />;
}
