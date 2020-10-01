/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  document.body.style.background = "green";

  document.querySelector(".container-fluid").innerHTML =
    "<div class='card-container '> <div id='top' class='top-symbol text-left'>div numero 4</div> <div id='center' class='center-number'> div numero 3</div> <div id='botton' class='botton-symbol text-right'>div numero 2 </div></div>";
  cardFunction();
};
// var container = document.querySelector(".container-fluid");

///Logica del Random///
let cardFunction = () => {
  let symbol = ["&spades;", "&clubs;", "&hearts;", "&diamondsuit;"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randonmSymbol = symbol[Math.floor(Math.random() * 4)];
  let randonmNumber = number[Math.floor(Math.random() * 12)];
  document.querySelector("#top").innerHTML = randonmSymbol;
  document.querySelector("#center").innerHTML = randonmNumber;
  document.querySelector("#botton").innerHTML = randonmSymbol;
  if (randonmSymbol == "&hearts;" || randonmSymbol == "&diamondsuit;") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#botton").style.color = "red";
  }
};
