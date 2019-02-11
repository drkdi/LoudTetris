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

      this.matrix = [
         [1, 1, 1],
         [0, 1, 0],
         [0, 0, 0],
      ];
      
      this.currPos = {
         x: 6,
         y: 0,
      };
      // this.draw = this.draw.bind(this);
      // debugger
      this.ctx.fillStyle = 'violet';
      this.ctx.scale(25, 25);

   }
   // have matrix
   // iterate through matrix, select blocks === 1
   // function(selected blocks) => return canvas objects

   render() {
      this.drawBoard(this.ctx);
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
      ctx.fillRect(0, 0, 400,800);
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






   // for more pieces
   // function createPiece(type) {
   //    switch(type) {
   //       case "T": 
   //          return [
   //             [0,1,0,0],
   //          ]
   //    }
   // }






   // function creatematrix(width, height) {
   //    const matrix = [];
   //    while (h--) {
   //       matrix.push(new Array(w).fill(0));
   //    }
   //    return matrix;
   // }









   // const nextPiece = () => {
      
   // }


}

export default Piece;