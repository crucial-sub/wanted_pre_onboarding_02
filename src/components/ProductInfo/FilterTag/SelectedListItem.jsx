import { useContext } from "react";
import { ItemContext } from "store/Contexts/FilterTag";
import styles from "./SelectedListItem.module.css";
const SelectedListItem = ({ children }) => {
  const { items, setItems } = useContext(ItemContext);
  const onRemove = (e) => {
    setItems(
      items.filter(
        (item) => item !== e.target.parentNode.innerText.slice(0, -1)
      )
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {children}
        <button className={styles.button} onClick={onRemove}>
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedListItem;
