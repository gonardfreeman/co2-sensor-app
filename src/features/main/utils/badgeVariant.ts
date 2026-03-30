export type BadgeReadingProps = {
  isConnected: boolean;
  isNormal: boolean;
};

export function getBadgeVariant({
  isNormal,
  isConnected,
}: BadgeReadingProps): "secondary" | "destructive" {
  if (!isConnected || isNormal) {
    return "secondary";
  }
  return "destructive";
}
