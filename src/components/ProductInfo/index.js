import React from "react";
import Category from "components/ProductInfo/Category";
import FilterTag from "components/ProductInfo/FilterTag";
import IntroInfo from "components/ProductInfo/IntroInfo";
import ProductName from "components/ProductInfo/ProductName";
import RepresentImg from "components/ProductInfo/RepresentImg";
import Thumbnail from "components/ProductInfo/Thumbnail";
import TotalAmount from "components/ProductInfo/TotalAmount";
import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";

import { ItemProvider } from "store/Contexts/FilterTag";
const ProductInfo = () => {
  return (
    <SectionWrapper>
      <SectionHeader>상품 기본 정보</SectionHeader>
      <Category />
      <ItemProvider>
        <FilterTag />
      </ItemProvider>
      <ProductName />
      <IntroInfo />
      <Thumbnail />
      <RepresentImg />
      <TotalAmount />
    </SectionWrapper>
  );
};

export default ProductInfo;
