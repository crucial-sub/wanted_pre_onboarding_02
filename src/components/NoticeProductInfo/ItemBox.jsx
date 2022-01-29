import React, { useState } from "react";
import Items from "./Items";
import styles from "./ItemBox.module.css";

function ItemBox() {
  const [order, setOrder] = useState(0);
  const [itemList, setItemsList] = useState([order]);
  const handleClick = () => {
    setOrder((prev) => prev + 1);
    setItemsList((state) => [...state, order]);
  };
  const handleDeleteItemBox = (e) => {
    e.preventDefault();
    const targetI = Number(e.target.name);
    if (targetI >= 1) {
      setItemsList((list) => list.filter((items, i) => i !== targetI));
    }
  };
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemBox}>
        {itemList.map((items, i) => (
          <Items
            order={i + 1}
            key={i}
            name={i}
            handleDeleteItemBox={handleDeleteItemBox}
          />
        ))}
      </div>
      <button onClick={handleClick}>+ 정보고시 추가</button>
    </div>
  );
}

export default ItemBox;
