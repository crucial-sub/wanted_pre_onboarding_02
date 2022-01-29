import React, { useContext, useEffect, useRef, useState } from "react";

import { ItemContext } from "store/Contexts/FilterTag";

import { data } from "utils/sampleData";

import styles from "components/ProductInfo/ProductInfo.module.css";

import Button from "layout/Button";
import Input from "layout/Input";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import SearchList from "./SearchList";
import SelectedTag from "./SelectedTag";

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
        <SearchList userInput={userInput} values={data} />
        <p className={styles.filter__filtertag}>지정된 필터 태그</p>
        <SelectedTag />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default FilterTag;
