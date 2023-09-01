// Variables, if else statements, algunos metodos, algunos operadores (Y)

const prompt = require("prompt-sync")();

console.log("Welcome to the Argentina Food Quiz!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the most traditional and famous group of food? ");
const correctAnswer1 = "ASADO";

if (answer1.toUpperCase() === correctAnswer1) { 
    console.log("That is correct!");
    correctAnswers++;
} else {
    console.log("That is incorrect :(");
}

const answer2 = prompt("What is the most popular drink at any time? ")
const correctAnswer2 = "MATE";

if (answer2.toUpperCase() === correctAnswer2) {
    console.log("That is correct!");
    correctAnswers++;
} else {
    console.log("That is incorrect :(");
}

const answer3 = prompt("What is the sweet that is eaten the most? ")
const correctAnswer3 = "DULCE DE LECHE";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("That is correct!");
    correctAnswers++;
} else {
    console.log("That is incorrect :(");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers ,"questions correct!");
console.log("You score", percent.toString() + "%");