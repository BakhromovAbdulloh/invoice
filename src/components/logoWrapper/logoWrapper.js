import { LogoWrapperEl } from "./logoWrapper,styles";
import moon from "../../assets/img/Moon.svg";
import chelovek from "../../assets/img/Oval.svg";
export const LogoWrapper = () => {
  return (
    <LogoWrapperEl>
      <img src={moon} alt="moon" />

      <img className="logo" src={chelovek} alt="logo" />
    </LogoWrapperEl>
  );
};
