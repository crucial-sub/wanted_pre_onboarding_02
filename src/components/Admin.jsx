import Button from "layout/Button";
import React from "react";
import styles from "./Admin.module.css";
import { Etc } from "./Etc";
import { NoticeProductInfo } from "./NoticeProductInfo";
import { ProductBenefit } from "./ProductBenefit";
import { ProductDelivery } from "./ProductDelivery";
import ProductInfo from "./ProductInfo";
import ProductOptions from "components/ProductOptions/index";
import ProductPeriodSetup from "./ProductPeriodSetup";
import ProductThumbnail from "./ProductThumbnail";

const MockData = [
  { id: "m1", menu: "기본설정" },
  { id: "m2", menu: "회원" },
  { id: "m3", menu: "진열" },
  {
    id: "m4",
    menu: "상품",
    list: ["상품 리스트", "상품 재고 관리", "상품 등록"],
  },
  { id: "m5", menu: "주문" },
  { id: "m6", menu: "배송" },
  { id: "m7", menu: "프로모션" },
  { id: "m8", menu: "혜택" },
  { id: "m9", menu: "고객 센터 관리" },
  { id: "m10", menu: "알림" },
];

const Admin = () => {
  return (
    <div className={styles.admin}>
      <header className={styles.header}>
        <nav className={`${styles["nav-top"]}`}>
          <div className={styles.logo}>
            <span>
              <img
                src="https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo_white.png"
                alt="logo"
              ></img>
            </span>
            <span>ADMIN</span>
          </div>
        </nav>
        <nav className={`${styles["nav-bottom"]}`}>
          <div>
            <span>
              <b>상품등록</b>
            </span>
            <span>ADM_PRODUCT_AD</span>
          </div>
        </nav>
      </header>
      <section className={styles.body}>
        <nav className={`${styles["left-nav"]}`}>
          <div>
            <img
              src="https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png"
              alt="logo"
            ></img>
          </div>
          {MockData.map((data) => {
            return (
              <ul key={data.id}>
                {data.menu}
                <li>{data.list}</li>
              </ul>
            );
          })}
          <svg></svg>
        </nav>
        <div>
          <div className={styles.label}>
            <div className={styles.sectionName}>상품 등록</div>
            <Button Button tag="save">
              저장하기
            </Button>
          </div>
          <ProductPeriodSetup />
          <ProductInfo />
          <NoticeProductInfo />
          <ProductOptions />
          <ProductThumbnail />
          <ProductDelivery />
          <ProductBenefit />
          <Etc />
        </div>
      </section>
    </div>
  );
};

export default Admin;
