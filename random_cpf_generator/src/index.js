import GenerateCPF from "./modules/Generate";
import "./assets/styles/style.css";

(() => {
  const generate = new GenerateCPF();
  const resultContainer = document.querySelector(".result");
  resultContainer.textContent = generate.generateNewCPF();
})();
