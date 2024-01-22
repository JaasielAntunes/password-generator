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

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  if (!lettersInput.checked && !numbersInput.checked && !symbolsInput.checked) {
    alert("Selecione pelo menos uma opção para gerar a senha!");
    return;
  }

  let password = "";

  const passwordLength = +lengthInput.value;

  const generators = [
    lettersInput.checked && getLetterLowerCase,
    lettersInput.checked && getLetterUpperCase,
    numbersInput.checked && getNumber,
    symbolsInput.checked && getSymbol,
  ].filter(Boolean);
  if (generators.length === 0) {
    return;
  }

  const generatorsLength = generators.length;

  if (passwordLength < 7 || passwordLength > 15) {
    alert("A quantidade deve ser entre 7 e 15 caracteres!");
    return;
  }

  for (i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * generatorsLength);
    const randomValue = generators[randomIndex]();
    password += randomValue;
  }

  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h3").innerText = password;
};

lengthInput.addEventListener("input", () => {
  let inputValue = lengthInput.value;
  inputValue = inputValue.replace(/\D/g, "");
  
  lengthInput.value = inputValue;
});

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});