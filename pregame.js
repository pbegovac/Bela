let startGame = () => {
  const firstPage = document.querySelector(".firstPage");
  const makeRoom = document.querySelector(".playColors");
  const nickname = document.querySelector("#nickname");
  const player1 = document.querySelector("#player1");
  const form = document.querySelector("#form");

  const body2 = document.querySelector(".body");

  nickname.focus();
  body2.style.display = "none";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    player1.innerHTML = nickname.value;
    nickname.value = "";
  });

  //if clicks on makeRoom without filling a form - popup you must set a nickname
  makeRoom.addEventListener("click", () => {
    firstPage.style.display = "none";
    //ask for what kind of game first player wants
    body2.style.display = "flex";
  });
};

let joinGame = () => {
  const player2 = document.querySelector("#player2");
  const player3 = document.querySelector("#player3");
  const player4 = document.querySelector("#player4");
};

startGame();
joinGame();
