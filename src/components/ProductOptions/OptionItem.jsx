import React, { useEffect, useState } from "react";
import style from "../ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
import PlusOption from "./PlusOption";

const OptionItem = ({ optionList, setOptionList, setOptionSetList, name }) => {
  const delOpt = (e) => {
    const targetI = Number(e.target.name);
    if (optionList.length === 1) {
      setOptionSetList((list) => list.filter((set, i) => i !== targetI));
    } else {
      setOptionList((list) => list.filter((set, i) => i !== targetI));
    }
  };

  const [option, setOption] = useState({
    optionId: name,
    optionName: "",
    price: "",
    salePrice: "",
    stock: 0,
  });

  //validation
  const isNumber = (value) => {
    const regex = /[0-9]/g;
    return regex.test(value);
  };

  const handleChangeState = (e) => {
    setOption({
      ...option,
      [e.target.name]: e.target.value,
    });
    console.log("change");
  };

  const handleNumberChangeState = (e) => {
    if (e.nativeEvent.data && isNumber(e.nativeEvent.data)) {
      setOption({
        ...option,
        [e.target.name]: e.target.value,
      });
    } else if (e.nativeEvent.data === null) {
      setOption({
        ...option,
        [e.target.name]: e.target.value,
      });
    }
    e.preventDefault();
    return null;
  };

  const salesPercent = Math.floor(
    ((option.price - option.salePrice) / option.price) * 100
  );

  const [plusOptNum, setPlusOptNum] = useState(0);
  const [plusOptionList, setPlusOptionList] = useState([0]);

  const addPlusOption = () => {
    setPlusOptNum((prev) => prev + 1);
    setPlusOptionList((state) => [...state, plusOptNum]);
    console.log(plusOptNum, plusOptionList);
  };

  const deleteOption = (e) => {
    const newPlusOptionList = plusOptionList.filter(
      (it, i) => i !== Number(e.target.name)
    );
    console.log(newPlusOptionList);
    setPlusOptionList(newPlusOptionList);
  };

  return (
    <div name={name} className={style.optionContents}>
      <button className={style.optionBtn} onClick={delOpt}>
        삭제
      </button>
      <Input
        className={style.inputOption}
        placeholder={"옵션명을 입력해 주세요. (필수)"}
        name="optionName"
        value={option.optionName}
        onChange={handleChangeState}
      />
      <div className={style.inputSmall}>
        <Input
          className={style.inputOptionSmall}
          placeholder={"상품 정상가 (필수)"}
          name="price"
          value={option.price}
          onChange={handleNumberChangeState}
        />
        <p className={style.optionLabel}> 원</p>
        {salesPercent > 0 && salesPercent !== 100 ? (
          <div>{salesPercent}%</div>
        ) : (
          ""
        )}
        <Input
          className={style.inputOptionSmall}
          placeholder={"상품 판매가 (필수)"}
          name="salePrice"
          value={option.salePrice}
          onChange={handleNumberChangeState}
        />
        <p className={style.optionLabel}>원</p>
        <Input
          className={style.inputOptionSmall}
          placeholder={"재고(필수)"}
          name="stock"
          value={option.stock}
          onChange={handleNumberChangeState}
        />
        <p className={style.optionLabel}>개</p>
        <select>
          <option>비과세</option>
          <option>과세</option>
        </select>
      </div>
      <div>
        {plusOptionList.map((it, i) => (
          <PlusOption key={i} deleteOption={deleteOption} name={i} />
        ))}
      </div>
      <button onClick={addPlusOption}>추가 옵션 상품 추가</button>
    </div>
  );
};

export default OptionItem;
