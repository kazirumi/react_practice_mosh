import React, { useState } from "react";
import styles from "./Button.module.css";
interface Props {
  button_type?: "primary" | "danger" | "secondary";
  children: string;
  onClick: () => void;
}
const Button = ({ button_type = "primary", children, onClick }: Props) => {
  const [food, setFood] = useState({
    name: "Noodles",
    comapany: "magie",
    origin: [
      { place: "Pakistan", id: 1, price: 100 },
      { place: "Pakistan", id: 2, price: 200 },
    ],
  });

  return (
    <>
      {food.comapany}
      <br />
      {food.origin.map((x) => (
        <p key={x.id}>{x.price}</p>
      ))}
      <br />
      <button
        onClick={() => {
          setFood({
            ...food,
            comapany: "cocola",
            origin: food.origin.map(item=>item.id===1?{...item,price:300}:item),
          });
        }}
      >
        change food
      </button>
      <br></br>
      <button
        type="button"
        onClick={onClick}
        className={[
          styles.buttonStyle,
          styles.buttonStyle1,
          styles.buttonStyle2,
        ].join(" ")}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
