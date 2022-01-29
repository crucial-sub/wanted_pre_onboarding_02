import UploadImages from "components/UploadImages";
import { ImageProvider } from "components/ProductInfo/UploadImage/Contexts";

const UploadImage = ({ multiple }) => {
  return (
    <ImageProvider>
      <UploadImages multiple={multiple} />
    </ImageProvider>
  );
};

export default UploadImage;
