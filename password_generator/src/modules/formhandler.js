import generatePassword from "./generator";

const generatedPassword = document.querySelector(".generated-password");
const lengthEl = document.getElementById("length");
const uppercase = document.querySelector(".check-uppercase");
const lowercase = document.querySelector(".check-lowercase");
const numbers = document.querySelector(".check-numbers");
const symbols = document.querySelector(".check-symbols");
const generateBtn = document.querySelector(".generate-password");

export default () => {
  generateBtn.addEventListener(
    "click",
    () => (generatedPassword.textContent = generate())
  );
};

function generate() {
  const password = generatePassword(
    lengthEl.value,
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked
  );

  return password || "Select length and options";
}
