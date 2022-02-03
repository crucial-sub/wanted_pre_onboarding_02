import { createContext, useState } from "react";

import { data } from "utils/sampleData";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const categories = [...data];
  const categoriesBool = [...Array(categories.length).fill(false)];

  let result = {};
  categories.forEach((cate, i) => {
    result[cate] = categoriesBool[i];
  });

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
