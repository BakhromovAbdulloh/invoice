import { LogoImage, LogoWrapperEl } from "./logo-wrapper.styles";
import moon from "../../assets/img/Moon.svg";
import chelovek from "../../assets/img/Oval.svg";

export const LogoWrapper = () => {
  return (
    <LogoWrapperEl>
      <img src={moon} alt="moon" />

      <LogoImage src={chelovek} alt="logo" />
    </LogoWrapperEl>
  );
};
