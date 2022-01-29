import React from "react";

import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import Calendar from "layout/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { setPeriodActions } from "store";
import userSelectionMockData from "utils/product-period-data";

import styles from "./ProductExposurePeriod.module.css";

const ProductExposurePeriod = () => {
  const dispatch = useDispatch();

  const checkedRadio = useSelector((state) => state.period.exposure.radio);

  const checkSelectionHandler = (e) => {
    dispatch(setPeriodActions.exposureRadio(e.target.value));
  };

  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput
        value={data.selection}
        onChange={checkSelectionHandler}
        checked={checkedRadio === data.selection}
      />
      <p>{data.selection}</p>
    </li>
  ));

  return (
    <SectionBody className={styles.exposure}>
      <ContentBodyTitle>상품 노출 기한</ContentBodyTitle>
      <SectionBodyContent>
        <ul>{userSelectionLists}</ul>
        <div className={styles.content}>
          <Calendar />
          <p>~</p>
          <Calendar />
        </div>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default ProductExposurePeriod;
