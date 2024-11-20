import React from "react";
import iconKeyboard from "../assets/icon.png"; // Adjust path based on file structure
import { toggleButton } from "./Confetti"; // Import the toggleButton function

const MainMenu = ({ buttonCodeActivated, setButtonCodeActivated }) => {
  const handleButtonClick = () => {
    setButtonCodeActivated((prev) => !prev); // Toggle the buttonCodeActivated state
    console.log("Button Activated:", !buttonCodeActivated); // Debugging
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
          className={buttonCodeActivated ? "green-text" : ""} // Apply the green-text class if activated
        >
          &lt;/&gt;
        </button>
      </div>
      <div id="confetti-container"></div>
    </>
  );
};

export default MainMenu;
