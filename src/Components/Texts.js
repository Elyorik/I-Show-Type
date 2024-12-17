// Import or load the JSON file
const texts = [
    {
      "id": 1,
      "content": "Nature whispers softly, calm and free.\nBeneath the trees, shadows softly fall.\nMorning's light brings a golden embrace.\nDreams linger near the forest’s stillness."
    },
    {
      "id": 2,
      "content": "Ocean waves crash gently on the shore.\nThe salty breeze whispers to the soul.\nEndless tides flow with the moon's command.\nSeagulls cry high above the blue waters."
    },
    {
      "id": 3,
      "content": "In the valley streams sing as they flow.\nFlocks of birds weave songs through the skies.\nRolling hills glow beneath the bright sunlight.\nTime stands still in the quiet green valley."
    },
    {
      "id": 4,
      "content": "Stars align in the stillness of the night.\nPlanets drift in a timeless cosmic dance.\nThe dark sky glows with a million small lights.\nEternity whispers in the silent void."
    },
    {
      "id": 5,
      "content": "Mountains stand tall, guardians of the land.\nWinds howl and echo through their rocky paths.\nSnow-capped peaks glimmer beneath the cold sky.\nThey hold the stories of an ancient world."
    },
    {
      "id": 6,
      "content": "The city never sleeps, its heart beats loud.\nLights sparkle like stars in the urban haze.\nPeople move swiftly, lost in their own dreams.\nThe hum of progress echoes through the streets."
    },
    {
      "id": 7,
      "content": "Winter cloaks the earth in a frosty shroud.\nSnowflakes fall, dancing in the icy breeze.\nThe silence of frost grips the empty streets.\nAll waits for spring's warm and gentle embrace."
    },
    {
      "id": 8,
      "content": "Leaves fall gently, painted in red and gold.\nAutumn winds carry the scent of the earth.\nThe trees stand bare, waiting for winter's breath.\nA season ends, leaving memories behind."
    },
    {
      "id": 9,
      "content": "Rain falls steadily on a lonely window.\nEach drop plays a note in the symphony.\nClouds blanket the sky, hiding the sunlight.\nThe air smells fresh with the promise of calm."
    },
    {
      "id": 10,
      "content": "Spring awakens with blooms and lively colors.\nBirds sing sweetly as daylight gently rises.\nThe world is reborn with a vibrant spirit.\nHope stirs softly in every breath of air."
    }
  ];
  
  // Function to get a random text
  function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length); // Generate a random index
    const selectedText = texts[randomIndex].content; // Select the random text
    return selectedText; // Return the selected text
  }
  
  // Example usage
  const randomText = getRandomText();
  console.log(randomText);
export default getRandomText