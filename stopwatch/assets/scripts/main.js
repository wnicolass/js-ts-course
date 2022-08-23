function stopwatch() {
  function createHourSeconds(seconds) {
    //pegando a data zero
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-PT", {
      hour12: false,
      timeZone: "UTC", //nesse timezone a data (0 segundos) enviada é 01-01-1970 00:00:00
    });
  }

  const timer = document.querySelector(".timer");
  let seconds = 0;
  let manipulateTimer;

  function startStopwatch() {
    manipulateTimer = setInterval(() => {
      seconds++;
      timer.innerHTML = createHourSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("reset")) {
      clearInterval(manipulateTimer);
      timer.innerHTML = "00:00:00";
      seconds = 0;
      timer.classList.remove("pausado");
    }

    if (el.classList.contains("start")) {
      timer.classList.remove("pausado");
      clearInterval(manipulateTimer); //impede que a cada click no start some um segundos a mais
      startStopwatch();
    }

    if (el.classList.contains("pause")) {
      timer.classList.add("pausado");
      clearInterval(manipulateTimer);
    }
  });
}

stopwatch();
