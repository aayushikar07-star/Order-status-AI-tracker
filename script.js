const orders = {
    "101": {status: "Shipped", location: "Bangalore", eta: "2 days"},
    "102": {status: "Out for delivery", location: "Hyderabad", eta: "Today"},
    "103": {status: "Processing", location: "Warehouse", eta: "3 days"}
};

function trackOrder() {
    let input = document.getElementById("userInput").value;
    let result = document.getElementById("result");

    let found = false;

    for (let id in orders) {
        if (input.includes(id)) {
            let order = orders[id];
            result.innerText = `Your order is ${order.status} in ${order.location}. It will arrive in ${order.eta}.`;
            found = true;
            break;
        }
    }

    if (!found) {
        result.innerText = "Sorry, I couldn't find your order 😢";
    }
}
