PROJECT URL :
https://roadmap.sh/projects/task-tracker

# Task Tracker CLI

A simple command-line tool to track and manage your tasks.

## Features
- Add, update, and delete tasks.
- Mark tasks as "in-progress" or "done".
- List tasks by their status: "todo", "in-progress", or "done".
- Tasks are stored in a `tasks.json` file.
- Works with Indian Standard Time (IST) timestamps for task creation and updates.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/task-tracker-cli.git
2. Navigate into the project directory:
   cd task-tracker-cli


3. Add a new task:
   node cli.js add "Buy groceries"
4. Update a task:
   node cli.js update 1 "Buy groceries and cook dinner"
5. Delete a task:
   node cli.js delete 1
6. Mark a task as "in-progress":
  node cli.js mark-in-progress 1
7. Mark a task as "done":
  node cli.js mark-done 1
8. List all tasks:
  node cli.js list
9. List tasks by status (done, todo, in-progress):
  node cli.js list done

File Structure
The project contains the following files:

cli.js: The main command-line interface script.
task-tracker.js: Contains the core logic for managing tasks.
tasks.json: Stores tasks in JSON format.
.gitignore: Specifies which files and directories to ignore in version control.
README.md: This file.
