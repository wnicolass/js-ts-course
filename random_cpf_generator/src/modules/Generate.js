import ValidCPF from "./ValidCPF";

export default class GenerateCPF {
  randomNumber(min = 100000000, max = 999999999) {
    return "" + Math.floor(Math.random() * (max - min) + min);
  }

  formatCPF(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  generateNewCPF() {
    const CPFWithoutDigit = this.randomNumber();
    const digit1 = ValidCPF.generateDigit(CPFWithoutDigit);
    const digit2 = ValidCPF.generateDigit(CPFWithoutDigit + digit1);
    const newCPF = CPFWithoutDigit + digit1 + digit2;
    return this.formatCPF(newCPF);
  }
}
