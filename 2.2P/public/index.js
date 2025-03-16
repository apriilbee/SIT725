async function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    try {
        const response = await fetch(`/add?num1=${num1}&num2=${num2}`);
        const data = await response.json();
        document.getElementById("result").textContent = data.result;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    try {
        const response = await fetch("/subtract", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ x: parseFloat(num1), y: parseFloat(num2) }),
        });

        const data = await response.json();
        document.getElementById("result").textContent = data.result;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    try {
        const response = await fetch(`/multiply?num1=${num1}&num2=${num2}`);
        const data = await response.json();
        document.getElementById("result").textContent = data.result;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    try {
        const response = await fetch("/subtract", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ x: parseFloat(num1), y: parseFloat(num2) }),
        });

        const data = await response.json();
        document.getElementById("result").textContent = data.result;
    } catch (error) {
        console.error("Error:", error);
    }
}
