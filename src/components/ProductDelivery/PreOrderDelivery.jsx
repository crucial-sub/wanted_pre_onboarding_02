import React, { useEffect, useState } from "react";

import Calendar from "layout/Calendar";
import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import ShortCalendar from "layout/ShortCalendar";

import styles from "./PreOrderDelivery.module.css";

const ID_3 = "id3";

function PreOrderDelivery({ checked3, setChecked1, setChecked2, setChecked3 }) {
  const handleChange = () => {
    setChecked3((check) => !check);
    setChecked1(false);
    setChecked2(false);
    setDisabled((state) => !state);
  };

  const [orderEndTime, setOrderEndTime] = useState();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setOrderEndTime(new Date().getTime());
  }, []);

  return (
    <SectionBody children="flexBox">
      <ContentBodyTitle>
        선 주문
        <br /> 예약 배송
      </ContentBodyTitle>
      <SectionBodyContent>
        <OnOffButton id={ID_3} onChange={handleChange} checked={checked3} />
        <div className={styles.content}>
          <p>주문 시간</p>
          <Calendar disabled={disabled} />
          <p>~</p>
          <Calendar setTime={setOrderEndTime} disabled={disabled} />
        </div>
        <div className={styles.content}>
          <p>새벽 배송</p>
          <ShortCalendar disabled={disabled} endTime={orderEndTime} />
          <p>일반 배송</p>
          <ShortCalendar disabled={disabled} endTime={orderEndTime} />
        </div>
      </SectionBodyContent>
    </SectionBody>
  );
}

export default PreOrderDelivery;
