import React, { useState } from "react";
import Items from "./Items";

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
    <div>
      {itemList.map((items, i) => (
        <Items
          order={i + 1}
          key={i}
          name={i}
          handleDeleteItemBox={handleDeleteItemBox}
        />
      ))}
      <button onClick={handleClick}>정보 고시 추가</button>
    </div>
  );
}

export default ItemBox;
