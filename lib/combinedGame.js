


while (height > 0) {
   this.matrix.push(new Array(width).fill(0));
   height -= 1;
}
let arena = new Board(12, 20);



export function drawBoard() {

   let canvas = document.getElementById("canvas");
   let ctx = canvas.getContext('2d');
   ctx.fillStyle = "rgba(0, 0, 0,0.85)";
   ctx.fillRect(0, 0, 400, 800);
   
   arena.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value > 0) {
            debugger
            ctx.fillStyle = 'blue';

            ctx.fillRect(x, y, 1, 1);
         }
      });
   });
}

class Piece {
   constructor() {
      this.canvas = document.getElementById('canvas');

      this.ctx = this.canvas.getContext('2d');

      this.matrix = [
         [0, 1, 0],
         [1, 1, 1],
         [0, 0, 0],
      ];

      this.currPos = {
         x: 6,
         y: 0,
      };
      // this.draw = this.draw.bind(this);
      // debugger
      this.ctx.fillStyle = 'violet';
      this.ctx.scale(20, 20);

   }
   // have matrix
   // iterate through matrix, select blocks === 1
   // function(selected blocks) => return canvas objects

   render() {
      // this.drawBoard(this.ctx);
      this.drawPiece(this.currPos);

   }

   update() {
      this.render()
      // this.drop()
      // requestAnimationFrame(this.update());
   }

   // reassign matrix to take in, for context if it doesnt change
   drawPiece(currPos) {
      // this.ctx.clearRect(0, 0, 50,50);
      // let ctx = canvas.getContext('2d');
      for (let i = 0; i < this.matrix.length; i++) {
         for (let j = 0; j < this.matrix.length; j++) {
            if (this.matrix[i][j] > 0) {
               this.ctx.fillStyle = 'violet';
               // debugger
               // this.ctx.fillRect(j + 5, i + 5, 1, 1);
               this.ctx.fillRect(j + currPos.x, i + currPos.y, 1, 1);
            }
         }
      }
   }

   moveRight() {
      // console.log(currPos.x);
      // debugger
      this.currPos.x = this.currPos.x + 1;
      // if collide => other
   }

   moveLeft() {
      // console.log(currPos.x);
      // debugger
      this.currPos.x = this.currPos.x - 1;
      // if collide => other
   }

   drop() {
      this.currPos.y = this.currPos.y + 1;
      // if collide => other
      // this.draw.apply(this);
      // this.draw(this.currPos);
      // debugger
   }

   drawBoard(ctx) {
      ctx.fillStyle = "rgba(0, 0, 0,0.85)";
      ctx.fillRect(0, 0, 400, 800);
   }

   rotate() {
      // rotate array
      for (let i = 0; i < this.matrix.length; i++) {
         for (let j = 0; j < i; j++) {
            [this.matrix[i][j], this.matrix[j][i]] = [this.matrix[j][i], this.matrix[i][j]];
         }
      }
      // reverse array
      this.matrix.forEach(row => row.reverse());
   }

   collide(arena) {

      for (let y = 0; y < this.matrix.length - 1; ++y) {
         for (let x = 0; x < this.matrix[y].length; ++x) {
            // debugger

            if (this.matrix[y][x] !== 0 &&
               (arena.matrix[y + this.currPos.y] &&
                  arena.matrix[y + this.currPos.y][x + this.currPos.x]) !== 0) {
               console.log("collide")
               return true;
            }
         }
      }
      return false;
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