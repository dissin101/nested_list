import React from "react";
import { StyledInput } from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
