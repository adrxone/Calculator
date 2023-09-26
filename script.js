const display = document.querySelector('[data-display]')
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const clear = document.querySelector('[data-clear]')
const equal = document.querySelector('[data-equal]')

let currentResult = []
let finalResult
let operationCounter = 0;

function joinNumbers(button) {
    const receivedInput = button.textContent
    operationCounter = 0;
    currentResult.push(receivedInput)
    finalResult = currentResult.join('')
    display.textContent = finalResult
    
}

function joinOperation(operation) {
    const receivedInput = operation.textContent
    
    operationCounter += 1;
    console.log(operationCounter)
    if (operationCounter == 2) {
        display.textContent = "ERROR"
        setTimeout(function() {
            currentResult = []
            display.textContent = ''
        }, 2000);
    }
    else {
        currentResult.push(receivedInput)
        if(currentResult == '*' || currentResult == '/') {
            display.textContent = "ERROR"
            setTimeout(function() {
                currentResult = []
                display.textContent = ''
            }, 2000);
        }
        else {
            finalResult = currentResult.join('')
            display.textContent = finalResult
        }
        
    }
}

function clearDisplay() {
    currentResult = []
    display.textContent = ''
}

function calculate() {
    display.textContent = eval(finalResult)
    currentResult = []
    currentResult = [eval(finalResult)]
}

numbers.forEach(number => number.addEventListener('click', () => joinNumbers(number)))
operations.forEach(operation => operation.addEventListener('click', () => joinOperation(operation)))
clear.addEventListener('click', () => clearDisplay(clear))
equal.addEventListener('click', () => calculate(equal))