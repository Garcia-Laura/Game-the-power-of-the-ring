"use stric";
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");
const points = document.querySelector(".js-points");
const reset = document.querySelector(".js-btn-reset");
let strength = "";
let countUser = 0;
let countComputer = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function badRace() {
  debugger;
  const race = getRandomNumber(5);

  if (race === 1) {
    strength = 2;
  } else if (race === 2) {
    strength = 2;
  } else if (race === 3) {
    strength = 2;
  } else if (race === 4) {
    strength = 3;
  } else if (race === 5) {
    strength = 4;
  }
  console.log("strength");
}

const war = () => {
  const selectValue = select.value;

  if (selectValue === strength) {
    result.innerHTML = "Empate";
    console.log(strength);
  } else if (selectValue < strength) {
    result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
    countComputer++;
  } else {
    result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
    countUser++;
  }
};

function paintHTML(countUser, countComputer) {
  points.innerHTML = `<li>Usuario: ${countUser} - máquina: ${countComputer} </li>`;
}

function handleClickWar(ev) {
  ev.preventDefault();
  badRace();
  war();
  paintHTML(countUser, countComputer);
}
function gameOver() {
  if (count === 10) {
  }
}

btn.addEventListener("click", handleClickWar);
