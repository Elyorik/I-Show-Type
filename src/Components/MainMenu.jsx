import React, { useState } from "react";
import iconKeyboard from "../assets/icon.png"; // Adjust path based on file structure
import { toggleButton } from "./Confetti"; // Import the toggleButton function

const MainMenu = () => {
  const [isGreen, setIsGreen] = useState(false);
  let buttonCodeActivated = false;

  const handleButtonClick = () => {
    toggleButton(isGreen, setIsGreen); // Toggle the green state
    buttonCodeActivated = !isGreen; // Update button activation logic
    console.log("Button Activated:", buttonCodeActivated); // Debugging
  };

  return (
    <>
      <div className="card">
        <img src={iconKeyboard} alt="Keyboard Icon" id="icon" />
        <h1 id="MainName">I Show Type</h1>
        <h1 className="blink-text">Press SPACE to continue</h1>
        <button
          id="buttonCodeMode"
          onClick={handleButtonClick}
          className={isGreen ? "green-text" : ""} // Apply the green-text class if the button is green
        >
          &lt;/&gt;
        </button>
      </div>
      <div id="confetti-container"></div>
    </>
  );
};

export default MainMenu;
