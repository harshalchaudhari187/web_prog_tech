// Retrieve existing tasks from local storage (if any)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display existing tasks
const displayTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
   
      <span>${task}</span>
      <i class="fas fa-edit edit-icon"></i>
      <i class="fas fa-trash delete-icon">
      </i>
     
    `;
    taskList.appendChild(li);

    // Add event listeners to the edit and delete icons
    const editIcon = li.querySelector(".edit-icon");
    editIcon.addEventListener("click", () => editTask(index));

    const deleteIcon = li.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", () => deleteTask(index));
  });
};

// Add a new task
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    displayTasks();
  }
};

// Edit a task
const editTask = (index) => {
  const newTask = prompt("Edit the task:", tasks[index]);
  if (newTask && newTask.trim()) {
    tasks[index] = newTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
};

// Delete a task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
};

// Add event listener to the "Add" button
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);

// Initial display of tasks on page load
displayTasks();
