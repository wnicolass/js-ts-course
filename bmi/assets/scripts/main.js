const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const button = document.querySelector(".btn");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => e.preventDefault());

button.addEventListener("click", () => {
  setResult(weight, height);
});

function setResult(weight, height) {
  const result = document.querySelector("#result");

  if (weight.value === "" || height.value === "") {
    result.style.backgroundColor = "crimson";
    result.innerHTML = `Please, fill all fields`;
  } else if (/^[a-z]+$/.test(weight.value) || /^[a-z]+$/.test(height.value)) {
    result.style.backgroundColor = "#fff";
    result.innerHTML = "Please, use numbers";
  } else {
    const updatedWeight = Number(weight.value.replace(",", "."));
    const updatedHeight = Number(height.value.replace(",", "."));

    verifyResult(updatedWeight, updatedHeight, result);
  }
}

function verifyResult(updatedWeight, updatedHeight, result) {
  if (updatedWeight <= 2 && updatedHeight <= 0.4) {
    result.style.backgroundColor = "#fff";
    result.innerHTML = "<strong>What?</strong>";
  } else {
    const bmi = getBMI(updatedWeight, updatedHeight);

    if (bmi < 18.5) {
      result.style.backgroundColor = "lightgreen";
      result.innerHTML = `Your BMI is ${bmi} (Under weight)`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.style.backgroundColor = "lightgreen";
      result.innerHTML = `Your BMI is ${bmi} (Normal weight)`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.style.backgroundColor = "yellow";
      result.innerHTML = `Your BMI is ${bmi} (Overweight)`;
    } else if (bmi >= 30 && bmi <= 34.9) {
      result.style.backgroundColor = "red";
      result.innerHTML = `Your BMI is ${bmi} (Grade 1 obesity)`;
    } else if (bmi >= 35 && bmi <= 39.9) {
      result.style.backgroundColor = "red";
      result.innerHTML = `Your BMI is ${bmi} (Grade 2 obesity)`;
    } else if (bmi >= 40) {
      result.style.backgroundColor = "red";
      result.innerHTML = `Your BMI is ${bmi} (Grade 3 obesity)`;
    }
  }
}

function getBMI(weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}
