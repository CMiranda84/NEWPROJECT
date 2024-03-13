document.addEventListener("DOMContentLoaded", (event) => {
    
    const game = new Game();
    
    let btnStartGame = document.getElementById("btnStartGame");
    
    btnStartGame.onclick = () => {
        game.startGame("containerStartGame");
    }
   ////////////////////////////////// 
    let btnCreatePlayer = document.getElementById("btn-CreatePlayers");
    
    btnCreatePlayer.onclick = () => {
        
        game.showDice("rollDiceContainer");        
    }
 //////////////////////////////////////////   
    const btnCategoryMusic = document.getElementById("btn-categoryMusic");
    const $nextBtn = document.getElementById("next-btn");
    const $theQuestion = document.getElementById("question");
    const $answerbtn = document.getElementById("answer-buttons");
    

    btnCategoryMusic.onclick = () =>{
        
       game.getRandomQuestionByCategory("music")
        console.log(game.getRandomQuestionByCategory("music"));
    }
    

    ////////////////////// Quiz //////////////////////////////////////
    





    
});