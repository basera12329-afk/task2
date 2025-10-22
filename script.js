// Select elements
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggling completion
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = ''; // Clear input
}
