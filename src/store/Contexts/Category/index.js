import { createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const categories = [...Array(5).keys()];
  const categoriesBool = [...Array(categories.length).fill(false)];

  let result = {};
  categories.forEach((cate, i) => (result[i] = categoriesBool[i]));

  const [cateObject, setCateObject] = useState(result);

  return (
    <CategoryContext.Provider
      value={{
        cateObject,
        setCateObject,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
