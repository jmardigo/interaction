
let button = document.querySelector(".button");
let cA = document.querySelectorAll(".cA")
let cB = document.querySelectorAll(".cB")
let cC = document.querySelectorAll(".cC")
let cD = document.querySelectorAll(".cD")
let colors = ["#FFF7D1", "#FFECC8", "#FFD09B", "#FFB0B0"];
let body = document.querySelector("body");

//#FFF7D1 is the lightest shade btw
//#FFB0B0 is the darkest shade

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;

//checking the background color and then setting the respective classes to the appropriate color

cA.forEach(span => span.style.color = (randColor === "#FFB0B0") ? "#FFF7D1" : "transparent");
//use forEach to check EVERY instance of the class, or else it'll only check the first occurence of it :(
//have to use triple "===" because it's checking for equality. if you only use one then it's trying to SET the property instead of comparing it
//a "?" is shorthand for "if else." i'm writing a common word translation for future reference
//cA.forEach(span => span.style.color = (randColor === "red") ? "black" : "transparent"); 
//means... "for every instance of the ".cA" class, the color of the span will change. in the event that "randColor" is red, then set the color to black. 
//if it's not red, then set the color to transparent.
//applying to the span, which is why it's span =>. if it was a div, you would do div =>
  cB.forEach(span => span.style.color = (randColor === "#FFD09B") ? "#FFF7D1" : "transparent");
  cC.forEach(span => span.style.color = (randColor === "#FFECC8") ? "#FFB0B0" : "transparent");
  cD.forEach(span => span.style.color = (randColor === "#FFF7D1") ? "#FFB0B0" : "transparent");
}

button.addEventListener("click", newColor);




