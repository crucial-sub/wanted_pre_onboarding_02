import React, { Fragment } from "react";
import Input from "layout/Input";

const PlusOption = ({ id, deleteOption }) => {
  return (
    <Fragment>
      {" "}
      <Input placeholder={"추가 옵션명 (필수)"} />
      <Input placeholder={"추가 옵션 정상가 (필수)"} />
      <button onClick={() => deleteOption(id)}>삭제</button>
    </Fragment>
  );
};

export default PlusOption;
