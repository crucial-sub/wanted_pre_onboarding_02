import { useContext } from "react";
import { CategoryContext } from "store/Contexts/Category";

import Check from "layout/Check";

const Checkbox = ({ value, checked }) => {
  const { cateObject, setCateObject } = useContext(CategoryContext);

  const checkHandler = (e) => {
    let copyObject = { ...cateObject };
    copyObject[value] = !checked;
    setCateObject(copyObject);
  };
  return (
    <div>
      <Check
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(e) => checkHandler(e)}
      />
    </div>
  );
};

export default Checkbox;
