// export const block = () => {
//    let canvas = document.getElementById("canvas")
//    let ctx = canvas.getContext("2d");
//    piece.scale(25,25);
//    ctx.fillStyle = 'blue';
//    ctx.fillRect(5, 0, 1, 1);
//    pieces();
// };
class Piece {
   constructor() {   
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.ctx.scale(20, 20);
      this.matrix = [
         [0, 1, 0],
         [1, 1, 1],
         [0, 0, 0],
      ];
      
      this.currPos = {
         x: 4,
         y: 0,
      };
      // this.draw = this.draw.bind(this);
      // debugger
      // 

   }
   // have matrix
   // iterate through matrix, select blocks === 1
   // function(selected blocks) => return canvas objects

   render() {
      // this.drawBoard(this.ctx);
      this.drawPiece(this.currPos);

   }

   update() {
      this.render();
      // this.drop()
      // requestAnimationFrame(this.update());
   }

   // reassign matrix to take in, for context if it doesnt change
   drawPiece(currPos) {
      for (let i = 0; i < this.matrix.length; i++) {
         for (let j = 0; j < this.matrix.length; j++) {
            if (this.matrix[i][j] > 0) {
               this.ctx.fillStyle  = 'orange';
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
}

export default Piece;