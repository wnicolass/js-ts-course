const resultEl = document.querySelector(".result");

// const request = (obj) => {
//   //xhr -> xml http request
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

function loadResult(res) {
  resultEl.innerHTML = res;
}

async function loadPage(el) {
  const href = el.getAttribute("href");

  // const objConfig = {
  //   method: "GET",
  //   url: href,
  // };

  fetch(href)
    .then((res) => {
      if (res.status !== 200) throw new Error("not found");
      return res.text();
    })
    .then((html) => loadResult(html))
    .catch((e) => console.log(e));
}

document.body.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});
