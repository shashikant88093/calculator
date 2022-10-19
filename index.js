// calculator input
const input = document.getElementById('input');
// calculator output
const output = document.getElementById('output');
// calculator button by id
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const subtract = document.getElementById('subtract');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const add = document.getElementById('add');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const percent = document.getElementById('percent');
//onclick event for calculator buttons
clear.onclick = function() {
    console.log('clear');
    input.value = '';
    output.value = '';
}
backspace.onclick = function() {
    input.value = input.value.slice(0, -1);
}
divide.onclick = function() {
    input.value += '/';
}
multiply.onclick = function() {
    input.value += '*';
}
percent.onclick = function() {
    input.value += '%';
}
seven.onclick = function() {
    input.value += '7';
}
eight.onclick = function() {
    input.value += '8';
}
nine.onclick = function() {
    input.value += '9';
}
subtract.onclick = function() {
    input.value += '-';
}
four.onclick = function() {
    input.value += '4';
}
five.onclick = function() {
    input.value += '5';
}
six.onclick = function() {
    input.value += '6';
}
add.onclick = function() {
    input.value += '+';
}
one.onclick = function() {
    input.value += '1';
}
two.onclick = function() {
    input.value += '2';
}
three.onclick = function() {
    input.value += '3';
}
equals.onclick = function() {
    console.log('equals', input.value);
    output.value = eval(input.value);
}
zero.onclick = function() {
    input.value += '0';
}
decimal.onclick = function() {
    input.value += '.';
}

// % 

