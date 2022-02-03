import React, { useState } from "react";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";

import Button from "layout/Button";
import style from "components/ProductOptions/ProductOptions.module.css";

import OptionSet from "./OptionSet";
import { useDispatch, useSelector } from "react-redux";
import { optionActions } from "store";

const ProductOptionIdx = () => {
  const dispatch = useDispatch();
  const testOptionSet = useSelector((state) => state.option.optionSet);

  const [optionSetList, setOptionSetList] = useState([]);

  const onCreate = (targetId, newOption) => {
    const newOptionItem = {
      id: crypto.randomUUID(),
    };

    setOptionSetList((prev) =>
      prev.map((item) => {
        if (item.id !== targetId) return item;

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

    dispatch(optionActions.option(newOptionList));
    setOptionSetList((prev) => [...prev, newOptionList]);
  };

  console.log(testOptionSet);

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
