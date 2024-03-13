class Game {
  constructor() {
    this.players = [];
    this.questionProvider = new QuestionProvider();
    this.leftIncrementation = 100 + 10;
  }

  startGame(startGameDivId) {
    let playerOne = prompt("Enter Player One Name...");
    let playerTwo = prompt("Enter Player two Name...");

    if (playerOne == null || (undefined && playerTwo == null) || undefined) {
      alert("Invalid PlayerOne or PlayerTwo!");
      return;
    }

    this.registerPlayer(new Player(playerOne));
    this.registerPlayer(new Player(playerTwo));

    let startGameDiv = document.getElementById(startGameDivId);

    if (startGameDiv != undefined) startGameDiv.classList.remove("hidden");

    btnStartGame.classList.add("hidden");
  }

  registerPlayer(player) {
    this.players.push(player);
  }

  rollDice(rollDiceContainerId) {
    document.getElementById(
      rollDiceContainerId
    ).innerHTML = `<div class='options'> 
                <input type='button' value='1 - Random category' />
                <input type='button' value='2 - Choose category' />
                <input type='button' value='3 - The other player choose for you' />
            </div>`;
  }

  showDice(diceContainer) {
    document.getElementById(
      diceContainer
    ).innerHTML = `<input type='button' value='Roll Dice' id='btn-rollDice'>`;

    let btnRollDice = document.getElementById("btn-rollDice");

    btnRollDice.onclick = () => {
      this.rollDice("rollDiceContainer");
    };
  }

  getRandomQuestion() {
    return this.questionProvider.getRandomQuestion();
  }

  getRandomQuestionByCategory(category) {
    return this.questionProvider.getRandomQuestionByCategory(category);
  }

  playerMove(player) {
    player.left = +this.leftIncrementation;
    this.isEndGame(player);
  }

  isEndGame(player) {
    const endPosition =
      this.questionProvider.length * 100 +
      (10 * this.questionProvider.length - 1);

    if (player.left >= endPosition) return; //the player has won!

    //check if the current position of the player is the last one;
  }
  
///////////////////////////////////quiz//////////////////////////
// 
// const $answerbtn = document.getElementById("answer-buttons");


    

    startQuiz() {
       const $nextBtn = document.getElementById("next-btn");
        let currentQuentionIndex = 0;
    let score = 0;
        $nextBtn.innerHTML = "Next";
     getRandomQuestion();


  }
}

// const game = new Game();

// const firstPlayerName = document.getElementById("player1");
// const secondPlayer = document.getElementById("player2");

// game.registerPlayer(new Player(firstPlayerName.value));
// game.registerPlayer(new Player(secondPlayer.value));

// game.rollDice();

// //option 1

// game.getRandomQuestion();
