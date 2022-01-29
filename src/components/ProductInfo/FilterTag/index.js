import React, { useContext, useEffect, useRef, useState } from "react";

import { ItemContext } from "store/Contexts/FilterTag";

import styles from "components/ProductInfo/ProductInfo.module.css";

import Button from "layout/Button";
import Input from "layout/Input";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import SearchList from "./SearchList";
import SelectedTag from "./SelectedTag";
const filterData = [
  "가을",
  "가람",
  "기쁨",
  "구름",
  "나리",
  "너울",
  "누리",
  "노을",
  "눈꽃",
  "다솜",
  "마음",
  "마루",
  "미르",
  "무늬",
  "맑음",
  "믿음",
  "뭇별",
  "바다",
  "방울",
  "보름",
  "봄꽃",
  "별빛",
  "별밤",
  "별숲",
  "사랑",
  "솔잎",
  "새벽",
  "새싹",
  "샛별",
  "아침",
  "아름",
  "여름",
  "이슬",
  "여울",
  "웃음",
  "으뜸",
  "열매",
  "윤슬",
  "저녁",
  "잔별",
  "초롱",
  "풀잎",
  "하루",
  "하나",
  "하늘",
  "햇살",
  "햇볕",
  "햇봄",
];

const FilterTag = () => {
  const [userInput, setUserInput] = useState("");
  useEffect(() => {});

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const inputRef = useRef();

  const { setIsShow } = useContext(ItemContext);

  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>
        <p>필터 태그</p>
      </ContentBodyTitle>
      <SectionBodyContent>
        <Input
          className={styles.filter__input}
          placeholder="필터태그를 검색해 주세요."
          type="text"
          onChange={handleChange}
          onFocus={() => setIsShow(true)}
          onBlur={() => setIsShow(false)}
          ref={inputRef}
        />
        <Button className={styles.filter__searchButton} tag="add">
          검색
        </Button>
        <SearchList userInput={userInput} values={filterData} />
        <p>지정된 필터 태그</p>
        <SelectedTag />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default FilterTag;
