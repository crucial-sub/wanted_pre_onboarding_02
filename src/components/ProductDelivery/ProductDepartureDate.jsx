import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import React, { useEffect } from "react";
import styles from "./ProductDepartureDate.module.css";

const ID_1 = "id1";

function ProductDepartureDate({ checked1, setChecked1, setChecked3 }) {
  const handleClick = () => {
    setChecked1((check) => !check);
    setChecked3(false);
    return checked1;
  };
  return (
    <SectionBody>
      <ContentBodyTitle children="사용자 배송일 출발일 지정"></ContentBodyTitle>
      <SectionBodyContent>
        <OnOffButton id={ID_1} onClick={handleClick} checked={checked1} />
      </SectionBodyContent>
    </SectionBody>
  );
}

export default ProductDepartureDate;