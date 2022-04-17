function GameBoard() {
  this.gameBoard = ["", "", "", "", "", "", "", "", ""];
}

function PlayerOne() {
  this.playerOne = "X";
}
function PlayerTwo() {
  this.playerTwo = "O";
}

let carry = "";
function gameFlow() {
  if (carry == p2.playerTwo) {
    return (carry = p1.playerOne);
  } else {
    return (carry = p2.playerTwo);
  }
}

const cell = [...document.querySelectorAll("div")];
let res = document.getElementById("result");
let playerTurn = document.getElementById("player-turn");
const restart=document.getElementById("restart")
let cells = new GameBoard();
let p1 = new PlayerOne();
let p2 = new PlayerTwo();


    


function render() {
  cell.forEach((c) => {
    c.addEventListener("click", () => {
      gameFlow();
      playerTurn.innerText = `player ${carry}'s turn`;
      if (c.innerText == carry) {
         playerTurn.innerText = `play in empty tile`;
         carry=`${c.innerText}`;
         return gameFlow();
      } 
      else if (carry == p1.playerOne) {
        c.innerText = p2.playerTwo;
        c.classList.add('o-color');
        cells.gameBoard[cell.indexOf(c)] = c.innerText;
        
      }
       else {
        c.innerText = p1.playerOne;
        c.classList.add('x-color');
        cells.gameBoard[cell.indexOf(c)] = c.innerText;
      
      }
      
      result();
    
    });
  
  });
}

function result() {
  let winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < winingConditions.length; i++) {
    winCondition = winingConditions[i];
    let a = cells.gameBoard[winCondition[0]];
    let b = cells.gameBoard[winCondition[1]];
    let c = cells.gameBoard[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    } 
    else if (a === b && b === c) {
      if (a == "X") {
        res.innerText = "player X's won";
        playerTurn.innerText = "";
       break;
      } else {
        res.innerText = "player O's won";
        playerTurn.innerText = "";
        break;
      }
 
    }
else if(!cells.gameBoard.includes('')){
res.innerText=" no one won TIE";
playerTurn.innerText = "";

}
 }

}

restart.addEventListener('click',()=>{
    cell.forEach((c)=>{

        c.innerText="";
        cells.gameBoard=["", "", "", "", "", "", "", "", ""]
        carry="";
        c.classList.remove('o-color')
        playerTurn.innerText = `player X's turn`
        res.innerText="";

    })
    
    })




render();

