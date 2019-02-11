import Piece from './temp_piece';
import Board from './board';
// const Piece = require("./temp_piece.js");

// class Game {
//    constructor(ctx) {
//       ctx = ctx;
//    }

//    drawBoard(ctx) {
//       ctx.fillStyle = "rgba(0, 0, 0,0.85)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//    }

//    startGame() {
      
//       drawBoard(ctx);
//       let piece = new Piece(ctx);
      
//       // piece.draw({x: 10, y: 10});

//       // debugger
//       piece.update();


      
//       gameLoop(piece)

//    }


//    gameLoop(piece) {
//       setInterval(function () { piece.update() }, 500)
//    }

// }

// export default Game; 



let arena = new Board(12, 20);



export function drawBoard() {
   
   let canvas = document.getElementById("canvas");
   let ctx = canvas.getContext('2d');
   ctx.fillStyle = "rgba(0, 0, 0,0.85)";
   ctx.fillRect(0, 0, 400, 800);
   // ctx.fillStyle = "rgba(0, 0, 0,0.85)";
   // ctx.fillRect(0, 0, canvas.width, canvas.height);

   // for (let i = 0; i < 10; i++) {
   //    for (let j = 0; j < 20; j++) {
      arena.matrix.forEach((row, y) => {
         row.forEach((value, x) => {
         if (value > 0) {
            debugger
            ctx.fillStyle = 'blue';
            // debugger
            // ctx.fillRect(j + 5, i + 5, 1, 1);
            ctx.fillRect(x, y, 1, 1);
         }
      });
      });
   }

let piece;

function getPiece() {
   piece = new Piece();
}



export function startGame(ctx) {
   getPiece();
   drawBoard(ctx); 
   piece.update();


   // gameLoop(piece)
   setInterval(function () { gameLoop() }, 1000)
}




// need to change board height / width

function combine(arena, piece) {
   piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         debugger
         if (value > 0) {
            arena.matrix[y + piece.currPos.y][x + piece.currPos.x] = value;
         }
      });
   }
   );
   drawBoard();
}

function collide(arena, piece) {
   for (let y = 0; y < piece.matrix.length; ++y) {
      for (let x = 0; x < piece.matrix[y].length; ++x) {
         // debugger

         if (piece.matrix[y][x] !== 0 &&
            (arena.matrix[y + piece.currPos.y] &&
            arena.matrix[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {
            console.log("collide")
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
  
  
//    move to piece functions

   debugger


   if (piece.collide(arena)) {
      piece.currPos.y -= 1;
      piece.render();
      // debugger
      combine(arena, piece);
      // break
      // get new piece

      drawBoard(arena);
      getPiece();
      piece.update();

      // piece reset
   }
   else {
   drawBoard(arena)
   piece.drop();
   piece.render();
   // arena.drawArena();

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