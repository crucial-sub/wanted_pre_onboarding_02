import { createContext, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isShow, setIsShow] = useState(false);

  return (
    <ItemContext.Provider value={{ items, setItems, isShow, setIsShow }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
