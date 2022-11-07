import GenerateCPF from "./modules/Generate";
import "./assets/styles/style.css";

(() => {
  const generate = new GenerateCPF();
  const resultContainer = document.querySelector(".result");
  const p = document.createElement("p");
  p.textContent = generate.generateNewCPF();
  resultContainer.appendChild(p);
})();
