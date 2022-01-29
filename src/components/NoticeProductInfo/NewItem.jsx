import AddButton from "layout/Button";
import React from "react";

import Input from "layout/Input";
function NewItem({
  setNewItemTitle,
  setNewItemContent,
  newItemTitle,
  newItemContent,
  order,
  handleDelete,
}) {
  const handleChange = (e) => {
    setNewItemTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setNewItemContent(e.target.value);
  };

  return (
    <div>
      <form id={`form-${order}`}>
        <Input
          type="text"
          placeholder="항목 제목 자유 입력"
          onChange={handleChange}
          value={newItemTitle}
          required
        />
        <Input
          type="text"
          placeholder="내용을 입력해주세요."
          onChange={handleChange2}
          value={newItemContent}
          required
        />
        <button onClick={handleDelete}>삭제</button>
      </form>
    </div>
  );
}

export default NewItem;
