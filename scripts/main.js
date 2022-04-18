function GameBoard() {
  this.gameBoard = ["", "", "", "", "", "", "", "", ""];
}

function PlayerOne() {
  this.playerOne = "X";
  this.name;
}
function PlayerTwo() {
  this.playerTwo = "O";
  this.name;
}

let carry = "";
function gameFlow() {
  if (carry == p2.playerTwo) {
    return (carry = p1.playerOne);
  } else {
    return (carry = p2.playerTwo);
  }
}
let pl1= document.getElementById('p1')
let pl2= document.getElementById('p2')
const oneVsOne=document.getElementsByClassName('one-vs-one')
const startGame= document.getElementById('start-game')
const game= document.getElementsByClassName('game')
const cell = [...document.querySelectorAll("div")];
let res = document.getElementById("result");
let playerTurn = document.getElementById("player-turn");
const playAgain=document.getElementById("play-again");
const restart=document.getElementById("restart");
const announce=document.getElementsByClassName('result');
let cells = new GameBoard();
let p1 = new PlayerOne();
let p2 = new PlayerTwo();

startGame.addEventListener('click',(e)=>{
  e.preventDefault();
 p1.name=pl1.value;
 p2.name=pl2.value;
 playerTurn.innerText = `player ${p1.name}'s turn`;
  if(p1.name=== "" || p2.name=== ""){
    return 
  }
  else{
oneVsOne[0].classList.add('d-none');
game[0].classList.remove('d-none');

  }
})
    


function render() {
  cell.forEach((c) => {
    c.addEventListener("click", () => {
      gameFlow();
    
      if (c.innerText == carry || c.innerText != "") {
         playerTurn.innerText = `play in empty tile`;
         return gameFlow();
      } 
      else if (carry == p1.playerOne) {
        c.innerText = p2.playerTwo;
        c.classList.add('o-color');
        playerTurn.innerText = `${p1.name} turn`;
        cells.gameBoard[cell.indexOf(c)] = c.innerText;
        
      }
       else {
        c.innerText = p1.playerOne;
        c.classList.add('x-color');
        playerTurn.innerText = ` ${p2.name} turn`;
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
        res.innerText = `CONGRATULATIONS ${p1.name} you won`;
        game[0].classList.add('d-none');
        announce[0].classList.remove('d-none');
        playerTurn.innerText = "";
       break;
      } else {
        res.innerText = `CONGRATULATIONS ${p2.name} you won`;
        game[0].classList.add('d-none');
        announce[0].classList.remove('d-none');
        playerTurn.innerText = "";
        break;
      }
 
    }
else if(!cells.gameBoard.includes('')){
res.innerText=" no one won TIE";
playerTurn.innerText = "";
game[0].classList.add('d-none');
announce[0].classList.remove('d-none');
}
 }

}
restart.addEventListener('click',()=>{
  cell.forEach((c)=>{

      c.innerText="";
      cells.gameBoard=["", "", "", "", "", "", "", "", ""]
      carry="";
      c.classList.remove('o-color')
      playerTurn.innerText = `${p1.name} turn`;
     
  })
  
  })

playAgain.addEventListener('click',()=>{
    cell.forEach((c)=>{

        c.innerText="";
        cells.gameBoard=["", "", "", "", "", "", "", "", ""]
        carry="";
        c.classList.remove('o-color')
        playerTurn.innerText = `${p1.name} turn`
        res.innerText="";
        oneVsOne[0].classList.remove('d-none');
        game[0].classList.add('d-none');
        announce[0].classList.add('d-none');
    })
    
    })





render();

