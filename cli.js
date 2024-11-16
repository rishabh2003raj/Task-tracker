const { addTask, updateTask, deleteTask, markInProgress, markDone, listTasks } = require('./task-tracker');
const [,, command, ...args] = process.argv;

switch (command) {
  case 'add':
    const description = args.join(' ');
    addTask(description);
    break;
  case 'update':
    const idToUpdate = parseInt(args[0]);
    const newDescription = args.slice(1).join(' ');
    updateTask(idToUpdate, newDescription);
    break;
  case 'delete':
    const idToDelete = parseInt(args[0]);
    deleteTask(idToDelete);
    break;
  case 'mark-in-progress':
    const idInProgress = parseInt(args[0]);
    markInProgress(idInProgress);
    break;
  case 'mark-done':
    const idDone = parseInt(args[0]);
    markDone(idDone);
    break;
  case 'list':
    const statusFilter = args[0] || null;
    listTasks(statusFilter);
    break;
  default:
    console.log('Unknown command. Use add, update, delete, mark-in-progress, mark-done, or list.');
}
