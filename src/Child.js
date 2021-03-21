import React, {useState} from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({color, childColor, changeColor}) {
  
  return <div onClick={changeColor} className="child" style={{ backgroundColor: childColor }} />;
}

export default Child;
