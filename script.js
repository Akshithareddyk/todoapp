const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTaskClick(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("task-text")) {
    e.target.classList.toggle("completed");
  }
}
