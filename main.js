// var -> function
// let -> block
//const ->block

// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("extra " + i);
// }

// sayHello();

// const x = 1;
// x = 3;

// console.log(x);

// OBJECTS

// const person = {
//   name: "Ravshan",
//       walk: function () {

//       },//==
//       talk(){}
// };

// person.talk();
// person.talk['name'] = 'ABF';

// let title = document.getElementById("dog");
// let name = prompt("name:");
// let lname = prompt("lname:");
// let fname;

// function greeting() {
//   fname = name + " " + lname;
//   console.log(fname);
//   // title.innerText = fname;
//   // title.innerHTML = fname;
//   title.textContent = fname;
// }

// greeting();

// let firstNumber = document.getElementById("fNumber");
// let secondNumber = document.getElementById("sNumber");
// let amount = document.getElementById("fullName");
// let btnSubmit = document.getElementById("btn");

// let totalAmount = 0;

// function btn() {
//   totalAmount = firstNumber + secondNumber;

//   console.log(totalAmount);
// }
let sum = 0;
// let sumEl = document.getElementById("sum-el");

let numEl1 = document.getElementById("num1-el");
let numEl2 = document.getElementById("num2-el");

let sumel = document.getElementById("summa");

function summ() {
  let newLi = document.createElement("LI");

  function add() {
    sum = Number(numEl1.value) + Number(numEl2.value);
    console.log(sum);
    sumEl.innerText = sum;

  }

  function sub() {
    sum = Number(numEl1.value) - Number(numEl2.value);
    console.log(sum);
    sumEl.innerText = sum;
  }

  function div() {
    sum = Number(numEl1.value) * Number(numEl2.value);
    console.log(sum);
    sumEl.innerText = sum;
  }
  function mul() {
    sum = Number(numEl1.value) / Number(numEl2.value);
    console.log(sum);
    sumEl.innerText = sum;
  }

  sumOf.appendChild = newLi;
}
