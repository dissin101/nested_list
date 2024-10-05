import React from "react";
import { StyledButton } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
