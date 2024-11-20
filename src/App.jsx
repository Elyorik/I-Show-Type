import React, { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu"; // Import MainMenu component
import { useKeyPress } from "./Components/useKeyPress";
import TypeWindow from "./Components/TypeWindow";

function App() {
  const pressedKey = useKeyPress(); // Use the hook
  const [buttonCodeActivated, setButtonCodeActivated] = useState(false); // State for button activation

  return (
    <>
      {pressedKey === " " ? (
        buttonCodeActivated ? (
          <>
            {console.log("Script Text")} 
            {pressedKey === "Enter" ? (
              <>
                {console.log("Window of Result")}
                <MainMenu
                  buttonCodeActivated={buttonCodeActivated}
                  setButtonCodeActivated={setButtonCodeActivated}
                />
              </>
            ) : null}
          </>
        ) : (
          <>
            <TypeWindow />
            {pressedKey === "Enter" ? (
              <>
                {console.log("Window of Result")}
                <MainMenu
                  buttonCodeActivated={buttonCodeActivated}
                  setButtonCodeActivated={setButtonCodeActivated}
                />
              </>
            ) : null}
          </>
        )
      ) : (
        <MainMenu
          buttonCodeActivated={buttonCodeActivated}
          setButtonCodeActivated={setButtonCodeActivated}
        />
      )}
    </>
  );
}

export default App;
