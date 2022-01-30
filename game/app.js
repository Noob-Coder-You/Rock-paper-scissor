const btns = document.querySelectorAll("[option]");
const pcChoiceImg = document.querySelector(".pc button img ");
const pcChoiceText = document.querySelector(".pc button h2 ");
const winner = document.querySelector(".winner");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanClick = btn.dataset.game;
    game(humanClick);
  });
});

function game(humanValue) {
  let random = Math.random();
  if (random < 0.33) {
    pcChance("Rock", humanValue);
    showPcResult("Rock");
  } else if (random < 0.66) {
    pcChance("Paper", humanValue);
    showPcResult("Paper");
  } else if (random < 0.99) {
    pcChance("Scissor", humanValue);
    showPcResult("Scissor");
  }
}

function pcChance(pcValue, humanValue) {
  if (pcValue === humanValue) {
    displayResult("Game Tied");
  } else if (pcValue === "Rock" && humanValue === "Paper") {
    console.log(`Human ${pcValue} : ${humanValue}`);
    displayResult("You Won");
  } else if (pcValue === "Paper" && humanValue === "Rock") {
    console.log(`Pc ${pcValue} : ${humanValue}`);
    displayResult("Pc Won");
  } else if (pcValue === "Scissor" && humanValue === "Paper") {
    console.log(`Pc ${pcValue} : ${humanValue}`);
    displayResult("Pc Won");
  } else if (pcValue === "Paper" && humanValue === "Scissor") {
    console.log(`Human ${pcValue} : ${humanValue}`);
    displayResult("You Won");
  } else if (pcValue === "Rock" && humanValue === "Scissor") {
    console.log(`Pc ${pcValue} : ${humanValue}`);
    displayResult("Pc Won");
  } else if (pcValue === "Scissor" && humanValue === "Rock") {
    console.log(`Human ${pcValue} : ${humanValue}`);
    displayResult("You Won");
  }
}

function displayResult(result) {
  winner.innerText = result;
}

function showPcResult(value) {
  pcChoiceImg.setAttribute("src", `imgs/${value}.png`);
  pcChoiceText.innerText = value;
}
