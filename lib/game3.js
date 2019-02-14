// import { piece } from './temp_piece';

// let position;

// let currPos = {
//    x: 5,
//    y: 5,
// };
// // let currPiece = piece(canvas, currPos.x, currPos.y);

// function getPiece() {
//    return piece(canvas, currPos.x, currPos.y);
// }


// export function game() {
   
//    getPiece();  
//    console.log(currPos)
//    move(5);
//    drop();
   
//    console.log(currPos)
   
//    getPiece(canvas);


//    // debugger



//    // rotate(currPiece)
// }


// function move(offset) {
//    // console.log(currPos.x);
//    currPos.x = currPos.x + offset;
//    // if collide => other
// }

// function drop() {
//    currPos.y = currPos.y + 1;
//    // if collide => other
//    // let dropCounter = 0;
// }

// function rotate(piece) {
//    // rotate array
//    for (let i = 0; i < piece.length; i++) {
//       for (let j = 0; j < i; j++) {
//          [piece[i][j], piece[j][i]] = [piece[j][i], piece[i][j]];
//       }
//    }
//    // reverse array
//    piece.forEach(row => row.reverse());
//    return piece;
// };


// function gameLoop() {
//    const timeDelta = time - this.lastTime;
//    this.game.step(timeDelta);
//    this.game.draw(this.ctx);
//    this.lastTime = time;
//    requestAnimationFrame(this.animate.bind(this));
// }

// let FPS = 60;
// setInterval(function() {
//    update();
//    draw();
// });
// var textX = 50;
// var textY = 50;

// function update() {
//    textX += 1;
//    textY += 1;
// }



// function draw() {
//    canvas.fillRect(0, 0, canvas.width, canvas.height);
//    canvas.fillStyle = "#000"; // Set color to black
//    canvas.fillText("Sup Bro!", textX, textY);
// }