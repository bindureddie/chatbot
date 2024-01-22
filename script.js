const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    if (!userMessage) return;

    // Simulate a response from the bot (you'd replace this with your actual bot logic)
    const botResponse = getBotResponse(userMessage);

    // Display user message with associated image
    appendMessage('user', userMessage, '/images/user.jpg');

    // Display bot message
    appendMessage('bot', botResponse.message, '/images/chatbot.jpg');

    // Clear the user input field
    userInput.value = '';
}

function appendMessage(sender, message, image) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    if (image) {
        const imageElement = document.createElement('img');
        imageElement.src = "image";
        messageContainer.appendChild(imageElement);
    }

    const textElement = document.createElement('p');
    textElement.textContent = message;
    messageContainer.appendChild(textElement);

    chatBox.appendChild(messageContainer);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Replace this with your actual bot logic
    // For simplicity, using a hardcoded response
  // For simplicity, using a hardcoded response
  return {
    message: `Bot says: I received your message - "${userMessage}"`,
    image: '/images/chatbot.jpg'
};

}

// Your existing JavaScript code remains unchanged
// ..
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'none' || !chatContainer.style.display) ? 'block' : 'none';
    toggleIntro(); // Add this line to toggle the intro text
}

function toggleIntro() {
    introText.style.display = (introText.style.display === 'none' || !introText.style.display) ? 'block' : 'none';
}