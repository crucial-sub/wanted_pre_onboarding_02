import React, { useState } from "react";
import OptionEditor from "components/ProductOptions/OptionEditor";
import OptionList from "components/ProductOptions/OptionList";
import uuid from "utils/uuid";
import OptionItem from "./OptionItem";

import Button from "layout/Button";
import style from "components/ProductOptions/ProductOptions.module.css";

const OptionSet = ({ id, onDelete, onCreate, optionList, deleteOptionSet }) => {
  const optionListId = id;

  const clickHandler = () => {
    console.log(`clickHandler${optionList.id}`);
    deleteOptionSet(optionList.id);
  };

  return (
    <>
      <div className={style.toRight}>
        <Button onClick={clickHandler} className={style.deleteBtn} tag="delete">
          삭제
        </Button>
      </div>

      <OptionEditor onCreate={onCreate} optionListId={optionList.id} />
      <OptionList onDelete={onDelete} {...optionList} />
    </>
  );
};

export default OptionSet;
