/*temp*/
console.log("hello!");



let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  buttonDotPink.classList.toggle("buttonDotGreen");
  textOne.classList.toggle("textOneOff");
  textTwoOff.classList.toggle("textTwo");

}

let button = document.querySelector(".button");
let buttonDotPink = document.querySelector(".buttonDotPink");
let textOne = document.querySelector(".textOne");
let textTwoOff = document.querySelector(".textTwoOff");
button.addEventListener("click", turnOnLight);