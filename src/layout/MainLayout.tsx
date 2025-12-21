import { Flex, Box } from "@radix-ui/themes";

import { Main } from "../components/Main";
import { Code } from "../components/Text";

import { useBLE } from "../hooks/bleHooks";
import { BleActions } from "./BleActionsLayout";
import {
  TabRoot,
  TabList,
  TabPanel,
  Tab,
  TabIndicator,
} from "../components/tabs/Tab";

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
      <TabRoot defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="historicData">Historic Data</Tab>
          <TabIndicator />
        </TabList>
        <TabPanel value="overview">
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
        </TabPanel>
        <TabPanel value="historicData">
          <Flex direction="column" mt="2" gap="1" p="2">
            <HistoricData />
          </Flex>
        </TabPanel>
      </TabRoot>
    </Main>
  );
};
