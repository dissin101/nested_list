import React, { ChangeEvent, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Container } from "./styles";

interface IListControlProps {
  addItem: (name: string) => void;
  placeholder: string;
}

const ListControl: React.FC<IListControlProps> = ({ addItem, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const onButtonClick = () => {
    if (!inputValue) {
      alert("Поле ввода не должно быть пустым!");
    } else {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <Container>
      <Input
        onChange={onChangeInput}
        value={inputValue}
        placeholder={placeholder}
      />
      <Button onClick={onButtonClick}>Добавить</Button>
    </Container>
  );
};

export default ListControl;
