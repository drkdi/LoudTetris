

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(30, 30);
let dropCounter = 0;
let dropInterval = 2000;
let lastTime = 0;

////////////////////////// Piece Constants ////////////////////////////

const colors = [
   "placeholder", 
   "#d700ab",
   "#ffb300",
   "#00b0fe",
   "#f05",
   "#28cb00",
   "#377aff",
   "#ff7500",
];


   // t #d700ab
   // line "#00b0fe"
   // s #28cb00
   // j 377aff
   // L#ff7500
   // square #ffb300
   // z #f05

let t_piece;
let square_piece;
let line_piece;
let z_piece;
let s_piece;
let j_piece;
let L_piece;

let piecees = [
   t_piece = {
      matrix: [
         [0, 1, 0],
         [1, 1, 1],
         [0, 0, 0],
      ]   
   },
   square_piece = {
      matrix: [
         [2, 2],
         [2, 2],

      ]
   },
   line_piece = {
      matrix: [
         [0, 0, 3, 0],
         [0, 0, 3, 0],
         [0, 0, 3, 0],
         [0, 0, 3, 0],
      ]
   },
   z_piece = {
      matrix: [
         [4, 4, 0],
         [0, 4, 4],
         [0, 0, 0],
      ]
   },
   s_piece = {
      matrix: [
         [0, 5, 5],
         [5, 5, 0],
         [0, 0, 0],
      ]
   },
   j_piece = {
      matrix: [
         [0, 6, 0],
         [0, 6, 0],
         [6, 6, 0],
      ]
   },
   L_piece = {
      matrix: [
         [0, 7, 0],
         [0, 7, 0],
         [0, 7, 7],
      ]
   },
];

////////////////////////// Create Arena + Pieces ////////////////////////////

const board = createBoard(12, 20);

function createBoard(width, height) {
   let matrix = [];
   while (height > 0) {
      matrix.push(new Array(width).fill(0));
      height -= 1;
   }
   return matrix;
}

function drawBoard(board) {
   // change to i, j
   board.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value > 0) {
            ctx.fillStyle = colors[value];
            ctx.fillRect(x, y, 1, 1);
         }
      });
   });
}

function drawPiece(matrix, currPos) {
   matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value > 0) {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = colors[value];
            ctx.fillRect(x + currPos.x, y + currPos.y, 1, 1);
         }
      });
   });
}

function draw() {
   // ctx.fillStyle = "rgba(9,16,20,0.3";
   ctx.fillStyle = "rgba(12,49,59,1)";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   // ctx.globalAlpha = 0.5
   drawBoard(board);
   drawPiece(piece.matrix, piece.currPos);
}

////////////////////////// Piece Actions ////////////////////////////

function rotate() {
   for (let i = 0; i < piece.matrix.length; i++) {
      for (let j = 0; j < i; j++) {
         [piece.matrix[i][j], piece.matrix[j][i]] = [piece.matrix[j][i], piece.matrix[i][j]];
      }
   }
   piece.matrix.forEach(row => row.reverse());
   const currPos = piece.currPos.x;
   let offset = 1;
   while (collide(board, piece)) {
      piece.currPos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > piece.matrix.length) {
         piece.currPos.x = currPos;
         return;
      }
   }
}

function down() {
   piece.currPos.y += 1;
   if (collide(board, piece)) {
      piece.currPos.y--;
      merge(board, piece);
      createPiece();
      arenaSweep();
   }
   dropCounter = 0;
}

function playerMove(offset) {
   piece.currPos.x += offset;
   if (collide(board, piece)) {
      piece.currPos.x -= offset;
   }
}

function drop() {
   for (let i = 0; i < 20; i++) {
      piece.currPos.y += 1;
   if (collide(board, piece)) {
      piece.currPos.y--;
      merge(board, piece);
      createPiece();
      arenaSweep();
      return;
   }
   dropCounter = 0;
}
}




////////////////////////// Board + Piece Actions ////////////////////////////



function collide(board, piece) {
   for (let y = 0; y < piece.matrix.length; ++y) {
      for (let x = 0; x < piece.matrix[y].length; ++x) {
         if (piece.matrix[y][x] !== 0 &&
            (board[y + piece.currPos.y] &&
            board[y + piece.currPos.y][x + piece.currPos.x]) !== 0) {
            return true;
         }
      }
   }
   return false;
}


function merge(board, piece) {
   piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value !== 0) {
            board[y + piece.currPos.y][x + piece.currPos.x] = value;
         }
      });
   });
}

////////////////////////// GAME LOGIC ////////////////////////////


function update(time = 0) {
   const deltaTime = time - lastTime;
   dropCounter += deltaTime;
   if (dropCounter > dropInterval) {
      down();
   }

   lastTime = time;

   draw();
   requestAnimationFrame(update);
}

function arenaSweep() {

   outer: for (let y = board.length - 1; y > 0; --y) {
      for (let x = 0; x < board[y].length; ++x) {
         if (board[y][x] === 0) {
            continue outer;
         }
      }
      const row = board.splice(y, 1)[0].fill(0);
      board.unshift(row);
      ++y;
   }
}

const piece = {
   name: "",
   matrix: null,
   currPos: { x: 0, y: 0 },
};


function createPiece() {

   piece.name = piecees[Math.floor(Math.random() * 7)];
   piece.matrix = piece.name.matrix;
   piece.currPos = {x:5, y:0};
   
   if (collide(board, piece)) {
      board.forEach(row => row.fill(0));

   }

}

///////////////////// INPUTS ///////////////////
let word;
let words = [];


var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
// recognition.maxAlternatives = 5;
recognition.maxAlternatives = 10;
recognition.onresult = function (event) {
   parseSpeech(event);
};
// recognition.onend = function () {
//    recognition.start();

// };


// set timeout, or delete object if same 
recognition.start(event);

function parseSpeech(event) {
   /////////// use last 5 inputs, find if input includes
   for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
      if ((event.results[i].isFinal) && transcript.length > 6) {
         transcript = transcript.split(" ");
         transcript.forEach(function(word) {
            words.push(word);
         })
      } 
      else if((event.results[i].isFinal)) {
         words.push(transcript);
      } 
   }

// reset array after every input, iterate through array so can input faster

   word = words.slice(-1)[0];
   console.log(words)
   console.log(word)
   // console.log(word)
      
   if (word.includes("left")){
      console.log("move left")
      playerMove(-1);
      document.getElementById("left").style.color = 'red';
      setTimeout(function () { document.getElementById("left").style.color = 'white'; }, 1000);

   }
   else if (word.includes("right")){
      console.log("move right")
      playerMove(1);
      document.getElementById("right").style.color = 'red';
      setTimeout(function () { document.getElementById("right").style.color = 'white'; }, 1000);

   }
   else if (word.includes("rotate")){
      console.log("speech rotate")
      rotate();
      document.getElementById("rotate").style.color = 'red';
      setTimeout(function () { document.getElementById("rotate").style.color = 'white'; }, 1000);

   }
   else if (word.includes("down")){
      console.log("droppppppppppp")
      down();
      document.getElementById("down").style.color = 'red';
      setTimeout(function () { document.getElementById("down").style.color = 'white'; }, 1000);

   }
   else if (word.includes("drop")){
      console.log("hit rock bottom")
      drop();
      document.getElementById("drop").style.color = 'red';
      setTimeout(function () { document.getElementById("drop").style.color = 'white'; }, 1000);
   }

   else if (word.includes("spaghetti")){
      location.replace("https://www.youtube.com/watch?v=2K0qWRXtDYg");
   }



   else {
      if (["red", "blue", "orange", "yellow", "green", "white"].includes(`${word}`)) {
         document.getElementById("currentWord").style.color = word;
      }
      document.getElementById("currentWord").innerHTML = `${word}`;

   }
   

   
}




document.addEventListener('keydown', event => {
   switch (event.keyCode) {
      case 37:
         playerMove(-1);
         break;
      case 39:
         playerMove(1);
         break;
      case 38:
         // console.log("rotate")
         rotate();
         break;
      case 40:
         down();
         break;
      // console.log("bananas")
      case 32: 
         drop();
         break;
   }
});


createPiece();
update();

