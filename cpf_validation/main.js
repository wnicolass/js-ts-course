const cpf = "705.484.450-52";

function calculateCPF(cpfSum) {
  return 11 - (cpfSum % 11);
}

function validateCalc(calc, arrCPF) {
  if (calc > 9) {
    arrCPF.push(0);
  } else {
    arrCPF.push(String(calc));
  }

  return arrCPF;
}

function iterateCPF(arrCPF) {
  let control = arrCPF.length + 1;
  return calculateCPF(
    arrCPF
      .map((num) => Number(num) * control--)
      .reduce((acc, num) => acc + num, 0)
  );
}

function validateCPF(cpf) {
  const cleanCPF = cpf.replace(/\D+/g, "");
  let arrCPF = Array.from(cleanCPF).slice(0, 9);

  let cpfCalc = iterateCPF(arrCPF);
  arrCPF = validateCalc(cpfCalc, arrCPF);

  cpfCalc = iterateCPF(arrCPF);
  arrCPF = validateCalc(cpfCalc, arrCPF);

  if (cleanCPF === arrCPF.join("")) {
    console.log("valid cpf");
  } else {
    console.log("cpf not valid");
  }
}

validateCPF(cpf);
