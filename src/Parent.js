import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState(getRandomColor())

  const changeColor = () => {
    setColor(getRandomColor())
    setChildColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={color} childColor={childColor} changeColor = {changeColor} />
      <Child color={color} childColor={childColor} changeColor = {changeColor} />
    </div>
  );
}

export default Parent;
