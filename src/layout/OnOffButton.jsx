import React, { Fragment } from "react";
import styles from "./OnOffButton.module.css";

function OnOffButton({ props }) {
  return (
    <div>
      <input id={props.id} type="checkbox" className={styles.btn} />
      <label htmlFor={props.id} className={styles.label}>
        <span></span>
      </label>
    </div>
  );
}

export default OnOffButton;