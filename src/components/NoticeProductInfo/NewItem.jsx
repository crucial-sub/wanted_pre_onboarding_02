import AddButton from "layout/Button";
import React from "react";

function NewItem({
  setNewItemTitle,
  setNewItemContent,
  newItemTitle,
  newItemContent,
  order,
  handleDelete,
}) {
  const handleChangeTitle = (e) => {
    setNewItemTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setNewItemContent(e.target.value);
  };

  return (
    <div>
      <form id={`form-${order}`}>
        <input
          type="text"
          placeholder="항목 제목 자유 입력"
          onChange={handleChangeTitle}
          value={newItemTitle}
          required
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          onChange={handleChangeContent}
          value={newItemContent}
          required
        />
        <button onClick={handleDelete}>삭제</button>
      </form>
    </div>
  );
}

export default NewItem;
