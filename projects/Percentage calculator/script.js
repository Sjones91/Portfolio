//stores the target elements in variables
var percent25= document.getElementById("25percent");
var percent50 = document.getElementById("50percent");
var percent75 = document.getElementById("75percent");
var percent100 = document.getElementById("100percent");

var outputElement = document.getElementById("outputDisplay");
var reset = document.getElementById("resetCalculator");

// get value from text input field
function getInput () {
    var input = document.getElementById("inputValue").value;
    console.log(input);
    return input;
}

//calculates the percentage increase

function quarter () {
   var equals = getInput() * 1.25;
   console.log(equals);
   outputElement.innerHTML = `<p>${equals}</p>`;
   return equals

}
function half () {
    var equals = getInput() * 1.5;
    console.log(equals);
    outputElement.innerHTML = `<p>${equals}</p>`;
    return equals
 }
 function threeQuarter () {
    var equals = getInput() * 1.75;
    console.log(equals);
    outputElement.innerHTML = `<p>${equals}</p>`;
    return equals
 }
 function double () {
    var equals = getInput() * 2;
    console.log(equals);
    outputElement.innerHTML = `<p>${equals}</p>`;
    return equals
 }

// button click events

percent25.addEventListener("click", quarter)
percent50.addEventListener("click", half)
percent75.addEventListener("click", threeQuarter)
percent100.addEventListener("click", double)
reset.addEventListener("click", function (){outputElement.innerHTML = ""})

