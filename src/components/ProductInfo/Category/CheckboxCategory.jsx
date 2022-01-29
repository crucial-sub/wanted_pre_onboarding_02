import React, { useContext, useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import { CategoryContext } from "store/Contexts/Category";
import SelectedCategory from "./SelectedCategory";

import styles from "./CheckboxCategory.module.css";

const CheckboxCategory = () => {
  const { cateObject } = useContext(CategoryContext);
  const [isAllFalse, setIsAllFalse] = useState(true);

  const handleIsAllFalse = () => {
    for (const [cate, bool] of Object.entries(cateObject)) {
      if (bool === true) {
        console.log(cate, bool);
        setIsAllFalse(false);
        break;
      }
      setIsAllFalse(true);
    }
  };

  useEffect(() => {
    handleIsAllFalse();
  }, [cateObject]);

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        {Object.keys(cateObject).map((key) => {
          return (
            <div className={styles.innerContainer} key={key}>
              <Checkbox value={key} checked={cateObject[key]} />
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.selected}>
        {Object.keys(cateObject).map((key) => {
          return (
            <div className={styles.innerContainer} key={key}>
              <SelectedCategory value={key} checked={cateObject[key]} />
            </div>
          );
        })}
        <div className={isAllFalse ? 0 : styles.setNone}>
          <p>카테고리를 지정해 주세요.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckboxCategory;
