import React from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu"; // Import MainMenu component
import { useKeyPress } from "./Components/useKeyPress";
import TypeWindow from "./Components/TypeWindow";
function App() {
  const pressedKey = useKeyPress(); // Use the hook

  return <>{pressedKey === " " ? <TypeWindow />: <MainMenu />}</>;
}

export default App;
