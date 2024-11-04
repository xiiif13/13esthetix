const welcomeMessage = document.getElementById("welcomeMessage");
const thanksMessage = document.getElementById("thanksMessage");
const coolMessage = document.getElementById("coolMessage");

function showMessageWithFade(message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      message.style.display = 'block'; // Show the message
      setTimeout(() => {
        message.style.opacity = 1; // Fade in
        message.style.transform = "translateY(0)"; // Slide to original position
      }, 10); // Short delay to allow the display change to take effect
    }, delay);

    // Wait before resolving
    setTimeout(() => {
      resolve(); // Resolve the promise after the message is fully visible
    }, 500 + delay); // Wait for 0.5 seconds after displaying the message
  });
}

function fadeOutMessages() {
  const allMessages = document.querySelectorAll('.message');
  allMessages.forEach(message => {
    message.style.opacity = 0; // Fade out
    message.style.transform = "translateY(-20px)"; // Move up slightly
  });
}

// Show the messages and then redirect
async function displayMessages() {
  await showMessageWithFade(welcomeMessage, 0); // Show welcome message immediately
  await showMessageWithFade(thanksMessage, 500); // Show thanks message after 0.5 seconds
  await showMessageWithFade(coolMessage, 500); // Show cool message after 0.5 seconds

  // Wait 1.5 seconds after the last message appears, then fade out
  setTimeout(() => {
    fadeOutMessages();

    // Redirect to the new page after fade-out is complete
    setTimeout(() => {
      window.location.href = "https://www.instagram.com/13esthetix?igsh=enFubGY2eWV5NDds";
    }, 1500); // Wait 1.5 seconds for fade-out effect to complete
  }, 1500);
}

// Start the process of showing messages
displayMessages();
