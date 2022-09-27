class FormValidator {
  constructor() {
    this.form = document.querySelector(".form");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.checkFields();
  }

  checkFields() {
    let valid = true;

    for (let field of this.form.querySelectorAll("input")) {
      const label = field.previousElementSibling.innerText.slice(0, -1);
      if (!field.value) {
        this.createError(field, `Field "${label}" cannot be empty`);
        valid = false;
      }
    }
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.classList.add("error-text");
    div.innerHTML = msg;
    field.insertAdjacentElement("afterend", div);
  }
}

const valid = new FormValidator();
