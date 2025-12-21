import { Box, Card, Code, Flex, Text } from "@radix-ui/themes";

import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from "../components/ReadingMeter";

import { useBLE } from "../hooks/bleHooks";
import { MAX_LEVEL } from "../constants";

export const HumidityMeter = () => {
  const { humidity } = useBLE();
  const currentValueInPecents = (humidity / MAX_LEVEL.humidity) * 100;
  return (
    <MeterRoot value={currentValueInPecents}>
      <MeterLabel>Humidity ({humidity})</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  );
};

export const HumidityReading = () => {
  const { humidity, humidityUnits } = useBLE();
  return (
    <Card>
      <Box>
        <Box>
          <Flex gap="2" justify="between">
            <Text>Humidity Reading</Text>
            <Code>
              {humidity} {humidityUnits}
            </Code>
          </Flex>
        </Box>
        <Box>
          <HumidityMeter />
        </Box>
      </Box>
    </Card>
  );
};
