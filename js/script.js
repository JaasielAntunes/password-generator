const generatedPasswordElement = document.querySelector(".generated-password");
const generatePasswordButton = document.querySelector(".generate-password");

const lengthInput = document.querySelector(".length");
const lettersInput = document.querySelector(".letters");
const numbersInput = document.querySelector(".numbers");
const symbolsInput = document.querySelector(".symbols");
const copyPasswordButton = document.querySelector(".copy-password");

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/,#!@.$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};