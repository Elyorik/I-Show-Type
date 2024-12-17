import React, { useEffect, useState } from "react";
import { sharedNewValue } from "./Checker";

function ResultWindow() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const targetNumber = sharedNewValue; // Use sharedNewValue as the target
    const duration = 2000; // Total animation duration in milliseconds
    const interval = 50; // Update interval
    const steps = Math.ceil(duration / interval); // Total steps needed
    const increment = targetNumber / steps; // Increment per step

    let currentNumber = 0;
    const intervalId = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber; // Ensure it ends at the target
        clearInterval(intervalId);
      }
      setNumber(Math.floor(currentNumber));
    }, interval);

    return () => clearInterval(intervalId);
  }, []); // Runs only on mount

  return (
    <div className="card">
      <h1 className="MainName">Your Result</h1>
      <h1 className="CorrectLettersText">Correct letters:</h1>
      <div className="number-container">
        {number
          .toString()
          .split("")
          .map((digit, index) => (
            <div key={index} className="digit">
              <span>{digit}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ResultWindow;
