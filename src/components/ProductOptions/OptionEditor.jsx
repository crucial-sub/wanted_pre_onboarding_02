import React from "react";
import style from "components/ProductOptions/ProductOptions.module.css";
import UploadForm from "./UploadForm";
//상품 등록 옵션
const OptionEditor = ({ onCreate, optionListId }) => {
  const handleCreate = () => {
    const newOption = {
      id: crypto.randomUUID(),
      value: "",
    };
    alert("추가 성공");
    onCreate(optionListId, newOption);
    console.log(optionListId, newOption);
  };

  return (
    <div className={style.optionContainer}>
      <div className={style.imgContainer}>
        <UploadForm />
      </div>
      <button onClick={handleCreate}> + 옵션 추가</button>
    </div>
  );
};

export default OptionEditor;
