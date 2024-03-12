document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/

  // Quiz view elements
  const passarele = document.getElementById("passarele");
  const firstScreen = document.querySelector("#hello-screen");
  const questionContainer = document.getElementById("questionContainer");
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultTextElement = document.getElementById("resultText");
  const player1ScoreElement = document.getElementById("player1Score");
  const player2ScoreElement = document.getElementById("player2Score");
  // Buttons
  const startButton = document.getElementById("startbtn");
  const nextButton = document.getElementById("nextBtn");
  const categoryButtons = document.querySelectorAll(".categories button");
  const gameContainer = document.querySelector("#game-container");
  const startingDice = document.querySelector(".startingDice");
  // character
  const nameInput = document.getElementById("nameInput");
  const nameInput2 = document.getElementById("nameInput2");
  const createCharacterBtn = document.getElementById("createCharacterBtn");
  const characterDisplay = document.getElementById("characterDisplay");
  const characterNameDisplay = document.getElementById("characterName");
  const characterNameDisplay2 = document.getElementById("characterName2");
  const playBtn = document.getElementById("playBtn");

  // End view elements
  const resultContainer = document.getElementById("result");

  ///////////////// VIEWS ////////////////////

  // Quiz questions
  const questions = [
    new Question(
      "What is the largest planet in the solar system?",
      ["Saturn", "Jupiter", "Earth", "Venus"],
      "Jupiter"
    ),
    new Question(
      "Who wrote the play 'Romeo and Juliet'?",
      [
        "Shake the spear",
        "hamnet shakespeare",
        "Franz Kafka",
        "William Shakespeare",
      ],
      "William Shakespeare"
    ),
    new Question(
      "What is the most abundant chemical element in the universe?",
      ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
      "Hydrogen"
    ),
    new Question(
      "Who painted the Mona Lisa?",
      [
        "Vincenso",
        "Leonardo DiCaprio",
        "Leonardo da Vinci",
        "Vincent van Gogh",
      ],
      "Leonardo da Vinci"
    ),
    new Question(
      "Which country has the largest land area in the world?",
      ["U.S.A.", "Russia", "China", "Canada"],
      "Russia"
    ),
    new Question(
      "Who was the first human being to set foot on the Moon?",
      ["Neil Armstrong", "John Wick", "Peter Miller", "Jermain Defoe"],
      "Neil Armstrong"
    ),
    new Question(
      "What is the capital of Canada?",
      ["Torronto", "Quebec", "Canada", "Ottawa"],
      "Ottawa"
    ),
    ////// Adicionar mais perguntas aqui depois///////////
  ];
  let allPlayers = ["player1", "player2"];
  let currentPlayer = 1;
  let player1Score = 0;
  let player2Score = 0;
  let currentQuestionIndex = 0;
  let currentCategory = "";
  /////////////////////////////////// Buttons/////////////////////////////

  createCharacterBtn.addEventListener("click", () => {
    const characterName = nameInput.value.trim();
    const characterName2 = nameInput2.value.trim();
    if (characterName || characterName2 !== "") {
      characterNameDisplay.textContent = characterName;
      characterNameDisplay2.textContent = characterName2;

      characterDisplay.classList.remove("hidden");
      passarele.classList.remove("hidden");
    } else {
      alert("Please enter a fuc*** name!!!!");
    }
  });
  ////////////////////////////////////////////////
  startButton.addEventListener("click", () => {
    // console.log(firstScreen);
    firstScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");
  });
  ///////////////////////////////////////////
  const starter = document.getElementById("starter");
  startingDice.addEventListener("click", () => {
    // showShuffledPlayer();
    // showPlayerPosition();
    const newText = document.createElement("div");
    newText.innerHTML = 
      `<div>
        <p id="first" class="hidden">
          Player 1 starts
        </p>
        <p id="second" class="hidden">
          Player 2 starts
        </p>
        <button id="playBtn">play</button>
      </div>
    `;
    starter.appendChild(newText);

    const firstPlayer = document.getElementById("first")
    const secondPlayer = document.getElementById("second")
    function showShuffledPlayer(allPlayers){
    // for (let i=0; i<allPlayers.length; i++){
       
       let playerchosen = Math.floor(Math.random() * allPlayers.length);

       
      if (playerchosen===){
        return secondPlayer.classList.remove("hidden");
      }else {
        return firstPlayer.classList.remove("hidden");
        
      }
    }
    console.log(showShuffledPlayer(allPlayers))
});
playBtn.addEventListener("click",()=>{

})
  // showShuffledPlayer();
  ////////////////////////////////////////////////
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
});
