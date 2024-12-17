// components/GifCard.js
import React, { useState, useEffect } from "react";

// Function to get a random GIF
const getRandomGif = () => {
  const gifs = [
    "/gifs/gif1.gif",
    "/gifs/gif2.gif",
    "/gifs/gif3.gif",
    "/gifs/gif4.gif"
  ];

  const randomIndex = Math.floor(Math.random() * gifs.length);
  return gifs[randomIndex];
};

// Component to display a random GIF
const GifCard = () => {
  const [gifSrc, setGifSrc] = useState("");

  useEffect(() => {
    setGifSrc(getRandomGif()); // Set a random GIF when the component mounts
  }, []);

  return (
    <div className="GifCard">
      {/* Render the random GIF with className "GifImg" */}
      {gifSrc && <img className="GifImg" src={gifSrc} alt="Random GIF" />}
    </div>
  );
};

export default GifCard;
