// connect.js

//selectors

const gameSection = document.getElementById("game-section");
const selectGame = document.getElementById("select-game");
// helper functions

// main functions
export const startConnect = () => {
  console.log("starting start connect");
  const gameTitle = document.createElement("div");
  const letsPlay = document.createElement("button");
  const goBack = document.createElement("button");
  gameTitle.innerText = "Connect Four";
  letsPlay.innerText = "Let's Play";
  goBack.innerText = "Go Back";
  gameSection.append(gameTitle, letsPlay, goBack);
};
