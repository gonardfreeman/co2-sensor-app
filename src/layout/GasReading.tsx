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

export const GasMeter = () => {
  const { co2, gasUnits } = useBLE();
  const currentValueInPecents = (co2 / MAX_LEVEL.gas) * 100;
  return (
    <MeterRoot value={currentValueInPecents}>
      <MeterLabel>CO2({gasUnits})</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  );
};

export const GasReading = () => {
  const { co2, gasUnits } = useBLE();
  return (
    <Card>
      <Box>
        <Box>
          <Flex gap="2" justify="between">
            <Text>Gas Reading</Text>
            <Code>
              {co2} {gasUnits}
            </Code>
          </Flex>
        </Box>
        <Box>
          <GasMeter />
        </Box>
      </Box>
    </Card>
  );
};
