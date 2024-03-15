class Game
{
    constructor()
    {
        this.players   = [];
        this.questionProvider = new QuestionProvider();
        this.leftIncrementation = 100 + 10;
    }
    
    startGame(startGameDivId){
    
        let playerOne = prompt("Enter Player One Name...");
        let playerTwo = prompt("Enter Player two Name...");
    
        
        if((playerOne == null || playerOne == '') || (playerTwo == null || playerTwo == '')) 
        {
            alert("Invalid PlayerOne or PlayerTwo!");
            return;
        }
        
        this.registerPlayer(new Player(playerOne));
        this.registerPlayer(new Player(playerTwo));
        
        let startGameDiv = document.getElementById(startGameDivId);
        
        if(startGameDiv != undefined) startGameDiv.classList.remove("hidden");
        
        btnStartGame.classList.add("hidden");
        
    }
    
    registerPlayer(player)
    {
        this.players.push(player);
    }
    
    rollDice(rollDiceContainerId){
        
        var btnRandomCategory            = document.createElement("button");
        var btnChooseCategory            = document.createElement("button");
        var btnOtherPlayerChooseCategory = document.createElement("button");
        
        btnRandomCategory.innerText = "Random Category";
        
        btnRandomCategory.onclick = () => {
            let question = this.getRandomQuestion();
            this.drawQuestion("question-container", question);
        }
        
        
        let container = document.getElementById(rollDiceContainerId);
        
        container.append(btnRandomCategory);
        
    }
    
    showDice(diceContainer){ 
        
        document.getElementById(diceContainer).innerHTML = 
            `<input type='button' value='Roll Dice' id='btn-rollDice'>`;
        
        let btnRollDice = document.getElementById("btn-rollDice");
    
        btnRollDice.onclick = () => {
            this.rollDice("rollDiceContainer");
        }
    }
    
    getRandomQuestion(){
        return this.questionProvider.getRandomQuestion();
    }
    
    getRandomQuestionByCategory(category)
    {
        return this.questionProvider.getRandomQuestionByCategory(category);
    }
    
    playerMove(player)
    {
        player.left =+ this.leftIncrementation;
        this.isEndGame(player);
    }
    
    isEndGame(player){
        const endPosition = this.questionProvider.length * 100 + (10 * this.questionProvider.length - 1);
        
        if(player.left >= endPosition) return;//the player has won!
            
        //check if the current position of the player is the last one;
    }
    
    drawQuestion(questionContainer, question){
        
        let questionElement = document.createElement("h1");
        
        questionElement.innerText = question.text;
        
        let buttonFirstAnswer = document.createElement("button");
        buttonFirstAnswer.innerText = question.options[0];
        let buttonSecondAnswer = document.createElement("button");
        buttonSecondAnswer.innerText = question.options[1];
        let buttonThirdAnswer = document.createElement("button");
        buttonThirdAnswer.innerText = question.options[2];
        
        let containerElement = document.getElementById(questionContainer);
        
        containerElement.append(questionElement);
        containerElement.append(buttonFirstAnswer);
        containerElement.append(buttonSecondAnswer);
        containerElement.append(buttonThirdAnswer);      
    }
    
}

/*

const game = new Game();

const firstPlayerName = document.getElementById("player1");
const secondPlayer = document.getElementById("player2");

game.registerPlayer(new Player(firstPlayerName.value));
game.registerPlayer(new Player(secondPlayer.value));


game.rollDice();

//option 1

game.getRandomQuestion();
*/



