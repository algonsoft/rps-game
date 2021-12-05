let computerAction, action;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber == 0) {
    computerAction = "rock";
    return computerAction;
  }
  else if (randomNumber == 1){
    computerAction = "paper";
    return computerAction;
  }
  else {
    computerAction = "scissors";
    return computerAction;
  }
  
  }



function humanPlay(){
  action = prompt("Please enter: Rock, Paper or Scissors");
  action = action.toLowerCase();
  
  
  if(action == "rock" || action == "paper" || action == "scissors"){
    console.log(action);
    return action;

  } 
  else {
    humanPlay();
  }
}

function rockPaperScissors(action, computerAction){
  action = humanPlay();
  computerAction = computerPlay();
  if (action == computerAction){
    alert("You have selected " + action + " and the computer has selected " + computerAction + " it is a draw" + " Computer: " + computerScore + " Player: " + playerScore)
  }
  else if (action == "rock" && computerAction == "scissors"){
    playerScore ++;
    alert("You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore);    
  }
  else if (action == "paper" && computerAction == "rock"){
    playerScore++;
    alert("You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore);    
  }
  else if (action == "scissors" && computerAction == "paper"){
    playerScore++;
    alert("You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore);   
  }
  else{
    computerScore++;
    alert("You have selected " + action + " and the computer has selected " + computerAction + " you lose!" + " Computer: " + computerScore + " Player: " + playerScore);  
  }
}

function Game(){
  console.log(playerScore, computerScore);
  while(playerScore < 5 && computerScore < 5){
    rockPaperScissors();
  }
  if(playerScore == 5){
    alert("The player has " + playerScore + " wins to the computers " + computerScore + " the player wins!");
  }
  else if(computerScore == 5){
    alert("The computer has " + computerScore + " wins to the players " + playerScore + " The computer wins!");
  }

}

Game();