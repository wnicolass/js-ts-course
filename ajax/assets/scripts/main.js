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
