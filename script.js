const dispaly = document.getElementById('display');

const allBtns = document.getElementById('buttons');

function calculate(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    if (operator == '-') {
        return num1 - num2;
    }
    if (operator == '*') {
        return num1 * num2;
    }
    if (operator == '/') {
        return num1 / num2;
    }
}

let firstNumber, secondNumber, operator, previousPress;

allBtns.addEventListener('click', function(event){

    let press = event.target.innerText;
    if((press >= '0' && press <= '9') && ((previousPress == '+' || previousPress == '-' || previousPress == '*' || previousPress == '/' || previousPress == '='))){
        dispaly.value = '';
    }
    if (press == 'C') {
        dispaly.value = '';
        firstNumber = secondNumber = operator = previousPress = '';
    }
    else if (press == '+' || press == '-' || press == '*' || press == '/') {
        firstNumber = parseInt(dispaly.value);
        operator = press;
        previousPress = press;
    }
    else if (press == '='){
        secondNumber = parseInt(dispaly.value);
        let answer = calculate(firstNumber, secondNumber, operator);
        dispaly.value = answer;
        previousPress = press;
    }
    else{
        dispaly.value = dispaly.value + press;
        previousPress = press;
    }
});