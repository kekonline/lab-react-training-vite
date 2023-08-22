import { useState } from "react";

function LikeButton() {
  // let counter = 0

  let colorsList = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [color, setcolor] = useState(
    colorsList[Math.floor(Math.random() * colorsList.length)]
  );
  const [counter, setcounter] = useState(0);

  const backColor = {
    backgroundColor: colorsList[Math.floor(Math.random() * colorsList.length)],
  };

  const handleButtonClick = () => {
    setcolor(colorsList[Math.floor(Math.random() * colorsList.length)]);
    setcounter(counter + 1);
  };

  return (
    <button onClick={handleButtonClick} style={backColor}>
      {counter} Likes
    </button>
  );
}

export default LikeButton;
