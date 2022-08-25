var button = document.getElementsByClassName("btn");
var innerText = "";
var outputText = "";
var opratorsArray = [];
var operantsArray = [];

for (var i =0; <btn.length; i++ ) {
    btn[i].addEventListener("click", click);
}


function click(event) {
   calculate{
     event.target.innerText,
     event.target.classList.contains("action-button")
    };
   display();
    
    }

function calculate(input, isOperator) {
if( input === "=")  return;
if (isOperator) {
    if (isLastOperator) return;
    operatorsArray.push(input);
 } else {
    if (isLastOperator) {
        operantsArray.push(input);
    }
else{
    if(
        input === "." &&
        operantsArray[operantsArray.length - 1].includes(".")
    )
    return;
    operantsArray[operantsArray.length - 1] += input;
}
}
    }
    isLastOperator = isOperator
    console.log(operatorsArray, operantsArray);
    inputText += input;
}
function calculateResult() {
    console.log("calculate");
}


function display() {
    getByClass("question").innerHTML = inputText || 0;
    getByClass("answer").unnerHTML = outputText || 0;

}
function getByClass(className) {
    return document.getElementsByClassName(className)[0];
}

if (outputText) {
    document.getElementsByClassName("answer")
    [0].innerHTML = outputText;
} else{
    document.getElementsByClassName(answer)
    [0].innerHTML = 0;
}
}

