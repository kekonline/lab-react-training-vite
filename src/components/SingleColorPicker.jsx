import { useEffect, useState } from "react";

function SingleColorPicker(props) {
  const { color, value, setValue } = props;
  const [getColor, setGetColor] = useState("rgb(0,0,0)");

  useEffect(() => {
    if (color === "r") {
      setGetColor(`rgb(${value}, 0, 0)`);
    } else if (color === "g") {
      setGetColor(`rgb( 0,${value}, 0)`);
    } else if (color === "b") {
      setGetColor(`rgb( 0,0,${value})`);
    }

    // console.log(getColor);
  }, [value]);

  const colorHandler = (event) => {
    setValue(event.target.value);
    if (event.target.value > 255) {
      setValue(255);
    } else if (event.target.value < 0) {
      setValue(0);
    }
  };

  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: getColor }}
      ></div>
      <label htmlFor="color">{color.toUpperCase()}: </label>
      <input type="number" name="color" value={value} onChange={colorHandler} />
    </div>
  );
}

export default SingleColorPicker;
