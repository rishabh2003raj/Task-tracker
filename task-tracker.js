const fs = require('fs');
const path = require('path');

// File to store tasks
const tasksFile = path.join(__dirname, 'tasks.json');

// Check if the tasks.json file exists; create it if not
if (!fs.existsSync(tasksFile)) {
  fs.writeFileSync(tasksFile, JSON.stringify([]));
}

// Function to read tasks from the JSON file
function readTasks() {
  const data = fs.readFileSync(tasksFile);
  return JSON.parse(data);
}

// Function to write tasks to the JSON file
function writeTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// Function to generate a new task ID
function generateTaskId(tasks) {
  const lastTask = tasks[tasks.length - 1];
  return lastTask ? lastTask.id + 1 : 1;
}

function getISTDate() {
    const date = new Date();
    const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // IST is UTC + 5:30 hours
    const istDate = new Date(date.getTime() + IST_OFFSET);
    return istDate.toISOString();
}

// Use the function to get the current date and time in IST
const createdAt = getISTDate();
const updatedAt = getISTDate();

// Add a new task
function addTask(description) {
  const tasks = readTasks();
  const task = {
    id: generateTaskId(tasks),
    description,
    status: 'todo',
    createdAt: createdAt,
    updatedAt: updatedAt,
  };
  tasks.push(task);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${task.id})`);
}

// Update an existing task
function updateTask(id, description) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.description = description;
  task.updatedAt = updatedAt;
  writeTasks(tasks);
  console.log(`Task ${id} updated successfully.`);
}

// Delete a task
function deleteTask(id) {
  let tasks = readTasks();
  tasks = tasks.filter(t => t.id !== id);
  writeTasks(tasks);
  console.log(`Task ${id} deleted successfully.`);
}

// Mark a task as "in-progress"
function markInProgress(id) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.status = 'in-progress';
  task.updatedAt = updatedAt;
  writeTasks(tasks);
  console.log(`Task ${id} marked as in-progress.`);
}

// Mark a task as "done"
function markDone(id) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.status = 'done';
  task.updatedAt = updatedAt;
  writeTasks(tasks);
  console.log(`Task ${id} marked as done.`);
}

// List all tasks
function listTasks(statusFilter = null) {
  const tasks = readTasks();
  const filteredTasks = statusFilter
    ? tasks.filter(task => task.status === statusFilter)
    : tasks;

  if (filteredTasks.length === 0) {
    console.log('No tasks found.');
    return;
  }

  filteredTasks.forEach(task => {
    console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, Created At: ${task.createdAt}, Updated At: ${task.updatedAt}`);
  });
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markInProgress,
  markDone,
  listTasks,
};
