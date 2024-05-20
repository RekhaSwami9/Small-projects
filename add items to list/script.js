const todoList = document.querySelector('.todolist');
document.querySelector('.addtodo')
.addEventListener('click', () => {
    console.log('ok');
    let todoText = document.querySelector('.todo').value;
    let li = document.createElement('li');
    li.innerText = todoText;
    console.log(li);
    todoList.appendChild(li); // Corrected variable name
});
