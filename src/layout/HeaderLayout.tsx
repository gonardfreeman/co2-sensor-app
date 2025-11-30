import { Circle } from "../components/Circle";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { NavHorizontal } from "../components/Nav";
import { Code, Heading1 } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";
import { theme } from "../theme";

export const HeaderLayout = () => {
  const { isConnected } = useBLE();
  return (
    <Header>
      <NavHorizontal $margin="0 1.25rem" $isSpread>
        <NavHorizontal>
          <Image src="./env-icon.png" $width="2rem" />
          <Heading1>Sensor</Heading1>
        </NavHorizontal>
        <NavHorizontal>
          <Circle
            $size="0.5rem"
            $bgColor={isConnected ? theme.blueTooth : theme.error}
          />
          <Code>{isConnected ? "Connected" : "Disconnected"}</Code>
        </NavHorizontal>
      </NavHorizontal>
    </Header>
  );
};
