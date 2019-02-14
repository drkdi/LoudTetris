// // import {piece} from './piece';
// import {piece} from './temp_piece';

// let position;
// let x;
// let y;

// let currPos = {
//    x: 5,
//    y: 5,
// };



// export function game() {
//    move(7);
//    drop();
//    let currPiece = piece(currPos.x, currPos.y);

// }

// // export const game = () => {
// //    // piece
   

  
// //       // console.log(currPos.x = currPos.x + 5);
// //    move(7);
// //    drop();
// //    let currPiece = piece(currPos.x, currPos.y);

// // };


// function move(offset) {
//    // console.log(currPos.x);
//    currPos.x = currPos.x + offset;
//    // if collide => other
// }



// //  get currPiece back, returned as both pos and piece


// function merge(arena, player) {
//    // iterate player matrix 
//    // if value > 0, arena[y+player.pos.y][x+player.pos.x]  = value
// }

// function drop() {
//    currPos.y = currPos.y + 1;
//    // if collide => other
//    dropCounter = 0;
// }






// function gameLoop() {
//    const timeDelta = time - this.lastTime;
//    this.game.step(timeDelta);
//    this.game.draw(this.ctx);
//    this.lastTime = time;
//    requestAnimationFrame(this.animate.bind(this));
// } 

// // another version
// let dropCounter = 0;
// let dropInterval = 1000;
// let lastTime = 0;

// function update(time = 0) {
//    const timeDelta = time - lastTime;
//    dropCounter += timeDelta;
//    if (dropCounter > dropInterval) {
//       playerDrop();
//    }
//    lastTime = time;
//    draw();
//    requestAnimationFrame(update);
// }






// // document.onkeydown = function(e) {
// //       switch (e.keyCode) {
// //          case 37:
// //             alert('left');
// //             break;


// //       }
// //       // Left37, Up38, Right39, Down,40
// //    // add for voice commands
// //    };

//    document.addEventListener('keydown', event => {
//       switch (event.keyCode) {
//          case 37:
//             move(-1);
//          case 39:
//             move(1);
//          case 38:
//             rotate(currPiece)
//          case 39:
//             drop();
//       }
      
//    });



//    const moveHorizontal = (piece) => {

//    }

//    const moveVertical = (piece) => {

//    }

//    let rotate = (piece) => {
//       // rotate array
//       for (let i = 0; i < piece.length; i++) {
//          for (let j = 0; j < i; j++) {
//             [piece[i][j], piece[j][i]] = [piece[j][i], piece[i][j]];
//          }
//       }
//       // reverse array
//       piece.forEach(row => row.reverse());
//       return piece;
//    };

//    const handleCollision = () => {

//    }

//    const handleWallCollision = () => {

//    }


//    const autoDrop = () => {

//    }

// // game()