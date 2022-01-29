import React from "react";

import styles from "./Check.module.css";
const Checkbox = (props) => {
  const { checked, value, onChange } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
        className={styles.input}
        id={value}
      />
      <label htmlFor={value}></label>
    </div>
  );
};

export default Checkbox;
