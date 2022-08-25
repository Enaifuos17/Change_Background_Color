// create the main list
// hexCode => #001122 => a,b,c,d,e,f,0,...,9
let hexArrays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorsParts = [];
// new array bash njm3u fiha colorCode dylna
console.log(hexArrays[Math.floor(Math.random() * hexArrays.length)]);
// this expression kat3tiina a random item from the hexArrays list

// for
for (let x = 0; x < 6; x++) {
  colorsParts.push(hexArrays[Math.floor(Math.random() * hexArrays.length)]);
}
console.log(colorsParts);
console.log(`#${colorsParts.join("")}`);

let finalColor = `#${colorsParts.join("")}`;

// now we will call the HTML stuff

document.body.style.background = finalColor;

//
let mySpan = document.getElementById("span-hexcode");

mySpan.innerHTML = finalColor;

//
let myBttn = document.querySelector("button");

function refresh() {
  location.reload();
}

myBttn.addEventListener("click", refresh);
