import { useState } from "react";
import styles from "./ListGroups.module.css";

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
      <ul className={styles.listGroup}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ?[styles.listGroupItem,styles.active].join(" ") 
                : styles.listGroupItem
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
