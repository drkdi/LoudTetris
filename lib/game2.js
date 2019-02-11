import Piece from './temp_piece';
import Board from './board';
// const Piece = require("./temp_piece.js");

// class Game {
//    constructor(ctx) {
//       this.ctx = ctx;
//    }

//    drawBoard(ctx) {
//       ctx.fillStyle = "rgba(0, 0, 0,0.85)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//    }

//    startGame() {
      
//       this.drawBoard(this.ctx);
//       let piece = new Piece(this.ctx);
      
//       // piece.draw({x: 10, y: 10});

//       // debugger
//       piece.update();


      
//       this.gameLoop(piece)

//    }


//    gameLoop(piece) {
//       setInterval(function () { piece.update() }, 500)
//    }

// }

// export default Game; 

export function drawBoard(ctx) {
   ctx.fillStyle = "rgba(0, 0, 0,0.85)";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
}




let piece;

export function startGame(ctx) {
   
   piece = new Piece();
   drawBoard(ctx); 
   piece.update();


   // gameLoop(piece)
   setInterval(function () { gameLoop() }, 1000)
}



let arena = new Board(400, 800);

function combine(arena, piece) {
   piece.matrix.forEach((row) => {
      row.forEach((value) => {
         if (value !== 0) {
            arena[piece.currPos.y][piece.currPos.x] = value;
         }
      });
   }
   );
}

function collide(arena, piece) {
   for (let y = 0; y < piece.matrix.length; ++y) {
      for (let x = 0; x < piece.matrix[y].length; ++x) {
         if (piece.matrix[y][x] !== 0 &&
            (arena[y + piece.currPos.y] &&
            arena[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {
            return true;
         }
      }
   }
   return false;
}







// let dropCounter = 0;
// let dropInterval = 1000;
// let lastTime = 0;

function gameLoop(time = 0) {
   piece.drop();
   piece.render();
   // debugger
   // const deltaTime = time - lastTime;

   // dropCounter = dropCounter + deltaTime;

   // if (dropCounter > dropInterval) {
   //    piece.drop()
   // }
   
   // lastTime = time;
   
   // piece.render();
   // console.log(dropCounter);



   // setInterval(function () { piece.update() }, 1000)
   // requestAnimationFrame(gameLoop);
   if (collide(arena, piece)) {
      combine(arena, piece);
   }



}

document.addEventListener('keydown', event => {
   switch (event.keyCode) {
      case 37:
         piece.moveLeft();
         piece.render()
         break;
      case 39:
         piece.moveRight();
         piece.render();
         break;
      case 38:
         // console.log("rotate")
         piece.rotate();
         piece.render();
         break;
      case 40:
         piece.drop();
         piece.render();
         break;
         // console.log("bananas")
   }
});