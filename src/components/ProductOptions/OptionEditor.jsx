import React from "react";
import style from "components/ProductOptions/ProductOptions.module.css";
import UploadForm from "./UploadForm";
import uuid from "utils/uuid";
//상품 등록 옵션
const OptionEditor = ({ optNum, setOptNum, setOptionList }) => {
  const AddOpt = () => {
    setOptNum((prev) => prev + 1);
    setOptionList((state) => [...state, optNum]);
  };
  return (
    <div className={style.optionContainer}>
      <div className={style.imgContainer}>
        <UploadForm />
      </div>
      <button onClick={AddOpt}>+ 옵션 추가</button>
    </div>
  );
};

export default OptionEditor;
