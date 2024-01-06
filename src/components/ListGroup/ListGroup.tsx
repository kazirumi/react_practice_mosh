import { useState } from "react";
// import styles from "./ListGroups.module.css";
import styled from "styled-components";

interface ListItemProps {
  active: string|undefined;
}

const List = styled.li`
  background-color: blue;
  list-style: none;
  padding: 10px 10px 10px 10px;
`;
const ListItem = styled.ul<ListItemProps>`
  border: solid;
  border-color: yellow;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background: ${props => props.active=='true' ? "orange" : "purple"};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading} List</h2>
      {items.length === 0 && <p className="text-danger">No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex ? 'true':undefined}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
