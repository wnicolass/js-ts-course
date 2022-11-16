import shuffleArray from "./shuffle";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
const generateUppercase = () => String.fromCharCode(randomNumber(65, 91));
const generateLowercase = () => String.fromCharCode(randomNumber(97, 123));
const generateNumber = () => String.fromCharCode(randomNumber(48, 57));
const symbols = "!@#$%^&*(){}[]=<>/,.";
const generateRandomSymbol = () =>
  symbols.charAt(randomNumber(0, symbols.length));

export default function generatePassword(
  length,
  upper,
  lower,
  numbers,
  symbols
) {
  const passwordArray = [];
  length = +length;

  for (let i = 0; i < length; i++) {
    upper && passwordArray.push(generateUppercase());
    lower && passwordArray.push(generateLowercase());
    numbers && passwordArray.push(generateNumber());
    symbols && passwordArray.push(generateRandomSymbol());
  }

  shuffleArray(passwordArray);

  return passwordArray.join("").slice(0, length);
}
