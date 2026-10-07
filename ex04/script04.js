// Select DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let totalTasks = 0;

function updateCounter(change) {
  totalTasks += change;
  taskCounter.textContent = totalTasks;
}
function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return;
  const li = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = text;
  li.appendChild(taskText);
  li.addEventListener('click', (e) => {
    if (e.target !== deleteBtn) {
      li.classList.toggle('completed');
    }
  });
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateCounter(-1);
  });
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  updateCounter(1);
  taskInput.value = '';
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});