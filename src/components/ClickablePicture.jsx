import { useState } from "react";

function ClickablePicture(props) {
  const { img, imgClicked } = props;

  const [picToDisplay, setpicToDisplay] = useState(img);

  const handleButtonClick = () => {
    if (picToDisplay === img) {
      setpicToDisplay(imgClicked);
    } else {
      setpicToDisplay(img);
    }
  };

  return <img onClick={handleButtonClick} src={picToDisplay} alt="" />;
}

export default ClickablePicture;
