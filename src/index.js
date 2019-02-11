// import Game from '../lib/game2';  
import {startGame, drawBoard} from '../lib/game2';  



document.addEventListener("DOMContentLoaded", () => {
   let canvas = document.getElementById("canvas");
   canvas.width = 240;
   canvas.height= 400;
   

   var ctx = canvas.getContext('2d');
   
   
   // const newGame = new Game(ctx);
   // newGame.drawBoard(ctx);
   // newGame.startGame();

   
   drawBoard(ctx);
   startGame(ctx);


});
