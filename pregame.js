const createGame = document.querySelector(".header");
const joinGame = document.querySelector(".card");
const leaveGame = document.querySelector(".leaveGame");
const nickname = document.querySelector("#name");
const players = document.querySelector(".players");

//if clicks on joingame without filling a form - popup you must set a nickname

let startGame = () => {
  joinGame.addEventListener("click", () => {
    location.href = "table.html";
  });
};

startGame();
