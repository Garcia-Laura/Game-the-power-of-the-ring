"use stric";
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");
const points = document.querySelector(".js-points");
const reset = document.querySelector(".js-btn-reset");


let countUser = 0;
let countComputer = 0;
let movesCount = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function badRace() {

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

  return strength;
}


function paintResult(value) {
  result.innerHTML = value;
}
const war = (strength) => {

  const selectValue = select.value;


 if (selectValue === "default"){
  paintResult("Elige una raza");

 }
  else if (selectValue > strength) {
    paintResult("Ha ganado el Ejército del Bien! Enhorabuena.");
    countUser++;
  } else if (selectValue < strength) {
    paintResult("Ha ganado el Ejército del Mal! Vuelve a Intentarlo.");
    countComputer++;
  } else {
    paintResult("Empate.");
  }
};

function paintHTML(countUser, countComputer) {
  points.innerHTML = `<li>Usuario: ${countUser} - máquina: ${countComputer} </li>`;
}

function handleClickWar(ev) {
  ev.preventDefault();
  badRace();
  war(strength);
  paintHTML(countUser, countComputer);
  gameOver();
}
function gameOver() {

   movesCount++;   //movesCount = movesCount +1; 
    console.log(movesCount);
    if (movesCount === 10) {
        //oculte el botón de batalla
        //Muestre del reiniciar juego 
        btn.classList.add("hidden");
        reset.classList.remove("hidden");

        //Muestro quien ha ganado el juego completo
        if (countUser > countComputer) {
            result.innerHTML = " ¡Enhorabuena! Has ganado el juego!";
        } else if (countUser < countComputer) {
            result.innerHTML = " Game Over. ¡El ordenador ha ganado el juego!";
        } else {
            result.innerHTML = "¡Empate!"
        }

    }
}

function handleReset(event) {
  event.preventDefault();
  btn.classList.remove("hidden");
  reset.classList.add("hidden");
  // select = "default";
  HTMLFormElement.reset(select)
  countUser = 0;
  countComputer = 0;
  movesCount = 0;
  result.innerHTML = "Comienza la batalla";
}


//Bonus
/* Calcular puntos de la usuaria y del ordenador (contador user, contador PC)
-  Contar los 10 movimientos: contador moves
-  Ocultar botón y mostrar otro: classlist
-  Reiniciar el juego
-  Mostrar quien ha ganado todo 
*/


btn.addEventListener("click", handleClickWar);
reset.addEventListener("click", handleReset);
