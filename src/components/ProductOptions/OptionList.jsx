import React from "react";
import OptionItem from "components/ProductOptions/OptionItem";

const OptionList = ({ onDelete, optionList, id }) => {
  const optionListId = id;
  console.log("i am opli:", optionList);

  return (
    <div>
      {optionList.map((option, idx) => (
        <OptionItem
          key={option.id}
          {...option}
          optionListId={optionListId}
          onDelete={onDelete}
          id={option.id}
        />
      ))}
    </div>
  );
};
export default OptionList;
