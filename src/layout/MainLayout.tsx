import { Flex, Box, Tabs } from "@radix-ui/themes";

import { Main } from "../components/Main";
import { Code } from "../components/Text";

import { useBLE } from "../hooks/bleHooks";
import { BleActions } from "./BleActionsLayout";
import { ReadingWithMeter } from "./ReadingWithMeter";

import { MAX_LEVEL } from "../constants";
import { HistoricData } from "./HistoricData";

export const MainLayout = () => {
  const {
    isConnected,
    co2,
    humidity,
    temperature,
    humidityUnits,
    gasUnits,
    temperatureUnits,
  } = useBLE();
  return (
    <Main>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="historicData">Historic Data</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <Flex direction="column" mt="2" gap="1" p="2">
            {isConnected && (
              <>
                <Flex gap="4">
                  <ReadingWithMeter
                    name="CO2"
                    value={co2}
                    units={gasUnits}
                    max={MAX_LEVEL.gas}
                  />
                  <ReadingWithMeter
                    name="Humidity"
                    value={humidity}
                    units={humidityUnits}
                    max={MAX_LEVEL.humidity}
                  />
                  <ReadingWithMeter
                    name="Temperature"
                    value={temperature}
                    units={temperatureUnits}
                    max={MAX_LEVEL.temperature}
                  />
                </Flex>
              </>
            )}
            {!isConnected && (
              <Box>
                <BleActions />
                <Code>Device not connected, please click Connect button</Code>
              </Box>
            )}
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="historicData">
          <Flex direction="column" mt="2" gap="1" p="2">
            <HistoricData />
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Main>
  );
};
