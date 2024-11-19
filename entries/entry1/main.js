/*pulling the current height of textContainer so the randomizer doesn't
go out of bounds of*/
var textContainer = document.getElementById("textContainer");
/*var needs to be used if you're storing a valueee*/
/*setting tch (textContainer Height) to the numerical heighttt*/
var tch = textContainer.offsetHeight;

var tcw = textContainer.offsetWidth;

/*pulling element width now too!!!*/


/*testing purposes only*/
/*console.log(tch); */

/*"let" should only be used when you're assigning shorthand names btw */
let button = document.querySelector("button");
let tra = document.querySelector(".textRowA");
let trb = document.querySelector(".textRowB");
let trc = document.querySelector(".textRowC");
let trd = document.querySelector(".textRowD");
let tre = document.querySelector(".textRowE");
let trf = document.querySelector(".textRowF");
let trg = document.querySelector(".textRowG");
let trh = document.querySelector(".textRowH");
button.addEventListener("click",changeA);
function changeA()
{
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    tra.style.top = a+"px";
    tra.style.left = b+"px";
    /*you can probably just order it so the initial variable is shuffled
    everytime before the randomizer executes... but i've already written all
    of this and i'm too lazy to take it outtt!
    ^^^haha loser you ended up having to do it anyways! el oh el*/
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trb.style.top = a+"px";
    trb.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trc.style.top = a+"px";
    trc.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trd.style.top = a+"px";
    trd.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    tre.style.top = a+"px";
    tre.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trf.style.top = a+"px";
    trf.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trg.style.top = a+"px";
    trg.style.left = b+"px";
    var a = Math.floor(Math.random()*tch)-5;
    var b = Math.floor(Math.random()*tcw)-100;
    trh.style.top = a+"px";
    trh.style.left = b+"px";
}
