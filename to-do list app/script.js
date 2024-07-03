document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodo(todoText);
      todoInput.value = "";
    }
  });

function addTodo(text) {
  const todoList = document.getElementById("todo-list");
  const todoItem = document.createElement("li");
  todoItem.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&times;";
  deleteButton.onclick = function () {
    todoList.removeChild(todoItem);
  };

  todoItem.appendChild(deleteButton);
  todoItem.addEventListener("click", function () {
    todoItem.classList.toggle("done");
  });

  todoList.appendChild(todoItem);
}
