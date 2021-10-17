//Variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestions = 0;

//questions
import questions from "./questions.js";

// substituição do quizz para perguntas
function init() {
    createQuestion(0);
}

// criar uma pergunta (limpar questão anterior e alterar texto pergunta)
function createQuestion(i) {
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function (btn) {
        btn.remove();
    });

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionNumber.textContent = i + 1;
    questionText.textContent = questions[0].question;
}

init();
