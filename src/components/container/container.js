import { ContainerEl } from "./container.styles";

export const Container = ({ className = "", ...props }) => {
  return (
    <ContainerEl className={"container " + className} {...props}></ContainerEl>
  );
};
