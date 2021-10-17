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

// criar uma pergunta
function createQuestion(i) {
    //limpar questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function (btn) {
        btn.remove();
    });

    //alterar texto pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionNumber.textContent = i + 1;
    questionText.textContent = questions[i].question;

    //criação de cada alternativa
    questions[i].answers.forEach((answer, index) => {
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[index];
        answerText.textContent = answer["answer"];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        answersBox.appendChild(answerTemplate);

        answerTemplate.addEventListener("click", () => {
            checkAnswer(answerTemplate);
        });
    });

    actualQuestions++;
}

function checkAnswer(btn) {
    const buttons = answersBox.querySelectorAll("button");

    buttons.forEach((button) => {
        let isTrue = button.getAttribute("correct-answer");
        if (isTrue == "true") {
            button.classList.add("correct-answer");
            if (btn == button) points++;
        } else {
            button.classList.add("wrong-answer");
        }
    });

    nextQuestion();
}

function nextQuestion() {
    setTimeout(() => {
        if (actualQuestions >= questions.length) {
            showSuccessMessage();
            return;
        }

        createQuestion(actualQuestions);
    }, 1000);
}

function showSuccessMessage() {
    hideOrShowQuizzScore();

    const score = ((points / questions.length) * 100).toFixed(2);
    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();

    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points.toString();

    const questionQty = document.querySelector("#questions-qty");
    questionQty.textContent = questions.length.toString();

    restartGame();
}

function hideOrShowQuizzScore() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

function restartGame() {
    //zerar variaveis
}

init();
