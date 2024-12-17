import React, { useState } from "react";
import { useKeyPress } from "./useKeyPress";
import Checker from "./Checker";
import GifCard from "./GifCard.jsx"; // Import the GifCard component

let randomTextValue = null;

const TypeWindow = () => {
  const pressedKey = useKeyPress(); // Use the hook

  return (
    <div className="card">
      <div className="GifCard"> <GifCard /></div>
      <Checker/>
    </div>
  );
};


export default TypeWindow;
