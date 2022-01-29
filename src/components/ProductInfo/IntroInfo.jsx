import React, { useState } from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import Input from "layout/Input";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const IntroInfo = () => {
  const [info, setInfo] = useState("");
  const handleChange = (e) => {
    setInfo(e.target.value);
  };
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 구성 소개 정보*</ContentBodyTitle>
      <SectionBodyContent>
        <Input
          className={styles.info__input}
          type="text"
          name="info"
          value={info}
          onChange={handleChange}
          placeholder="상품 구성 소개 정보를 입력해 주세요."
        />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default IntroInfo;
