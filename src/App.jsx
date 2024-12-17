import React, { useState, useEffect } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import { useKeyPressTwo } from "./Components/useKeyPressTwo";
import TypeWindow from "./Components/TypeWindow";
import ResultWindow from "./Components/ResultWindow";
import ScriptWindow from "./Components/ScriptWindow";

function App() {
  const { pressedKey, resetKey } = useKeyPressTwo(); // Destructure resetKey
  const [buttonCodeActivated, setButtonCodeActivated] = useState(false);
  const [currentView, setCurrentView] = useState("mainMenu");

  useEffect(() => {
    if (pressedKey === " ") {
      if (currentView === "mainMenu") {
        setCurrentView(buttonCodeActivated ? "scriptText" : "typeWindow");
      } else if (currentView === "ResultWindow") {
        setCurrentView("mainMenu");
      }
      resetKey(); // Clear the key press after handling
    } else if (pressedKey === "Enter") {
      if (currentView === "typeWindow" || currentView === "scriptText") {
        setCurrentView("ResultWindow");
      }
      resetKey(); // Clear the key press after handling
    }
  }, [pressedKey, buttonCodeActivated, currentView, resetKey]);

  return (
    <>
      {currentView === "typeWindow" && <TypeWindow />}
      {currentView === "scriptText" && <ScriptWindow />}
      {currentView === "mainMenu" && (
        <MainMenu
          buttonCodeActivated={buttonCodeActivated}
          setButtonCodeActivated={setButtonCodeActivated}
        />
      )}
      {currentView === "ResultWindow" && <ResultWindow />}
    </>
  );
}

export default App;
