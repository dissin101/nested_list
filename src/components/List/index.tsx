import React from "react";
import { IListItem } from "../../interfaces";
import { ListContainer, ItemInner, ItemTitle } from "./styles";
import ListControl from "../ListControl";
import Button from "../ui/Button";

interface IListProps {
  data: IListItem[];
  addItem: (name: string, id: string) => void;
  removeItem: (id: string) => void;
}

const List: React.FC<IListProps> = ({ data, addItem, removeItem }) => {
  return (
    <ListContainer>
      {data.map(({ id, name, parentId, children }) => (
        <li key={id}>
          <ItemInner>
            <ItemTitle>{name}</ItemTitle>
            {parentId && <Button onClick={() => removeItem(id)}>X</Button>}
          </ItemInner>
          <ListControl
            addItem={(name: string) => addItem(name, id)}
            placeholder={"Название ребенка"}
          />
          <List data={children} addItem={addItem} removeItem={removeItem} />
        </li>
      ))}
    </ListContainer>
  );
};

export default List;
