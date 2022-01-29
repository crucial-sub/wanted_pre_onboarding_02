import React from "react";
import Input from "layout/Input";

const PlusOption = ({ id, deleteOption, name }) => {
  return (
    <div name={name}>
      <Input placeholder={"추가 옵션명 (필수)"} />
      <Input placeholder={"추가 옵션 정상가 (필수)"} />
      <button name={name} onClick={deleteOption}>
        삭제
      </button>
    </div>
  );
};

export default PlusOption;
