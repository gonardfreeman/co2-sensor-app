import { type ReactNode } from "react";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ReadingCardProps = {
  readingValue: string;
  cardTitle: string;
  badgeElement: ReactNode;
  cardDescription: string;
};

export function ReadingCard({
  readingValue,
  cardDescription,
  cardTitle,
  badgeElement,
}: ReadingCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardAction>{badgeElement}</CardAction>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardFooter>{readingValue}</CardFooter>
    </Card>
  );
}
