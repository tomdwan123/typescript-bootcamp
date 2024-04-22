"use strict";
// const btn = document.getElementById("btn")! as HTMLButtonElement;
// const input = document.getElementById("todo")! as HTMLInputElement;
// const form = document.querySelector("form")!;
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("SUBMITTED!");
// });
// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   console.log("SUBMITTED!");
// }
// form.addEventListener("submit", handleSubmit);
// let mystery: unknown = "Hello World!!!";
// const numChars = (mystery as string).length;

class Player {
  score = 0;
  _score = 0; // private field
  #score = 0; // only usable
  numLive = 10;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  go = function () {
    console.log("GO!!!");
  };

  loseLive() {
    this.numLive -= 1;
  }
}
var player = new Player("John", "Evan");
// console.log(player);
// player.go();
console.log(player.numLive);
player.loseLive();
console.log(player.numLive);
