import React, { useState } from "react";
import OptionEditor from "components/ProductOptions/OptionEditor";
import uuid from "utils/uuid";
import OptionItem from "./OptionItem";

const OptionSet = ({ name, optionSetList, setOptionSetList, set }) => {
  const [optNum, setOptNum] = useState(0);
  const [optionList, setOptionList] = useState([optNum]);
  const delSet = (e) => {
    const target = e.target.name;
    const newOptionSetList = optionSetList.filter((set) => set !== target);
    setOptionSetList(newOptionSetList);
  };

  return (
    <div name={set}>
      <button name={set} onClick={delSet}>
        삭제
      </button>
      <OptionEditor
        optNum={optNum}
        setOptNum={setOptNum}
        setOptionList={setOptionList}
      />
      {optionList.map((opt, i) => (
        <OptionItem
          key={i}
          optionList={optionList}
          setOptionList={setOptionList}
          optionSetList={optionSetList}
          setOptionSetList={setOptionSetList}
          name={i}
        />
      ))}
    </div>
  );
};

export default OptionSet;
