'use strict';

const todoItemInput = document.querySelector('.item-detail');
const addTask = document.querySelector('.add-item');
const saveTask = document.querySelectorAll('.save-item');

addTask.addEventListener('click', function () {
  const task = todoItemInput.value;
  const todoItems = [task];

  for (let i = 0; i < todoItems.length; i++) {
    console.log(todoItems[i]);
    let displayList = `<li> 
      <input type="text" class="form-input listItem" value="${todoItems[i]}"> 
      <button class="btn btn-theme edit-item">EDIT</button>
      <button class="btn btn-danger delete-item">X</button>
    </li>`;
    document.querySelector('.displayTodoList').innerHTML += displayList;
    todoItemInput.value = '';
  }

  const deleteTask = document.querySelectorAll('.delete-item');
  for (let i = 0; i < deleteTask.length; i++) {
    deleteTask[i].addEventListener('click', function () {
      this.parentNode.parentNode.remove();
    });
  }

  const editTask = document.querySelectorAll('.edit-item');
  for (let i = 0; i < editTask.length; i++) {
    editTask[i].addEventListener('click', function () {
      const updateTodo = document.querySelector('.listItem').value;
    });
  }
});
