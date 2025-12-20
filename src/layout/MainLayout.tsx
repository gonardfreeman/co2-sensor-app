import { Horizontal, Vertical } from "../components/Grid";
import { Main } from "../components/Main";
import { SensorTable } from "../components/table/Table";
import { Code } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";
import { BleActions } from "./BleActionsLayout";
import { Co2Sensor, HumiditySensor, TemperatureSensor } from "./sensors";
import {
  TabRoot,
  TabList,
  TabPanel,
  Tab,
  TabIndicator,
} from "../components/tabs/Tab";

export const MainLayout = () => {
  const { isConnected } = useBLE();
  return (
    <Main>
      <TabRoot defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="historicData">Historic Data</Tab>
          <TabIndicator />
        </TabList>
        <TabPanel value="overview">
          <Vertical $gap="0.5rem">
            {isConnected && (
              <>
                <Horizontal $gap="0.5rem;">
                  <Co2Sensor />
                  <HumiditySensor />
                  <TemperatureSensor />
                </Horizontal>
              </>
            )}
            {!isConnected && (
              <Code>Device not connected, please click Connect button</Code>
            )}
            <BleActions />
          </Vertical>
        </TabPanel>
        <TabPanel value="historicData">
          <SensorTable params={{ columns: [], data: [] }} />
        </TabPanel>
      </TabRoot>
    </Main>
  );
};
