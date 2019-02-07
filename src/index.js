import {game} from '../lib/game';  




document.addEventListener("DOMContentLoaded", () => {
   let arena = document.getElementById("canvas")
   let ctx = arena.getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 0,0.85)";
      ctx.fillRect(0, 0, arena.width, arena.height);
      
   const newGame = game();
});

