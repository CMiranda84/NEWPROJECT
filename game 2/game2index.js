const questions = {
  geography: [
    {
      question: "Qual é a capital do Brasil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília"],
      answer: "Brasília",
    },
    {
      question: "Qual é o maior país do mundo em área terrestre?",
      options: ["Canadá", "China", "Rússia"],
      answer: "Rússia",
    },
  ],
  generalCulture: [
    {
      question: "Quem escreveu 'Dom Quixote'?",
      options: ["Miguel de Cervantes", "William Shakespeare", "James Joyce"],
      answer: "Miguel de Cervantes",
    },
    {
      question: "Quem pintou a 'Mona Lisa'?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
      answer: "Leonardo da Vinci",
    },
  ],
};

let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let currentQuestionIndex = 0;
let currentCategory = "";

const categoryButtons = document.querySelectorAll(".categories button");
const questionContainer = document.getElementById("questionContainer");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultContainer = document.getElementById("result");
const resultTextElement = document.getElementById("resultText");
const nextButton = document.getElementById("nextBtn");
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.id;
    showNextQuestion();
  });
});

nextButton.addEventListener("click", () => {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  showNextQuestion();
});

function showNextQuestion() {
  questionContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  const categoryQuestions = questions[currentCategory];
  const currentQuestion = categoryQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option, currentQuestion.answer)
    );
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    resultTextElement.textContent = "Resposta correta!";
    if (currentPlayer === 1) {
      player1Score++;
    } else {
      player2Score++;
    }
  } else {
    resultTextElement.textContent = "Resposta incorreta!";
  }
  showResult();
}

function showResult() {
  if (currentPlayer === 1) {
    player1ScoreElement.textContent = `Jogador 1: ${player1Score}`;
  } else {
    player2ScoreElement.textContent = `Jogador 2: ${player2Score}`;
  }
  resultContainer.classList.remove("hidden");
  questionContainer.classList.add("hidden");
}
