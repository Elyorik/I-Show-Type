// Import or load the JSON file
const texts = [
    {
      "id": 1,
      "content": "Something dwadwadawdwadawd\nwdawdawdawdawdawdawdwdaw\ndawdawdawdawdwadawdwadaw\ndawdawdwadawdawddwadwadw"
    },
    {
      "id": 2,
      "content": "And now second text dwawdwdd\nwdawdawdawdawdawdawdwdaw\nwdawdawdwadawdawddwadwad\nawdwadawdawdawdawdwadawd"
    },
    {
      "id": 3,
      "content": "Here comes the third text yay\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\ndawdawdawdawdawdwadawdaw"
    },
    {
      "id": 4,
      "content": "Fourth random text to check\nawdawdwadawdawddwadwadaw\ndawdawdawdawdawdwadawdaw\nwdawdawdawdawdawdawdwdaw"
    },
    {
      "id": 5,
      "content": "Fifth text with some letters\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\nawdawdwadawdawddwadwadaw"
    },
    {
      "id": 6,
      "content": "Sixth text is getting fun\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\ndawdawdawdawdawdwadawdaw"
    },
    {
      "id": 7,
      "content": "Lucky number seven text\nwdawdawdawdawdawdawdwdaw\ndawdawdawdawdwadawdwadaw\ndawdawdwadawdawddwadwadw"
    },
    {
      "id": 8,
      "content": "Eighth text, keep practicing\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\ndawdawdawdawdawdwadawdaw"
    },
    {
      "id": 9,
      "content": "Ninth text is nearly there\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\nawdawdwadawdawddwadwadaw"
    },
    {
      "id": 10,
      "content": "Final text for this sample\nawdawdawdawdawdawdawdawd\ndawdawdawdawdawdawdwadaw\nawdawdwadawdawddwadwadaw"
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