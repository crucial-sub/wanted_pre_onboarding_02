import React from "react";
import styles from "./SectionBodyContent.module.css";

const SectionBodyContent = (props) => {
  return (
    <div className={`${styles.content} ${props.className}`} ref={props.ref}>
      {props.children}
    </div>
  );
};

export default SectionBodyContent;
