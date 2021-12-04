function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber == 0) {
    return "Rock";
  }
  else if (randomNumber == 1){
    return "Paper";
  }
  else {
    return "Scissors"
  }
  
  }

function humanPlay() {
  let action = prompt("Please enter: Rock, Paper or Scissors")
  action.toLowerCase();
  if (action == rock || paper || scissors){
    return action;
    
  }
  else {
      humanPlay();
  }

}

humanPlay();