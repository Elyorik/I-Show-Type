import React, { useState, useEffect, createContext, useContext } from "react";
import getRandomText from "./Texts";
import { useKeyPressTwo } from "./useKeyPressTwo";

const allowedKeys = [
  "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g",
  "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n",
  "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u",
  "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", " ", ".", ","
];

export let sharedNewValue = 0; // Shared variable

function Checker() {
  const [randomText, setRandomText] = useState(getRandomText());
  const [numberOfCharacter, setNumberOfCharacter] = useState(0);
  const [characterStatuses, setCharacterStatuses] = useState([]);
  const [keyLog, setKeyLog] = useState([]);
  const [NumberIsMatch, setNumberIsMatch] = useState(0);

  const handleKeyPress = (event) => {
    const key = event.key;
    if (!allowedKeys.includes(key)) return;

    setKeyLog((prev) => [...prev, key]);

    if (numberOfCharacter < randomText.length) {
      const isMatch = randomText[numberOfCharacter] === key;
      setCharacterStatuses((prev) => [
        ...prev,
        {
          char: randomText[numberOfCharacter],
          status: isMatch ? "correct" : "incorrect",
        },
      ]);

      setNumberOfCharacter((prev) => prev + 1);

      if (isMatch) {
        setNumberIsMatch((prevValue) => {
          const newValue = prevValue + 1;
          sharedNewValue = newValue; // Update the shared variable
          console.log("newValue", newValue);
          return newValue;
        });
      }
    } else {
      const newText = getRandomText();
      setRandomText(newText);
      setNumberOfCharacter(0);
      setCharacterStatuses([]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [numberOfCharacter, randomText]);

  return (
    <div>
      <h1>Type the text below:</h1>
      <div className="TextField">
        <h1>
          {randomText.split("").map((char, index) => (
            <span
              key={index}
              style={{
                color:
                  characterStatuses[index]?.status === "correct"
                    ? "green"
                    : characterStatuses[index]?.status === "incorrect"
                    ? "red"
                    : "black",
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Checker;