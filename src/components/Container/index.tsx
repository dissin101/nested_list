import React, { useState } from "react";
import { StyledContainer, StyledHeader } from "./styles";
import ListControl from "../ListControl";
import { IListItem } from "../../interfaces";
import { generateUniqueID } from "../../utils";
import List from "../List";

const Container: React.FC = () => {
  const [dataList, setDataList] = useState<IListItem[]>([]);

  const addItem = (name: string, parentId?: string) => {
    const id = generateUniqueID();

    const newListItem: IListItem = {
      name,
      id,
      parentId: parentId || null,
      children: [],
    };

    const updateList = (items: IListItem[]): IListItem[] => {
      return items.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            children: [...item.children, newListItem],
          };
        } else {
          return {
            ...item,
            children: updateList(item.children),
          };
        }
      });
    };

    setDataList((prevState) =>
      parentId ? updateList(prevState) : [...prevState, newListItem],
    );
  };

  const removeItem = (id: string) => {
    const updateList = (items: IListItem[]): IListItem[] => {
      return items
        .filter((item) => item.id !== id)
        .map((item) => {
          return {
            ...item,
            children: updateList(item.children),
          };
        });
    };

    setDataList((prevState) => updateList(prevState));
  };

  return (
    <StyledContainer>
      <StyledHeader>Тестовое задание "Вложенный список"</StyledHeader>
      <ListControl addItem={addItem} placeholder={"Название родителя"} />
      <List addItem={addItem} removeItem={removeItem} data={dataList} />
    </StyledContainer>
  );
};

export default Container;
