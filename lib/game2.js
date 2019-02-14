// import Piece from './temp_piece';
// import Board from './board';

// let arena = new Board(10, 20);

// export function drawBoard() {
   
//    let canvas = document.getElementById('canvas');
//    let ctx = canvas.getContext('2d');
//    ctx.fillStyle = "rgb(0,0,0,0.7)";
//    ctx.fillRect(0,0, 200, 400);

//       arena.matrix.forEach((row, y) => {
//          row.forEach((value, x) => {
//          if (value > 0) {
//             // debugger
//             ctx.fillStyle = 'blue';
//             // debugger
//             // ctx.fillRect(j + 5, i + 5, 1, 1);
//             ctx.fillRect(x + 0, y + 0, 1, 1);
//             // canvas = ctx; 
//             // ???????
//          }
//       });
//       });
// }

// let piece;

// function getPiece() {
//    piece = new Piece();
// }



// export function startGame(ctx) {
//    getPiece();
//    drawBoard(); 
//    piece.update();


//    // gameLoop(piece)
//    setInterval(function () { gameLoop() }, 500)
// }




// // need to change board height / width

// function combine(arena, piece) {
//    for (let y = 0; y < piece.matrix.length; ++y) {
//       for (let x = 0; x < piece.matrix[y].length; ++x) {

//          console.log("combine")
//          if ( piece.matrix[y][x] > 0) {
//             // console.log([piece.currPos.y - y - 1], [piece.currPos.x - x])
//             arena.matrix[piece.currPos.y - y][piece.currPos.x] = 1;
            
//          }
//          // debugger
//       }
//    }
//    drawBoard();
//    getPiece();
//    piece.update();
//    piece.render();

//    debugger
// }

// function collide(arena, piece) {

//    for (let y = 0; y < piece.matrix.length; ++y) {
//       for (let x = 0; x < piece.matrix[y].length; ++x) {
//          // if ((piece.matrix[y][x] > 0) && (piece.currPos.y + y - 1 === 20))
//          if (piece.matrix[y][x] !== 0 && arena.matrix[y + piece.currPos.y] && arena.matrix[y + piece.currPos.y][x + piece.currPos.x] !== 0 ) 
//          {

//             // (arena.matrix[y + piece.currPos.y] &&
//             // arena.matrix[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {
//             console.log("collide")
//             return true;
//          }
//       }
//    }
//    return false;


// /////////  if (piece.y pos -1).value === 0, arena.combine
// ///////////// || if iterate through arena and any block of piece.position.y === 20 , combine
// //  ||x===0, 10, arena, -1 or +1
// // if piece.collide && piece.position.y < 0, game over

// // check if collision, else (drop, drawboard, drawpiece)









// }


// // let dropCounter = 0;
// // let dropInterval = 1000;
// // let lastTime = 0;









// function gameLoop(time = 0) {
  
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
  
  
// //    move to piece functions

// debugger
//    if (collide(arena, piece)) {
//       console.log("collide in gameloop")
//       // piece.currPos.y -= 1;
//       piece.render();
//       combine(arena, piece);
//       // break
//       // get new piece

//       getPiece();
//       gameLoop();

//       // piece.update();

//       // piece reset
//    }
//    else {
//    drawBoard();
//    piece.drop();
//    piece.render();
//    // arena.drawArena();

//    }
// }

// document.addEventListener('keydown', event => {
//    switch (event.keyCode) {
//       case 37:
//          piece.moveLeft();
//          piece.render()
//          break;
//       case 39:
//          piece.moveRight();
//          piece.render();
//          break;
//       case 38:
//          // console.log("rotate")
//          piece.rotate();
//          piece.render();
//          break;
//       case 40:
//          piece.drop();
//          piece.render();
//          break;
//          // console.log("bananas")
//    }
// });

