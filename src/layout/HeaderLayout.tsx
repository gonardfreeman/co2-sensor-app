import { Header } from "../components/Header";
import { Heading1 } from "../components/Heading1";
import { Image } from "../components/Image";
import { NavHorizontal } from "../components/Nav";
export const HeaderLayout = () => {
  return (
    <Header>
      <NavHorizontal $margin="0 0 0 1.25rem">
        <Image src="./env-icon.png" $width="2rem" />
        <Heading1>Sensor</Heading1>
      </NavHorizontal>
    </Header>
  );
};
