import { useState, useEffect } from "react";

export const allowedKeys = [
  "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g",
  "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n",
  "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u",
  "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "Enter", " ", ".", ","
];

export function useKeyPress() {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (allowedKeys.includes(event.key)) {
        setPressedKey(event.key);

        // Log the key behavior here
        if (event.key === " ") {
          console.log("Good", event.key);
        } else {
          console.log("bruh", event.key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return pressedKey; // Return the last pressed key
}
