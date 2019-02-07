import { isContext } from "vm";

export const block = () => {
   let canvas = document.getElementById("canvas")
   let ctx = canvas.getContext("2d");
   piece.scale(25,25);
   ctx.fillStyle = 'blue';
   ctx.fillRect(5, 0, 1, 1);
   pieces();
};

let matrix = [
   [0, 0, 0, 0],
   [0, 1, 1, 1],
   [0, 0, 1, 0],
   [0, 0, 0, 0],
];


// have matrix
// iterate through matrix, select blocks === 1
// function(selected blocks) => return canvas objects


export const piece = () => {
   // let canvas = document.getElementById("canvas")
   let piece = canvas.getContext('2d');
   let ctx = canvas.getContext("2d");
   ctx.fillStyle = 'red';
   piece.scale(25, 25);

   
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
         // console.log(matrix[i][j]);
         if (matrix[i][j] > 0) {
            // ctx[i][j] = block();
            piece.fillStyle = 'red';
            piece.fillRect(i, j, 1, 1);
         }
      }  
   }
};

   const currPiece = {
      // make pos x middle
      pos: {x:0, y:0},
      piece: null,
   };




// for more pieces
// function createPiece(type) {
//    switch(type) {
//       case "T": 
//          return [
//             [0,1,0,0],
//          ]
//    }
// }






function creatematrix(width, height) {
   const matrix = [];
   while (h--) {
      matrix.push(new Array(w).fill(0));
   }
   return matrix;
}









const nextPiece = () => {
   
}