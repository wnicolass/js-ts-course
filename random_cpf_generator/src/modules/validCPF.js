export default class ValidCPF {
  constructor(cpf) {
    Object.defineProperty(this, "cleancpf", {
      value: cpf.replace(/\D+/g, ""),
      writable: false,
      enumerable: true,
      configurable: false,
    });
  }

  isSequence() {
    return (
      this.cleancpf.charAt(0).repeat(this.cleancpf.length) === this.cleancpf
    );
  }

  generateNewCPF() {
    const partialCPF = this.cleancpf.slice(0, -2);
    const digitOne = ValidCPF.generateDigit(partialCPF);
    const digitTwo = ValidCPF.generateDigit(partialCPF + digitOne);
    this.newCPF = partialCPF + digitOne + digitTwo;
  }

  static generateDigit(cpf) {
    let total = 0;
    let regressiveCounter = cpf.length + 1;

    for (let digit of cpf) {
      total += regressiveCounter * Number(digit);
      regressiveCounter--;
    }

    const digit = 11 - (total % 11);
    return digit > 9 ? "0" : String(digit);
  }

  validate() {
    if (!this.cleancpf) return false;
    if (typeof this.cleancpf !== "string") return false;
    if (this.cleancpf.length !== 11) return false;
    if (this.isSequence()) return false;
    this.generateNewCPF();

    return this.newCPF === this.cleancpf;
  }
}
