import React, { useState } from "react";
import OptionItem from "components/ProductOptions/OptionItem";
import style from "components/ProductOptions/ProductOptions.module.css";

const OptionList = ({ onDelete, optionList, id }) => {
  const optionListId = id;

  return (
    <div className={style.optionAddContainer}>
      {optionList.map((option, idx) => (
        <OptionItem
          key={option.id}
          {...option}
          optionListId={optionListId}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

OptionList.defaultProps = {
  optionList: [],
};

export default OptionList;
