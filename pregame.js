export const firstPage = document.querySelector(".firstPage");
const makeRoom = document.querySelector(".playColors");
const nickname = document.querySelector("#nickname");
export const player1 = document.querySelector("#player1");
const form = document.querySelector("#form");
export const body2 = document.querySelector(".body");

nickname.focus();
body2.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  player1.innerHTML = nickname.value;
  //if clicks on makeRoom without filling a form - popup you must set a nickname
});

makeRoom.addEventListener("click", () => {
  if (nickname.value !== "") {
    firstPage.style.display = "none";
    //popup for what kind of game first player wants

    //display body2 when confirming the type of game
    body2.style.display = "flex";
  } else {
    alert("Set Nickname");
  }
});
