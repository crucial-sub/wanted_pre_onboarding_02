import React, { useState } from "react";
import style from "components/ProductOptions/ProductOptions.module.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지 첨부");
  const [imgSrc, setImgSrc] = useState(null);

  const imageSelecthandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => setImgSrc(e.target.result);
  };

  return (
    <form>
      <div className={style.fileDropper}>
        {imgSrc && (
          <img src={imgSrc} className={style.imgPreview} alt="첨부 사진" />
        )}

        <label htmlFor="image">{fileName}</label>
        <input id="image" type="file" onChange={imageSelecthandler} />
      </div>
    </form>
  );
};

export default UploadForm;
