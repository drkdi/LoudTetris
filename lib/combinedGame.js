const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(20,20)

   function createArena(width, height) {
      let matrix = [];
      while (height > 0) {
         matrix.push(new Array(width).fill(0));
         height -= 1;
      }
      return matrix;
   }

   // what does arena return
   let arena = createArena(12, 20);

   function drawBoard(arena) {      
      // change to i, j
      arena.forEach((row, y) => {
         row.forEach((value, x) => {
            if (value > 0) {
               ctx.fillStyle = 'blue';
               ctx.fillRect(x, y, 1, 1);
            }
         });
      });
   }

   function drawPiece(matrix, currPos) {
      // ctx.clearRect(0, 0, 50,50);
      // let ctx = canvas.getContext('2d');
      matrix.forEach((row, y) => {
         row.forEach((value, x) => {
            if (value > 0) {
               ctx.fillStyle = 'violet';
               ctx.fillRect(x + currPos.x, y + currPos.y, 1, 1);
            }
         });
      });
   }

   function drawAll() {
      ctx.fillStyle = '#000';
      // change to ctx.width, ctx.height
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawMatrix(arena);
      drawMatrix(piece.matrix, piece.currPos); 
   }

   // function createPiece() {
   let piece = {
      matrix: [
         [0, 1, 0],
         [1, 1, 1],
         [0, 0, 0],
      ],

      currPos: {
         x: 6,
         y: 0,
      },
   };

   function pieceReset() {
      // set piece stuff
   }


   // piece = createPiece()
   // piece.matrix
   // piece.currPos.x
   // arena




   function moveRight() {
      // console.log(currPos.x);
      // debugger
      piece.currPos.x += 1;
      // if collide => other
   }

   function moveLeft() {
      // console.log(currPos.x);
      // debugger
      piece.currPos.x -= 1;
      // if collide => other
   }

   function drop() {
      piece.currPos.y += 1;
      if (collision(arena, piece)) {
         piece.currPos.y -= 1;
         combine(arena, piece);
         // playerReset();
         // arenaSweep();
         // updateScore();
      }
      dropCounter = 0;

   }

   function rotate(matrix) {
      // rotate array
      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
         }
      }
      matrix.forEach(row => row.reverse());
   }




// need to change board height / width

function combine(arena, piece) {
   piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value > 0) {
            arena.matrix[y + piece.currPos.y][x + piece.currPos.x] = value;
         }
      });
   });
}



function collision(arena, piece) {
   for (let y = 0; y < piece.matrix.length; ++y) {
      for (let x = 0; x < piece.matrix[y].length; ++x) {
         // debugger

         if (piece.matrix[y][x] !== 0 && (arena.matrix[y + piece.currPos.y] &&
               arena[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {
            console.log("collide")
            return true;
         }
      }
   }
   return false;
}


// function gameLoop(time = 0) {

//    // debugger
//    // const deltaTime = time - lastTime;

//    // dropCounter = dropCounter + deltaTime;

//    // if (dropCounter > dropInterval) {
//    //    piece.drop()
//    // }

//    // lastTime = time;

//    // piece.render();
//    // console.log(dropCounter);

//    // setInterval(function () { piece.update() }, 1000)
//    // requestAnimationFrame(gameLoop);


//    //    move to piece functions



//    if (piece.collide(arena)) {
//       piece.currPos.y -= 1;
//       piece.render();
//       // debugger
//       combine(arena, piece);
//       // break
//       // get new piece

//       drawBoard(arena);
//       getPiece();
//       piece.update();

//       // piece reset
//    }
//    else {
//       drawBoard(arena)
//       piece.drop();
//       piece.render();
//       // arena.drawArena();
//    }
// }



let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
function update(time = 0) {
   const deltaTime = time - lastTime;

   dropCounter += deltaTime;
   if (dropCounter > dropInterval) {
      drop();
   }

   lastTime = time;

   draw();
   requestAnimationFrame(update);
}



// function clearLine() {

// }


document.addEventListener('keydown', event => {
   switch (event.keyCode) {
      case 37:
         moveLeft();
         break;
      case 39:
         moveRight();
         break;
      case 38:
         // console.log("rotate")
         rotate();
         break;
      case 40:
         drop();
         break;
      // console.log("bananas")
   }
});

