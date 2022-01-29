import React from "react";
import OptionItem from "components/ProductOptions/OptionItem";

const OptionList = ({ onDelete, optionList, id }) => {
  const optionListId = id;

  return (
    <div>
      {optionList.map((option, idx) => (
        <OptionItem
          key={option.id}
          {...option}
          optionListId={optionListId}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

OptionList.defaultProps = {
  optionList: [],
};

export default OptionList;
