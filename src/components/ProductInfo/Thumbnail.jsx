import React, { useEffect } from "react";

import UploadImages from "components/UploadImages";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const Thumbnail = () => {
  useEffect(() => {
    // console.log(file && file[0].name);
  });
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>썸네일</ContentBodyTitle>
      <SectionBodyContent className={styles.box}>
        <UploadImages multiple={false} />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default Thumbnail;
