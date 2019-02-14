
class Board {

   constructor(width, height) {
      this.matrix = [];
      // debugger

      while (height > 0) {
         this.matrix.push(new Array(width).fill(0));
         height -= 1;
      }
      // return this.matrix;
      // debugger


   }


   // drawArena() {
   //    // this.ctx.clearRect(0, 0, 50,50);
   //    // let ctx = canvas.getContext('2d');
   //    debugger
   //    for (let i = 0; i < 10; i++) {
   //       for (let j = 0; j < 20; j++) {
   //          if (this.matrix[j][i] > 0) {
   //             debugger
   //             this.ctx.fillStyle = 'blue';
   //             // debugger
   //             // this.ctx.fillRect(j + 5, i + 5, 1, 1);
   //             this.ctx.fillRect(j, i, 1, 1);
   //          }
   //       }
   //    }
   // }
   


}

export default Board;