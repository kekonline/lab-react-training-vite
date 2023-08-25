import SingleColorPicker from "./SingleColorPicker";

import { useState } from "react";

//creo que no lo he hecho como querian pero la verdad es que las instrucciones eran un poco raras

function RGBColorPicker() {
  const [rValue, setRValue] = useState(150);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(150);
  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        setValue={setRValue}
        onChange={() => {
          console.log("part");
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        setValue={setGValue}
        onChange={() => {
          /* ... */
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        setValue={setBValue}
        onChange={() => {
          /* ... */
        }}
      />

      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
      <label htmlFor="color">
        RGB({rValue}, {gValue}, {bValue})
      </label>
    </div>
  );
}

export default RGBColorPicker;
