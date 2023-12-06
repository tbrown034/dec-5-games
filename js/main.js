// main.js
import { startConnect } from "./connect.js";
import { startRock } from "./rock.js";
import { startTic } from "./tic.js";

// Selectors
const playNowButton = document.getElementById("play-now");
const webStuffButton = document.getElementById("web-stuff");
const gameSection = document.getElementById("game-section");
const selectGame = document.getElementById("select-game");

// Helpers
// Making playNow an exportable function so it can be imported in rock.js
export const playNow = () => {
  console.log("playing now");
  let buttonContainer = document.getElementById("button-container");

  if (!buttonContainer) {
    buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "button-container");
    selectGame.appendChild(buttonContainer);

    const introText = document.createElement("div");
    introText.innerText = "Select Your Game";
    selectGame.appendChild(introText);

    const rockButton = document.createElement("button");
    const connectButton = document.createElement("button");
    const ticButton = document.createElement("button");
    rockButton.innerText = "Rock Paper Scissors";
    connectButton.innerText = "Connect Four";
    ticButton.innerText = "Tic Tac Toe";
    buttonContainer.append(rockButton, connectButton, ticButton);
    rockButton.addEventListener("click", startRock);
    connectButton.addEventListener("click", startConnect);
    ticButton.addEventListener("click", startTic);
  }

  selectGame.style.display = "flex";
};

const webStuff = () => {
  console.log("webStuff Hey");
};

// Event listeners
playNowButton.addEventListener("click", playNow);
webStuffButton.addEventListener("click", webStuff);
