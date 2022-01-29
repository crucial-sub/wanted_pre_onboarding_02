import { useContext, useEffect, useRef, useState } from "react";
import { ItemContext } from "store/Contexts/FilterTag";
import ListItem from "./ListItem";

import styles from "./SearchList.module.css";
const SearchList = ({ userInput, values }) => {
  const [matchValues, setMatchValues] = useState([]);
  const divRef = useRef(null);
  const { isShow, setIsShow } = useContext(ItemContext);

  useEffect(() => {
    const v = values.filter((value) => value.includes(userInput));
    setMatchValues(v);
  }, [userInput, values]);

  return (
    <div
      className={
        isShow ? styles.container : `${styles.container} ${styles.unshow}`
      }
      ref={divRef}
      onMouseEnter={() => setIsShow(true)}
    >
      {userInput && matchValues.length === 0 ? (
        <p>검색 결과가 존재하지 않습니다</p>
      ) : (
        matchValues.map((value) => {
          return (
            <ListItem key={Math.random()} index={value}>
              {value}
            </ListItem>
          );
        })
      )}
    </div>
  );
};

export default SearchList;
