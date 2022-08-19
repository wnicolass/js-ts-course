const toDoInput = document.querySelector(".input-todo");
const toDoButton = document.querySelector(".btn-todo");
const toDo = document.querySelector(".todo");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

window.addEventListener("load", () => toDoInput.focus());

function createLi() {
  const li = document.createElement("li");
  return li;
}

toDoInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!toDoInput.value) return;

    createTask(toDoInput.value);
  }
});

function createDeleteButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.setAttribute("class", "delete");
  li.appendChild(deleteButton);
}

function createTask(inputText) {
  const li = createLi();
  const text = document.createTextNode(inputText);
  li.appendChild(text);
  toDo.appendChild(li);
  clearInput(toDoInput);
  createDeleteButton(li);
  saveTask();
}

function clearInput(input) {
  setTimeout(() => {
    input.value = "";
  }, 10);

  input.focus();
}

toDoButton.addEventListener("click", () => {
  if (!toDoInput.value) return;

  createTask(toDoInput.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("delete")) {
    el.parentElement.remove();
  }

  saveTask();
});

function saveTask() {
  const liTasks = toDo.querySelectorAll("li");
  const toDoList = [];

  for (let task of liTasks) {
    taskText = task.innerText;
    taskText = taskText.replace("X", "").trim();
    toDoList.push(taskText);
  }

  const jsonTasks = JSON.stringify(toDoList);
  localStorage.setItem("tasks", jsonTasks);
}

function showTasksWhenLoad() {
  const tasks = localStorage.getItem("tasks");

  const tasksList = JSON.parse(tasks);

  for (let task of tasksList) {
    createTask(task);
  }
}
showTasksWhenLoad();

const filter = document.getElementById("filter");

filter.addEventListener("keyup", filterList);

function filterList(e) {
  const text = e.target.value.toLowerCase();

  const items = toDo.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
      console.log(itemName);
    } else {
      item.style.display = "none";
    }
  });
}
