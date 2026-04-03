const chatContainer = document.querySelector('.chat-container');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text !== "") {
        displayUserMessage(text);
        userInput.value = "";
        displayBotMessage("This is a bot response to: " + text);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") sendBtn.click();
});

function displayUserMessage(text) {
    const msg = document.createElement('div');
    msg.classList.add('message', 'user');
    msg.textContent = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function displayBotMessage(text) {
    const msg = document.createElement('div');
    msg.classList.add('message', 'bot');

    // Typing dots
    const typing = document.createElement('div');
    typing.classList.add('typing');
    typing.innerHTML = `<span></span><span></span><span></span>`;
    msg.appendChild(typing);
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulate typing
    setTimeout(() => {
        msg.removeChild(typing);
        msg.textContent = text;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 800 + text.length * 30); // speed depends on message length
}
