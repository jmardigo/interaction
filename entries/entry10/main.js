/*temp*/
console.log("hello!")



let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  buttonDotPink.classList.toggle("buttonDotGreen");

}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);