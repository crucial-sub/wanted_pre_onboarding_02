import React, { useEffect } from "react";

import UploadImages from "components/UploadImages";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";

const Thumbnail = () => {
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품 썸네일</ContentBodyTitle>
      <SectionBodyContent className={styles.box}>
        <UploadImages />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default Thumbnail;
