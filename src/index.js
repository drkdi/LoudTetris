import {game} from '../lib/game';  




document.addEventListener("DOMContentLoaded", () => {
   let canvas = document.getElementById("canvas")
   let ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 0,0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
   const newGame = game();
});

