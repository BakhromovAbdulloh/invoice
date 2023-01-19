import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonBgColors = {
  white: "#F9FAFE",
  red: "#EC5757",
};

const ButtonStyles = `
    padding: 17px 24px;
    text-decoration: none;
    border: none;
    border-radius: 24px;
    color: #fff;
    font-weight: 700;   
    font-size: 12px;
    line-height: 15px;  
    
`;

const ButtonEl = styled.button`
  ${ButtonStyles}
  background-color: ${(props) => ButtonBgColors[props.colorType] || "#7C5DFA"}
`;

const LinkEl = styled(Link)`
  ${ButtonStyles}
  background-color: ${(props) => ButtonBgColors[props.colorType] || "#7C5DFA"}
`;

export const Button = ({ to, ...props }) => {
  if (to) return <LinkEl to={to} {...props} />;

  return <ButtonEl {...props} />;
};
