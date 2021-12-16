let computerAction;
let passer;
let playerScore = 0;
let computerScore = 0;
let flag = 1;
let remove = false;


function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
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
  







  function myClickHandler(){
    const buttons = document.querySelectorAll(`button`);
 
  if( flag==1){
  
  buttons.forEach((button) => {
      button.addEventListener(`click`, () => {
      action = (button.id);
      passer = (button.id);
      console.log(action);
      console.log(flag);
      Game();
      });
    });
  }
  else {
    document.querySelectorAll(`button`).removeEventListener(`click`, myClickHandler);

  }
}
  

    
    
     
      
      
    
      
    
  



    
  








function rockPaperScissors(action, computerAction){
  const results = document.querySelector('#results');
  computerAction = computerPlay();
  action = passer;
  console.log(action);
  if (action == computerAction){
    const content = document.createElement(`div`)
    content.textContent = "You have selected " + action + " and the computer has selected " + computerAction + " it is a draw" + " Computer: " + computerScore + " Player: " + playerScore;
    results.appendChild(content);
   
  }
  else if (action == "rock" && computerAction == "scissors"){
    playerScore ++;
    const content = document.createElement(`div`)
    content.textContent = "You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore;
    results.appendChild(content);
  }
  else if (action == "paper" && computerAction == "rock"){
    playerScore++;
    const content = document.createElement(`div`)
    content.textContent = "You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore;
    results.appendChild(content);  
  }
  else if (action == "scissors" && computerAction == "paper"){
    playerScore++;
    const content = document.createElement(`div`)
    content.textContent = "You have selected " + action + " and the computer has selected " + computerAction + " you win!" + " Computer: " + computerScore + " Player: " + playerScore;  
    results.appendChild(content);
  }
  else{
    computerScore++;
    const content = document.createElement(`div`)
    content.textContent = "You have selected " + action + " and the computer has selected " + computerAction + " you lose!" + " Computer: " + computerScore + " Player: " + playerScore;
    results.appendChild(content);
  }
}

function Game(action, button, Click){
  action = passer;
  console.log(action);
  console.log(playerScore, computerScore);
  rockPaperScissors();
  
  if(playerScore == 5){
    const content = document.createElement(`div`);
    content.textContent = "The player has " + playerScore + " wins to the computers " + computerScore + " the player wins!";
    results.appendChild(content);
    var button = document.getElementById("rock");
    button.remove();
    var button = document.getElementById("paper");
    button.remove();
    var button = document.getElementById("scissors");
    button.remove();

    






}

  else if(computerScore == 5){
    const content = document.createElement(`div`)
    content.textContent = "The computer has " + computerScore + " wins to the players " + playerScore + " The computer wins!";
    results.appendChild(content);
    var button = document.getElementById("rock");
    button.remove();
    var button = document.getElementById("paper");
    button.remove();
    var button = document.getElementById("scissors");
    button.remove();

    
  }

}

myClickHandler();