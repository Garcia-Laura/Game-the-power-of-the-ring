"use stric";
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const war = () => {
  const number = getRandomNumber(5);
  //   if (selectValue === number) {
  //     result.innerHTML = "Empate";
  //   } else if (selectValue < number) {
  //     result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
  //   } else {
  //     result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
  //   }

  console.log(number);
  const selectValue = select.value;
  if (selectValue === number) {
    result.innerHTML = "Empate";
  } else if (selectValue < number) {
    result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
  } else {
    result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
  }
};

function handleClickWar(ev) {
  ev.preventDefault();
  console.log("comienza la guerra");
  war();
}

btn.addEventListener("click", handleClickWar);
