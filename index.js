document.addEventListener("DOMContentLoaded", (event) => {

    const game = new Game();
  
    let createPlayers = document.getElementById("btnCreatePlayers");
  
    createPlayers.onclick = () => {
      game.startGame();
    };
    //////////////////////////////////
    let btnCreatePlayer = document.getElementById("btnStartGame");
  
    btnCreatePlayer.onclick = () => {
      game.showDice("rollDiceContainer");
    };
  });

 