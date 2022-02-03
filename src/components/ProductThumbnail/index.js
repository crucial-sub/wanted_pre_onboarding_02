import SectionBody from "layout/Section/SectionBody";
import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import { Fragment } from "react";
import AddImage from "../UploadImages/AddImage";

const ProductThumbnail = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <SectionHeader>상품 소개 이미지</SectionHeader>
        <AddImage multiple="multiple" />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>구매자 추천 이미지</SectionHeader>
        <AddImage multiple="multiple" />
      </SectionWrapper>
    </Fragment>
  );
};

export default ProductThumbnail;
