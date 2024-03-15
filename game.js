class Game {
  constructor() {
    this.players = [];
    this.currentPlayer = null;
    this.questionProvider = new QuestionProvider();
    this.leftIncrementation = 100 + 10;
    this.playerIndex = Math.floor(Math.random() * 2);
  }

  startGame() {
    let playerOne = prompt("Enter Player One Name...");
    let playerTwo = prompt("Enter Player two Name...");

    if (
      playerOne === undefined ||
      playerOne === "" ||
      playerTwo === undefined ||
      playerTwo === ""
    ) {
      alert("Enter the FREAKING name!");
      return;
    }

    let firstPlayer = new Player(playerOne);
    let secondPlayer = new Player(playerTwo);

    this.registerPlayer(firstPlayer);
    this.registerPlayer(secondPlayer);
    this.showPlayer("one");
    this.showPlayer("two");

    //since we have players registered we set the currentPlayer as the First one
    this.currentPlayer = this.players[this.playerIndex];

    let btnCreatePlayer = document.getElementById("btnCreatePlayers");

    let containerStartGame = document.getElementById("containerStartGame");

    containerStartGame.classList.remove("hidden");

    btnCreatePlayer.classList.add("hidden");
    /////////////// creating passarele//////////:
    // this.showBoard();

    const firstMessage = document.getElementById("firstMessage");
    const boardContainer = document.getElementById("boardcontainer");

    firstMessage.classList.add("hidden");
    boardContainer.classList.remove("hidden");
  }

  registerPlayer(player) {
    this.players.push(player);
  }

  rollDice() {
    let container = document.getElementById("categoriesContainer");

    container.classList.remove("hidden");
    container.innerHTML = "";

    container.append(this.getDiceRandom());
  }

  showDice() {
    let diceContainerElement = document.getElementById("rollDiceContainer");

    //in case the dice is not visible show it
    diceContainerElement.classList.remove("hidden");

    diceContainerElement.innerHTML = `<input type='button' value='Roll Dice' id='btn-rollDice'>`;

    let btnRollDice = document.getElementById("btn-rollDice");

    this.showPlayerLabel("rollDiceContainer");

    btnRollDice.onclick = () => {
      this.rollDice();
      diceContainerElement.classList.add("hidden");
    };

    //if we start to roll the dice the button start game should not be visible

    let btnStartGame = document.getElementById("btnStartGame");

    if (btnStartGame !== undefined) btnStartGame.classList.add("hidden");
  }

  getRandomQuestion() {
    return this.questionProvider.getRandomQuestion();
  }

  getRandomQuestionByCategory(category) {
    return this.questionProvider.getRandomQuestionByCategory(category);
  }

  drawQuestion(question) {
    let containerElement = document.getElementById("question-container");
    let questionLabel = document.createElement("h2");
    questionLabel.innerText = question.text;

    containerElement.classList.remove("hidden");
    containerElement.innerHTML = "";

    containerElement.append(questionLabel);
    const div = document.createElement("div");

    div.append(
      this.createOptionButton(question, question.options[0], "first-option")
    );
    div.append(
      this.createOptionButton(question, question.options[1], "second-option")
    );
    div.append(
      this.createOptionButton(question, question.options[2], "third-option")
    );
    div.append(
      this.createOptionButton(question, question.options[3], "fourth-option")
    );
    containerElement.append(div);
    containerElement.classList.add("question-container-background");
  }

  checkAnswer(question, questionOption) {
    this.setOptionsHighlights(question.corretAnswer);

    //the answer is correct
    if (questionOption === question.corretAnswer) {
      this.playerMove();
      this.isEndGame();
    }
  }

  setOptionsHighlights(correctAnswer) {
    let optionsElements = document.querySelectorAll(
      "#question-container .start-btn"
    );

    optionsElements.forEach((element) => {
      if (element.innerText === correctAnswer)
        element.classList.add("correct-answer");
      else element.classList.add("wrong-answer");
    });
  }
  getDiceRandom() {
    let btnRandomCategory = document.createElement("button");
    let btnChooseCategory = document.createElement("button");
    let btnOtherPlayerChooseCategory = document.createElement("button");

    btnRandomCategory.innerText = "Random Category";
    btnChooseCategory.innerText = "ChooseCategory";
    btnOtherPlayerChooseCategory.innerText = "the other player choose for you";

    btnRandomCategory.onclick = () => {
      let question = this.getRandomQuestion();
      this.drawQuestion(question);
      btnRandomCategory.classList.add("hidden");
    };

    btnChooseCategory.onclick = () => {
      this.getCategoriesButtons();
      btnChooseCategory.classList.add("hidden");
    };

    btnOtherPlayerChooseCategory.onclick = () => {
      this.getCategoriesButtons();
      btnOtherPlayerChooseCategory.classList.add("hidden");
    };

    let diceRandomOptions = [
      btnRandomCategory,
      btnChooseCategory,
      btnOtherPlayerChooseCategory,
    ];

    let randomIndex = Math.floor(Math.random() * 3);

    return diceRandomOptions[randomIndex];
  }

  getAllCategories() {
    //for each question in questionProvider create array of distinct category
    let categories = [];

    for (let i = 0; i < this.questionProvider.questions.length; i++) {
      if (categories.includes(this.questionProvider.questions[i].category))
        continue;

      categories.push(this.questionProvider.questions[i].category);
    }

    return categories;
  }

  getCategoriesButtons() {
    let buttonsContainer = document.getElementById("categoriesContainer");

    buttonsContainer.classList.remove("hidden");

    buttonsContainer.innerHTML = "";

    let categories = this.getAllCategories();

    for (let i = 0; i < categories.length; i++) {
      let btnCategory = document.createElement("button");
      btnCategory.innerText = categories[i];

      btnCategory.onclick = () => {
        let question = this.getRandomQuestionByCategory(categories[i]);

        this.drawQuestion(question);

        buttonsContainer.classList.add("hidden");
      };

      buttonsContainer.append(btnCategory);
    }
  }

  //only shows when the player choose option
  showNextButton() {
    let nextButtonContainer = document.getElementById("nextButtonContainer");

    nextButtonContainer.innerHTML = "";

    let btnNext = document.createElement("button");

    btnNext.classList.add("btn-go-next");

    btnNext.innerText = "Next Player : " + this.currentPlayer.name;

    btnNext.onclick = () => {
      this.showDice();
      this.hideContainerQuestion();
      btnNext.remove();
      let containerElement = document.getElementById("question-container");
      containerElement.classList.add("question-container-background");
    };

    nextButtonContainer.append(btnNext);

    console.log(this.currentPlayer);
  }
  nextPlayer() {
    this.playerIndex += 1;
    this.playerIndex %= 2;
    this.currentPlayer = this.players[this.playerIndex];
    console.log(this.currentPlayer);
  }

  showPlayerLabel(diceContainer) {
    let container = document.getElementById("boardcontainer");

    let labelPlayer = document.createElement("p");

    labelPlayer.innerHTML =
      "Its ur turn: <b>" + this.currentPlayer.name + "</b>";

    container.prepend(labelPlayer);
    setTimeout(() => {
      labelPlayer.remove();
    }, 3000);
  }

  createOptionButton(question, optionText, id) {
    let btnOption = document.createElement("button");
    btnOption.className = "btn btn-first-answer start-btn";
    btnOption.innerText = optionText;
    btnOption.id = id;

    btnOption.onclick = () => {
      this.showNextButton();
      this.checkAnswer(question, optionText);
      this.disableOptionButtons();
      this.nextPlayer();
    };

    return btnOption;
  }

  disableOptionButtons() {
    let firstOption = document.getElementById("first-option");
    let secondOption = document.getElementById("second-option");
    let thirdOption = document.getElementById("third-option");
    let fourthOption = document.getElementById("fourth-option");

    firstOption.disabled = true;
    secondOption.disabled = true;
    thirdOption.disabled = true;
    fourthOption.disabled = true;
  }

  hideContainerQuestion() {
    let container = document.getElementById("question-container");

    if (container === undefined) return;

    container.classList.add("hidden");
  }
  getPlayerIndex() {
    return this.playerIndex === 0 ? "one" : "two";
  }
  playerMove() {
    this.currentPlayer.left++;
    const playerOrder = this.getPlayerIndex();
    const cells = document.querySelectorAll(
      `#board-player-${playerOrder} .cell`
    );
    this.showPlayer(playerOrder);
    this.hidePlayer(cells, playerOrder);
  }
  showPlayer(order) {
    const cells = document.querySelectorAll(`#board-player-${order} .cell`);
    cells[this.currentPlayer?.left || 0].classList.add(`player-${order}`);
  }
  hidePlayer(cells, order) {
    let left = this.currentPlayer?.left - 1;
    cells[left || 0].classList.remove(`player-${order}`);
  }

  isEndGame(order) {
    // esconder btn nextPlayer

    const lastCell = document.querySelectorAll(`#board-player-${order} .cell`);
    // const endPosition = lastCell.length-1

    if (this.currentPlayer.left >= 9) {
      let btnNextContainer = document.getElementById("nextButtonContainer");
      btnNextContainer.classList.add("hidden");
      //  esconder question container
      this.hideContainerQuestion();
      // mostrar botao novo jogo

      const newGame = document.createElement("button");
      newGame.innerText = "NEW GAME";
      const newGameContainer = document.getElementById("new-game-container");
      newGameContainer.append(newGame);
      newGame.onclick = () => {
        location.reload();
      };
      return this.declareWinner();
    }
    // mostrar nome vencedor
  }

  declareWinner() {
    setTimeout(() => {
      alert(`${this.currentPlayer.name} "wins"!`);
    }, 1000);
  }

  restartGame() {
    window.location.reload();
  }
}

// }
// getNextPlayer() {
//   const indexOfCurrentPlayer = this.players.indexOf(this.currentPlayer);
//   if (indexOfCurrentPlayer === 1){ return this.players[0];
//   }
//   else if (indexOfCurrentPlayer === 0){ return this.players[1];}
// }

//   showBoard (){
//     const board = document.getElementById('boardplayerone');
//     const cells = [];
// for (let i = 0; i < 9; i++) {
//       const cell = document.createElement('div');
//       cell.classList.add('cell');
//       cell.dataset.index = i;
//       cell.addEventListener('click', () => cellClicked(i));
//       board.appendChild(cell);
//       cells.push(cell);
//     }console.log(`${cells}`)
//   }
