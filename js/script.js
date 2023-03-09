const outputTextArea = document.getElementById("calc-result")

const isOperator = (char) => {
    const operators = ["*", "+", "-", "%", "/"]
    return operators.includes(char)
}

const buttonClicked = (text) => {
    const outputTextArea = document.getElementById("calc-result")
    const textContent = outputTextArea.textContent
    const lastChar = textContent.charAt(textContent.length - 1)
    if (isOperator(text) && isOperator(lastChar)) {
        return
    }
    outputTextArea.textContent += text
}