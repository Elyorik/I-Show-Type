import React, { useRef } from "react";
import iconKeyboard from "../assets/icon.png"; // Adjust path based on file structure
import { toggleButton } from "./Confetti"; // Import the toggleButton function

const MainMenu = ({ buttonCodeActivated, setButtonCodeActivated }) => {
  const confettiRef = useRef(null); // Ref for the confetti container

  const handleButtonClick = () => {
    toggleButton(buttonCodeActivated, setButtonCodeActivated, confettiRef); // Pass ref to toggleButton
    console.log("Button Activated:", !buttonCodeActivated); // Debugging
  };

  return (
    <>
      <div className="card">
        <img src={iconKeyboard} alt="Keyboard Icon" id="icon" />
        <h1 className="MainName">I Show Type</h1>
        <h1 className="blink-text">Press SPACE to continue</h1>
        <button
          id="buttonCodeMode"
          onClick={handleButtonClick}
          className={buttonCodeActivated ? "green-text" : ""} // Apply the green-text class if activated
        >
          &lt;/&gt;
        </button>
      </div>
      <div id="confetti-container" ref={confettiRef}></div>
    </>
  );
};

export default MainMenu;
