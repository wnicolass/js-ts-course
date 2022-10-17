const request = (obj) => {
  //xhr -> xml http request
  const xhr = new XMLHttpRequest();

  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

function loadResult(res) {
  const resultEl = document.querySelector(".result");

  resultEl.innerHTML = res;
}

function loadPage(el) {
  const href = el.getAttribute("href");

  request({
    method: "GET",
    url: href,
    success(res) {
      loadResult(res);
    },
    error(errText) {
      console.log(errText);
    },
  });
}

document.body.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});
