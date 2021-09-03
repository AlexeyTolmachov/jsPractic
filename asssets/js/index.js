"use strict";

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const university = {
  cafedra: "MB",
  fac: "ETF ",
};

const student = {
  name: "Vasya",
  lastName: "Vasevich",
  male: true,
  univer: university,
  contacts: {
    telephone: 7777777777,
    email: "google@gmai.com",
    adreass: "Ukraine",
  },
  getInfo() {
    const {
      name,
      lastName,
      male,
      contacts: { telephone, email, adreass },
      univer: { cafedra, fac },
    } = this;
    console.log(`
    name: ${name}
    lastName: ${lastName}
    male :${male}
     telephone :${telephone}, 
     email : ${email}, 
     adreass : ${adreass},
    cafedra :${cafedra}
    fac :${fac}
    `);
  },
};

const digitArr = [];
function createArr() {
  for (let i = 1; digitArr.length <= 24; i++) {
    digitArr.push(i);
  }
}
createArr();
// const arr = new Array(25).fill(null).map((_, i) => i + 1);

const eventArr = [];
function evenNumbers() {
  digitArr.map(function (index) {
    if (index % 2 === 0) {
      console.log(digitArr[index]); //event index
    }
  });
}
evenNumbers();
function eventIndex(){
  

}

class PaperBook {
  constructor(author, title, yearPublisher, publisher) {
    this.author = author;
    this.title = title;
    this.yearPublisher = yearPublisher;
    this.publisher = publisher;
  }
}
class DigitBook {
  constructor(author, title, yearPublisher, publisher, format, digitalNumber) {
    this.author = author;
    this.title = title;
    this.yearPublisher = yearPublisher;
    this.publisher = publisher;
    this.format = format;
    this.digitalNumber = digitalNumber;
  }
}
let j = 0;
function otputDigit(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("buzz");
      continue;
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      continue;
    }
    console.log(i);
  }
}

