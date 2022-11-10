// 1. Define Objects/Classes
//     1. Battleship Alita
//     2. shipAlien1
// 2. Randomize attacks using RNG
// 3. Accept User Prompts
//     1. Attack
//     2. Retreat
// 4. Battle Start/Stop
//     1. Battleship Alita attacks
//     2. shipAlien1 hit/miss
//         1. Hit message
//         2. Miss message
// 5. End Battle Prompt
// 6. Define additional alien ships
// 7. Battle Start/Prompt

//const cellElements = document.querySelectorAll('[data-cell]')
// const boardElement = document.getElementById('board')
// const winningMessageElement = document.getElementById('winningMessage')
// const startButton = document.getElementById('startButton')
// const attackButton = document.getElementById('attackButton')
// const retreatButton = document.getElementById('retreatButton')
// const losingMessageElement = document.getElementById('losing')

// //table
// class AlienShip {
//     constructor (name, hull, firepower, accuracy) {
//         this.name = name,
//         this.hull = Math.floor(Math.random() * 4) +3,
//         this.firepower = Math.floor(Math.random() * 3) +2,
//         this.accuracy = Math.floor((Math.random() * 3) +6 )/10
//         }
//     }
// let alienArray = [];
// for(let i=0;i<6;i++)
// {
//     let alienShips = new AlienShip;
//     alienArray.push(alienShips);
// };

// Define Objects/ Classes
let battleshipAlita =  {
	name: "Alita",
	hull: 20,
	firepower: 5,
	accuracy: 0.7,
  isAlive: true,
}

class shipAlien { 
	constructor(name, hull, firepower, accuracy, isAlive) {
	this.name = name,
	this.hull = hull,
	this.firepower = firepower,
	this.accuracy = accuracy,
  this.isAlive = isAlive
  }
}

//Create an array for remaining aliens (6)
let alienArray = [];
const ship = () => {
for (let i=0; i<=6; i++)
{
  let name = `Alien ${i}`
  let hull = Math.floor(Math.random()*4) +3
	let firepower = Math.floor(Math.random()*3) +2
	let accuracy = Math.floor((Math.random()*3) +6)/10
  let isAlive = true
  let shipAliens = new shipAlien(name, hull, firepower, accuracy, isAlive)
  console.log(shipAliens)
  alienArray.push(shipAliens)
};
}

ship();

// //Attacks
// function attack () {
// let attackHit = Math.random();
// If (attackHit < alien[0].accuracy) {
// 	return true;
// 	console.log(‘You have been hit!);
// } else {
// 	return false;
// }
// };
// }

// //Let the Games Begin
let gameStart = prompt("Let the game begin! You are given two choices. If you choose to (R)etreat, the game ends now and you forfeit the ship. If you choose to (A)ttack, you may remain undefeated to roam the universe. What will you choose?")
          if(gameStart === "a" || gameStart === "attack" || gameStart === "A" || gameStart === "Attack") {
            gameAttack(battleshipAlita,shipAlien)
          } else if (gameStart === "r" || gameStart === "retreat" || gameStart === "R" || gameStart === "Retreat") {
            alert("You quit!! Game over!!");
          };

 gameAttack(battleshipAlita,shipAlien);

 while (battleshipAlita.isAlive = true) {
  if (battleshipAlita.hull > 0) {
    console.log(`Your ship's Hull is currently at ${}.`)
  }
  if (alienShip )
  if (attack === true) {
    console.log("successful hit")
  } else {
    console.log("Oops! You missed! Try again.")
  }
 }

          
        //   attack(target) {
        //     let ranNum = Math.random();
        //     //alert(`Accuracy threshold is ${ranNum}`);
        //     if (ranNum < this.accuracy) {
        //       //target defeted!
        //         alert(target.name + ` been direct hit!`);
        //         //console.log(target)
        //         target.hull = target.hull - this.firepower;
        //         alert(target.name + ` has ${target.hull} hull points left.`);
        //         if (target.hull <= 0) {
        //             target.isAlive = false;
        //             alert(target.name + ` died!`);
        //         }
        //     } else {
        //       //target escaped
        //       alert(this.name + ` missed the target ${target.name}!`);
        //     }
      
        // }
      
//gameBegin ()      


// startButton.addEventListener('click', startGame)

// function startGame() {
//     isShipAlien1Turn = false

// }

// // let gameBegin = document.getElementById("game-begin");

// // function startGame() {
// //     console.log("Let the game begin!");
// //     alert("Flying through the universe, you are approached by six enemy ships.")
// //     let choiceAttOrRet = prompt("You are given two choices. If you choose to (R)etreat, the game ends now and you forfeit the ship. If you choose to (A)ttack, you may remain undefeated to roam the rest of the universe. What will you choose?")
// // }

// // gameBegin.addEventListener("click", startGame);

// //Attack

// //Retreat
// function retreatGame()

// //Let the Games End

// //If Alita wins the game
// function endGame() {
//     if (hull > 0 && this.hull < 0) {
//         winningMessageTextElement.innerText = "You won!"
//     } else {
//         winningMessageTextElement.innerText = "You lose! Would you care to try again?"
//     }
//     winningMessageTextElement.classList.add('show')
// }

// //If Aliens win the game
// function endGameDraw() {
//     if (hull <= 0 && this.hull < 0) {
//         winningM
//     }
// }