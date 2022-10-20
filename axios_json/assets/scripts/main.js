function loadElements(data) {
  const resultEl = document.createElement("div");
  const section = document.querySelector(".container");
  section.appendChild(resultEl);

  const tableEl = document.createElement("table");

  for (let person of data) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML = person.nome;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = person.idade;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = person.salario;
    tr.appendChild(td3);

    tableEl.appendChild(tr);
  }

  resultEl.appendChild(tableEl);
}

axios("people.json").then((res) => loadElements(res.data));

// fetch("people.json")
//   .then((res) => res.json())
//   .then((data) => loadElements(data));
