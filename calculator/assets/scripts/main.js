function createCalculator() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    init() {
      this.btnClick();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) this.calculate();
      });
    },

    calculate() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    btnClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculate();
        }

        this.display.focus();
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.init();
