const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
const uppercase = () => String.fromCharCode(randomNumber(65, 91));
const lowercase = () => String.fromCharCode(randomNumber(97, 123));
const number = () => String.fromCharCode(randomNumber(48, 57));
const symbols = "!@#$%^&*(){}[]=<>/,.";
const randomSymbol = () => symbols.charAt(randomNumber(0, symbols.length));
