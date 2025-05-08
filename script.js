function clearScreen() {
    document.getElementById("result").value = "";
}

function setscreenvalue(value) {
    document.getElementById("result").value += value;
}

function calculateRusult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

    if (expression === "") {
        resultElement.value = "Error: Empty expression";
        return;
    }

    try {
        resultElement.value = eval(expression);
    } catch (error) {
        resultElement.value = "Error: Invalid expression";
    }
}