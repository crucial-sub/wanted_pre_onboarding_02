import React, { useState } from "react";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";
import OptionItem from "components/ProductOptions/OptionItem";

import Button from "layout/Button";
import style from "components/ProductOptions/ProductOptions.module.css";

import uuid from "utils/uuid";
import OptionSet from "./OptionSet";

const ProductOptionIdx = () => {
  const [optionSetList, setOptionSetList] = useState([]);

  const onCreate = (targetId, newOption) => {
    const newOptionItem = {
      id: crypto.randomUUID(),
    };

    // 어떤 리스트에 추가할 것인가? => id에 해당하는 값을...
    // 어떤 option을 추가할 것인가?
    setOptionSetList((prev) =>
      prev.map((item) => {
        if (item.id !== targetId) return item; // 원래 아이템을 그대로 둔다!
        // 새로운 after 상태를 만든다!
        return {
          ...item,
          optionList: [...item.optionList, newOption],
        };
      })
    );
  };

  const onDelete = (setId, itemId) => {
    console.log(`${setId}에 있는 ${itemId}가 삭제되었습니다.`);

    setOptionSetList((prev) =>
      prev.map((item) => {
        if (item.id !== setId) return item;
        return {
          ...item,
          optionList: item.optionList.filter((option) => option.id !== itemId),
        };
      })
    );
  };

  const addOptionSet = () => {
    const newOptionList = {
      id: crypto.randomUUID(),
      optionList: [],
    };
    setOptionSetList((prev) => [...prev, newOptionList]);
  };

  const deleteOptionSet = (targetId) => {
    const newOptionSetList = optionSetList.filter((it) => it.id !== targetId);
    setOptionSetList(newOptionSetList);
  };

  return (
    <SectionWrapper>
      <SectionHeader>
        <div className={style.headerContainer}>
          상품 옵션 *
          <Button
            onClick={addOptionSet}
            className={style.addOptionsetBtn}
            tag="add"
          >
            + 옵션 세트 추가
          </Button>
        </div>
      </SectionHeader>

      {optionSetList.length === 0 ? (
        <div className={style.beforeContainer}>
          <p>옵션세트를 추가하여 옵션을 구성해 주세요.</p>
        </div>
      ) : (
        ""
      )}

      {optionSetList.map((it) => (
        <>
          <OptionSet
            key={it.id}
            id={it.id}
            onDelete={onDelete}
            onCreate={onCreate}
            optionList={it}
            deleteOptionSet={deleteOptionSet}
          />
        </>
      ))}
    </SectionWrapper>
  );
};

export default ProductOptionIdx;
