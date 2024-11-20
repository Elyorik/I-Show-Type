import React, { useState } from "react";
import { useKeyPress } from "./useKeyPress";
import getRandomText from "./Texts";

const TypeWindow = () => {
  const pressedKey = useKeyPress(); // Use the hook

  // State to hold the random text
  const [randomText, setRandomText] = useState(getRandomText());

  return (
    <div>
      <div className="GifCard"></div>
      <div className="TextField">
        <h1>{randomText}</h1> {/* Display the random text */}
      </div>
    </div>
  );
};

export default TypeWindow;
