// import {piece} from './piece';
import {piece} from './temp_piece';


export const game = () => {
   // piece
   piece();

};

//  get currPiece back, returned as both pos and piece


function merge(arena, player) {
   // iterate player matrix 
   // if value > 0, arena[y+player.pos.y][x+player.pos.x]  = value
}







function gameLoop() {
   const timeDelta = time - this.lastTime;
   this.game.step(timeDelta);
   this.game.draw(this.ctx);
   this.lastTime = time;
   requestAnimationFrame(this.animate.bind(this));
} 

// another version
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

function update(time = 0) {
   const timeDelta = time - lastTime;
   dropCounter += timeDelta;
   if (dropCounter > dropInterval) {
      playerDrop();
   }
   lastTime = time;
   draw();
   requestAnimationFrame(update);
}






// document.onkeydown = function(e) {
//       switch (e.keyCode) {
//          case 37:
//             alert('left');
//             break;


//       }
//       // Left37, Up38, Right39, Down,40
//    // add for voice commands
//    };

   document.addEventListener('keydown', event => {
      switch (event.keyCode) {
         case 37:
            // move -1
         case 39:
            // move =1
         case 38:
            // rotate
         case 39:
            // drop 1
      }
      
   });



   const moveHorizontal = (piece) => {

   }

   const moveVertical = (piece) => {

   }



   const rotate = (piece) => {

   }

   const handleCollision = () => {

   }

   const handleWallCollision = () => {

   }


   const autoDrop = () => {

   }

