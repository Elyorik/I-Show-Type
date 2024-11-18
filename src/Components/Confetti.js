// Confetti.js
export const triggerConfetti = () => {
    const confettiContainer = document.getElementById('confetti-container');
  
    // Create confetti elements
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
  
      // Random starting position for confetti
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      confetti.style.left = `${startX}px`;
      confetti.style.top = `${startY}px`;
  
      confettiContainer.appendChild(confetti);
  
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 1000);
    }
  };
  
  export const toggleButton = (isGreen, setIsGreen) => {
    // Toggle the button's green color
    setIsGreen(!isGreen);

    // Trigger confetti if the button is not green
    if (!isGreen) {
        triggerConfetti();
    }
  };
  