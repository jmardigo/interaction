/*temp*/
console.log("hello!");



let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  buttonDotPink.classList.toggle("buttonDotGreen");
  textOne.classList.toggle("textOneOff");
  textTwo.classList.toggle("textTwoOff");

}

let button = document.querySelector(".button");
let buttonDotPink = document.querySelector(".buttonDotPink");
let textOne = document.querySelector(".textOne");
let textTwo = document.querySelector(".textTwo");

button.addEventListener("click", turnOnLight);
