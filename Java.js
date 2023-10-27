let todoForm = document.getElementById('toDoList');
let todoInput = document.getElementById('input');
let todoList = document.getElementById('todos');
let addTodoButton = document.getElementById('addButton');

addTodoButton.addEventListener('click', function () {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        const editTodoButton = document.createElement('button');
        editTodoButton.textContent = 'Edit';
        const deleteTodoButton = document.createElement('button');
        deleteTodoButton.textContent = 'Delete';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                todoTextSpan.style.textDecoration = 'line-through';
            } else {
                todoTextSpan.style.textDecoration = 'none';
            }
        });

        deleteTodoButton.addEventListener('click', function () {
            todoItem.remove();
        });

        editTodoButton.addEventListener('click', function () {
            const updatedText = prompt('Edit the task:', todoTextSpan.textContent);
            if (updatedText !== null) {
                todoTextSpan.textContent = updatedText || todoTextSpan.textContent;
            }
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(editTodoButton);
        todoItem.appendChild(deleteTodoButton);

        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
});

