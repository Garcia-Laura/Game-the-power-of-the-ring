"use stric";
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickWar(ev) {
  ev.preventDefault();
  console.log("comienza la guerra");
}

btn.addEventListener("click", handleClickWar);
