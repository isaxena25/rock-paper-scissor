const choice = document.querySelectorAll(".img");
let turnyou = true;
let pscore = 0;
let cscore = 0;
const button = document.getElementById("win");
let player = document.getElementById("yscore");
let comp = document.getElementById("cscore");
const cchoice = () => {
  const operations = ["rock", "paper", "scissors"];
  const indx = Math.floor(Math.random() * 3);
  return operations[indx];
};
const showwinner = (pwin) => {
  if (pwin) {
    console.log("you win");
    button.innerText = "You win!!";
  } else {
    console.log("comp wins");
    button.innerText = "Computer Wins!!";
  }
};

const playgame = (pchoice) => {
  const compchoice = cchoice();
  let pwin = true;
  if (pchoice == compchoice) {
    button.innerText = "It Is a Tie";
    console.log("tie");
    //tie
  } else if (pchoice == "rock" && compchoice == "scissors") {
    //player wins
    pscore++;
  } else if (pchoice == "rock") {
    //comp wins
    cscore++;
    pwin = false;
  } else if (pchoice == "paper" && compchoice == "rock") {
    //player wins
    pscore++;
  } else if (pchoice == "paper") {
    //comp wins
    cscore++;
    pwin = false;
  } else if (pchoice == "scissors" && compchoice == "paper") {
    //player wins
    pscore++;
  } else {
    //comp wins
    cscore++;
    pwin = false;
  }
  player.innerText = pscore;
  comp.innerText = cscore;
  showwinner(pwin);
};

choice.forEach((img) => {
  img.addEventListener("click", () => {
    const pchoice = img.getAttribute("id");
    playgame(pchoice);
  });
});
