import Input from "layout/Input";
import React from "react";
import styles from "./Item.module.css";

function Item(props) {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input placeholder={props.placeholder} id={props.id} />
      {props.name >= 5 ? (
        <button name={props.name} onClick={props.handleDelete}>
          삭제
        </button>
      ) : null}
    </div>
  );
}

export default Item;
