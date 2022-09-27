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
    const validPasswords = this.checkPasswords();
    console.log(validFields);
    console.log(validPasswords);

    if (validFields && validPasswords) {
      alert("Form sent.");
      this.form.submit();
    }
  }

  checkPasswords() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const confirmPassword = this.form.querySelector(".confirm-password");

    if (password.value !== confirmPassword.value) {
      valid = false;
      this.createError(
        password,
        '"Password" and "Confirm Password" fields must be equal'
      );
      this.createError(
        confirmPassword,
        '"Password" and "Confirm Password" fields must be equal'
      );
    }

    if (password.value.length < 6 || password.value.length > 13) {
      valid = false;
      this.createError(
        password,
        "Password must be between 6 and 12 characters"
      );
    }

    return valid;
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll("input")) {
      const label = field.previousElementSibling.innerText.slice(0, -1);

      if (!field.value) {
        this.createError(field, `Field "${label}" cannot be empty`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains("user")) {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, "User field must be between 3 and 12 characters");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, "User can only contain letters and/or numbers");
      valid = false;
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidCPF(field.value);

    if (!cpf.validate()) {
      this.createError(field, "Invalid CPF");
      return false;
    }

    return true;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.classList.add("error-text");
    div.innerHTML = msg;
    field.insertAdjacentElement("afterend", div);
  }
}

const valid = new FormValidator();
