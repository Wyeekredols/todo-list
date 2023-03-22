'use strict';

const todoItemInput = document.querySelector('.item-detail');
const addTask = document.querySelector('.add-item');
const saveTask = document.querySelectorAll('.save-item');
const listContainer = document.querySelector('.displayTodoList');

function generateListItem(value) {
  return `<li id="_${value}">
  <p class="form-input listItem">${value} </p>
  <input style="display: none" type="text" class="form-input listItem">
  <button class="btn btn-theme edit-item">EDIT</button>
  <button class="btn btn-danger delete-item">X</button>
  </li>`;
}

addTask.addEventListener('click', (e) => {
  let inputValue = todoItemInput.value;
  console.log(inputValue);
  if (inputValue.trim() === "") return;
  let new_task = generateListItem(inputValue);
  listContainer.insertAdjacentHTML('beforeend', new_task);
  todoItemInput.value = "";
})

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  }

  if (e.target.classList.contains('edit-item')) {
    let input = e.target.parentElement.querySelector('input');
    let p = e.target.parentElement.querySelector('p');

    // console.log(p, input);
    if (e.target.textContent === 'EDIT') {
      // console.log(p, input);
      input.value = p.textContent

      p.style.display = "none"
      input.style.display = "block"

      e.target.textContent = 'SAVE';
    } else if (e.target.textContent === 'SAVE') {
      let input = e.target.parentElement.querySelector('input');
      let p = e.target.parentElement.querySelector('p');
      p.textContent = input.value;

      input.style.display = "none"
      p.style.display = "block"

      e.target.textContent = 'EDIT';
    }
  }
});
