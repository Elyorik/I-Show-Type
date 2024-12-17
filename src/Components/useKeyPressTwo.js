import { useState, useEffect, useCallback } from "react";

export const allowedKeys = ["Enter", " "];

export function useKeyPressTwo() {
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

  // Function to reset the pressed key manually
  const resetKey = useCallback(() => {
    setPressedKey(null);
  }, []);

  return { pressedKey, resetKey };
}
