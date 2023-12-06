// rock.js
import { playNow } from "./main.js";

// Selectors
const gameSection = document.getElementById("game-section");
const selectGame = document.getElementById("select-game");

// Helper functions
const beginGame = () => {
  console.log("begin rock game");
};

const goBackButton = () => {
  gameSection.innerHTML = "";
  playNow(); // Reinitialize the game selection screen

  selectGame.style.display = "flex";
};

// Main functions
export const startRock = () => {
  selectGame.style.display = "none";
  console.log("starting start rock");
  const gameTitle = document.createElement("div");
  gameTitle.innerText = "Rock Paper Scissors";
  gameSection.appendChild(gameTitle);

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button-container");
  gameSection.appendChild(buttonContainer);

  const letsPlay = document.createElement("button");
  letsPlay.innerText = "Let's Play";
  buttonContainer.appendChild(letsPlay);

  const goBack = document.createElement("button");
  goBack.innerText = "Go Back";
  buttonContainer.appendChild(goBack);

  letsPlay.addEventListener("click", beginGame);
  goBack.addEventListener("click", goBackButton);
};
