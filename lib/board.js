class Board {

   constructor(width, height) {
      this.matrix = [];
      while (height > 0) {
         this.matrix.push(new Array(width).fill(0));
         height -= 1;
      }
   }
}

export default Board;