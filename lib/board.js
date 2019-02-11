
class Board {

   constructor(width, height) {
      this.matrix = [];
      // debugger
      while (height > 0) {
         this.matrix.push(new Array(width).fill(0));
         height -= 1;
      }
      // return this.matrix;
      debugger
   }

   


}

export default Board;