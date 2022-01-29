import React, { useContext } from "react";

import { CategoryContext } from "components/ProductInfo/Category/Contexts";

import styles from "./SelectedCategory.module.css";
import Button from "layout/Button";
import { style } from "@mui/system";
const SelectedCategory = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const onClick = (e) => {
    let copyObject = { ...cateObject };
    copyObject[value] = !checked;
    setCateObject(copyObject);
  };
  return (
    <div className={!checked ? styles.notChecked : styles.selectedContainer}>
      {value}{" "}
      <Button onClick={onClick} value={value} tag="xBadge">
        ×
      </Button>
    </div>
  );
};

export default SelectedCategory;
