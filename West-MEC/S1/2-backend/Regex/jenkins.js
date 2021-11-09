const fs = require("fs");
const input = fs.readFileSync("./jenkinsWork.txt", "utf8");
const str = input;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ichi = /@[a-zA-Z]{1,}/g;

let city = str.match(ichi);
let cities = "";

for (let i = 0; i < city.length; i++) {
  cities += city[i].split("@").join("");
}
console.log(cities);

const ichiAnswer = /[a-zA-Z]{18}/g;

console.log(cities.match(ichiAnswer));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ni = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(°)/g;
const ni2 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(')/g;
const ni3 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\.)/g;
const ni4 = /(\d)[a-zA-Z]{3,}(")[a-z]{1,}([A-Z])/g;

let pi = ni.exec(str);
let sinQuote = ni2.exec(str);
let dot = ni3.exec(str);
let doubQuote = ni4.exec(str);

let piAnswer = [];
let sinQuoteAnswer = [];
let dotAnswer = [];
let doubQuoteAnswer = [];

let latitude = [];
let longitude = [];

while (pi) {
  if (pi[1] + pi[2] + pi[3] > 0 && pi[1] + pi[2] + pi[3] < 256) {
    piAnswer += `${pi[1] + pi[2] + pi[3] + pi[4]} `;
  }

  pi = ni.exec(str);
}

//~~~~~~~~~~~~~~~~~

while (sinQuote) {
  if (sinQuote[1] + sinQuote[2] > 0 && sinQuote[1] + sinQuote[2] < 64) {
    sinQuoteAnswer += `${sinQuote[1] + sinQuote[2] + sinQuote[3]} `;
  }

  sinQuote = ni2.exec(str);
}

//~~~~~~~~~~~~~~~~~~~~~~~~

while (dot) {
  if (dot[1] + dot[2] > 0 && dot[1] + dot[2] < 63) {
    dotAnswer += `${dot[1] + dot[2] + dot[3]} `;
  }

  dot = ni3.exec(str);
}

//~~~~~~~~~~~~~~~~~~~~

while (doubQuote) {
  if (doubQuote[1] > 0 && doubQuote[1] < 8) {
    doubQuoteAnswer += `${doubQuote[1] + doubQuote[2] + doubQuote[3]} `;
  }

  doubQuote = ni4.exec(str);
}

for (let i = 0; i < 1; i++) {
  latitude.push(
    piAnswer[0] +
      piAnswer[1] +
      piAnswer[2] +
      piAnswer[3] +
      sinQuoteAnswer[0] +
      sinQuoteAnswer[1] +
      sinQuoteAnswer[2] +
      dotAnswer[0] +
      dotAnswer[1] +
      dotAnswer[2] +
      doubQuoteAnswer[0] +
      doubQuoteAnswer[1] +
      doubQuoteAnswer[2]
  );

  longitude.push(
    piAnswer[5] +
      piAnswer[6] +
      piAnswer[7] +
      piAnswer[8] +
      sinQuoteAnswer[4] +
      sinQuoteAnswer[5] +
      sinQuoteAnswer[6] +
      dotAnswer[4] +
      dotAnswer[5] +
      dotAnswer[6] +
      doubQuoteAnswer[4] +
      doubQuoteAnswer[5] +
      doubQuoteAnswer[6]
  );
}

console.log(`${latitude}, ${longitude}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const san = /(\[\w+\.? | \w+\.?\])/g;

//There is a more efficient way of doing this by just putting the pull into the parenthesis
//I guess its only more efficient if you end up using it only one

const letter = /[a-zA-Z]\.?/g

// console.log(str.match(san));

let word = str.match(san);
let wordAnswer = []

for (let i = 0; i < word.length; i++) {
  if (word[i].match(letter) != null){
    wordAnswer += `${word[i].match(letter).join("")} `
  }
}

console.log(wordAnswer);
