const cpf = "705.484.450-52";

function calculateCPF(cpfSum) {
  return 11 - (cpfSum % 11);
}

function validateCalc(calc, arrCPF) {
  calc > 9 ? arrCPF.push(0) : arrCPF.push(String(calc));

  return arrCPF;
}

function iterateCPF(arrCPF) {
  let control = arrCPF.length + 1;

  const calc1 = calculateCPF(
    arrCPF.reduce((acc, num) => acc + Number(num) * control--, 0)
  );

  arrCPF = validateCalc(calc1, arrCPF);
  control = arrCPF.length + 1;

  const calc2 = calculateCPF(
    arrCPF.reduce((acc, num) => acc + Number(num) * control--, 0)
  );

  arrCPF = validateCalc(calc2, arrCPF);

  return arrCPF;
}

function validateCPF(cpf) {
  const cleanCPF = cpf.replace(/\D+/g, "");
  let arrCPF = Array.from(cleanCPF).slice(0, 9);

  const validatedCPF = iterateCPF(arrCPF);

  cleanCPF === validatedCPF.join("")
    ? console.log("valid cpf")
    : console.log("cpf not valid");
}

validateCPF(cpf);
