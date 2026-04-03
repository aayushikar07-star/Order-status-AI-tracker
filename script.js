const orders = {
    "101": { status: "Shipped", location: "Bangalore", eta: "2 days" },
    "102": { status: "Out for delivery", location: "Hyderabad", eta: "Today" },
    "103": { status: "Processing", location: "Warehouse", eta: "3 days" }
};

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let userText = inputField.value;
    let chatbox = document.getElementById("chatbox");

    if (userText.trim() === "") return;

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = userText;
    chatbox.appendChild(userMsg);

    inputField.value = "";

    // Typing indicator
    let typing = document.createElement("div");
    typing.className = "bot-message typing";
    typing.innerText = "Typing...";
    chatbox.appendChild(typing);

    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        chatbox.removeChild(typing);

        let botReply = "Sorry, I couldn't find your order 😢";

        for (let id in orders) {
            if (userText.includes(id)) {
                let order = orders[id];
                botReply = `Your order is ${order.status} in ${order.location}. It will arrive in ${order.eta}.`;
                break;
            }
        }

        let botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = botReply;

        chatbox.appendChild(botMsg);
        chatbox.scrollTop = chatbox.scrollHeight;

    }, 1000); // delay for realism
}
