import React, { useState } from "react";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";

import uuid from "utils/uuid";
import OptionSet from "./OptionSet";

const ProductOptionIdx = () => {
  const [setNum, setSetNum] = useState(0);
  const [optionSetList, setOptionSetList] = useState([]);

  // const AddSet = () => {
  //   setSetNum((prev) => prev + 1);
  //   setOptionSetList((state) => [...state, setNum]);
  // };
  const AddSet = () => {
    const newOptionSet = crypto.randomUUID();
    // optionSetList.push(newOptionSet);
    // if (optionSetList.length === 0) {
    //   setOptionSetList(newOptionSet);
    // } else {
    setOptionSetList((prev) => [...prev, newOptionSet]);
    // }
  };

  return (
    <SectionWrapper>
      <SectionHeader>상품 옵션</SectionHeader>
      <button onClick={AddSet}>옵션 세트 추가</button>

      {optionSetList.length === 0 ? (
        <div>옵션세트를 추가하여 옵션을 구성해 주세요.</div>
      ) : (
        optionSetList.map((set, i) => (
          <OptionSet
            key={i}
            name={i}
            optionSetList={optionSetList}
            setOptionSetList={setOptionSetList}
            set={set}
          />
        ))
      )}
    </SectionWrapper>
  );
};

export default ProductOptionIdx;
