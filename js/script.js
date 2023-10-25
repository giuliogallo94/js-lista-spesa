const myArray = [
  "Biscotti",
  "Latte",
  "Pasta",
  "Farina",
  "Olio",
  "Marmellata",
  "Acqua",
  "Mele",
  "Nutella",
  "Cornetti",
];

console.log(myArray);

let curElem = "";
let i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  curElem += `<li> <input type="checkbox" id="${myArray[i]}" name="${myArray[i]}" /> ${myArray[i]}</li>`;
  i++;
}

document.querySelector("ul").innerHTML = curElem;
