import { useState } from "react";

import SectionWrapper from "layout/Section/SectionWrapper";
import SectionHeader from "layout/Section/SectionHeader";

import ProductDepartureDate from "./ProductDepartureDate";
import PreOrderDelivery from "./PreOrderDelivery";
import Visiting from "./Visiting";

export const ProductDelivery = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <SectionWrapper>
      <SectionHeader children="상품 배송 설정"></SectionHeader>
      <ProductDepartureDate
        checked1={checked1}
        setChecked1={setChecked1}
        setChecked3={setChecked3}
      />
      <Visiting
        checked2={checked2}
        setChecked2={setChecked2}
        setChecked3={setChecked3}
      />
      <PreOrderDelivery
        checked3={checked3}
        setChecked3={setChecked3}
        setChecked1={setChecked1}
        setChecked2={setChecked2}
      />
    </SectionWrapper>
  );
};
