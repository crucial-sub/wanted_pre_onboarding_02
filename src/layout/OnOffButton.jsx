import React from "react";
import styles from "./OnOffButton.module.css";

function OnOffButton(props) {
  return (
    <div>
      <input
        id={props.id}
        type="checkbox"
        className={styles.btn}
        onChange={props.onChange}
        checked={props.checked}
        readOnly
      />
      <label htmlFor={props.id} className={styles.label}>
        <span></span>
      </label>
    </div>
  );
}

export default OnOffButton;
