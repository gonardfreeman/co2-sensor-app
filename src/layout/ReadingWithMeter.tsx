import { Box, Card, Code, Flex, Text } from "@radix-ui/themes";

import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from "../components/ReadingMeter";

interface ReadingParams {
  name: string;
  value: number;
  units: string;
  max: number;
}

export const MeterData = ({ value, units, max, name }: ReadingParams) => {
  const currentValueInPecents = (value / max) * 100;
  return (
    <MeterRoot value={currentValueInPecents}>
      <MeterLabel>
        {name}({units})
      </MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  );
};

export const ReadingWithMeter = ({
  value,
  units,
  name,
  max,
}: ReadingParams) => {
  return (
    <Card>
      <Box>
        <Box>
          <Flex gap="2" justify="between">
            <Text>{name} Reading</Text>
            <Code>
              {value}
              {units}
            </Code>
          </Flex>
        </Box>
        <Box>
          <MeterData value={value} units={units} max={max} name={name} />
        </Box>
      </Box>
    </Card>
  );
};
