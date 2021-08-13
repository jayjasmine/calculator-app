// get HTML elements //

// Display
const numberDisplay = document.getElementById("display-text");

// Function Buttons
const acKey = document.getElementById("ac-btn");
const plusminusKey = document.getElementById("plus-minus-btn");
const percentageKey = document.getElementById("percentage-btn");

// Operation Buttons
const divideKey = document.getElementById("divide-btn");
const multiplyKey = document.getElementById("divide-btn");
const subtractKey = document.getElementById("subtract-btn");
const additionKey = document.getElementById("addition-btn");
const equalsKey = document.getElementById("equals-btn");
// Number Buttons
const numberKeyElements = document.getElementsByClassName("number-btn");
const oneKey = document.getElementById("one-btn");
const twoKey = document.getElementById("two-btn");
const threeKey = document.getElementById("three-btn");
const fourKey = document.getElementById("four-btn");
const fiveKey = document.getElementById("five-btn");
const sixKey = document.getElementById("six-btn");
const sevenKey = document.getElementById("seven-btn");
const eightKey = document.getElementById("eight-btn");
const nineKey = document.getElementById("nine-btn");
const zeroKey = document.getElementById("zero-btn");
const decimalKey = document.getElementById("decimal-btn");

/////Calculator variables

//Store input and equation string
let valueInput = '';
let equation = '';

//Operation state booleans
let isOperating = false;

function acKeyPress(){
    value1 = '';
    value2 = '';
    numberDisplay.innerHTML = 0;
}

function oneKeyPress(){
    if (!isOperating){
        //Update value1
        value1 = value1 + 1;
        console.log(value1);
        //Update display
        numberDisplay.innerHTML = value1;
    }else {
        //Update value2
        value2 = value2 + 1;
        //Update display
        numberDisplay.innerHTML = value2;
    }
    
    //Check which operator is active
    if (isAdding){
}

function additionKeyPress(){
    isOperating = true;

    // solution = parseInt(value1) + parseInt(value2);
    // numberDisplay.innerHTML = solution;
}

function equalsKeyPress(){

}