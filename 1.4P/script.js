function changeText() {
    document.getElementById("heading").innerText = "Welcome to SIT 725!";
}

function showMessage(color) {
    const messageArea = document.getElementById("messageArea");

    switch (color) {
        case "orange":
            messageArea.innerText = "You clicked Orange!";
            break;
        case "red":
            messageArea.innerText = "You clicked Red!";
            break;
        case "green":
            messageArea.innerText = "You clicked Green!";
            break;
        default:
            messageArea.innerText = "";
    }
}
