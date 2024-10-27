# Task Tracker CLI

Welcome to the Task Tracker CLI! This command-line application allows you to manage your tasks efficiently. You can add, update, delete, and list tasks, all from the terminal.

Project 

## Features
- **Add Tasks**: Create new tasks with descriptions.
- **Update Tasks**: Modify existing tasks by their unique ID.
- **Delete Tasks**: Remove tasks from your list using their ID.
- **Mark Tasks**: Change the status of tasks to "in-progress" or "done".
- **List Tasks**: View all tasks or filter by their status (done, todo, in-progress).
- **Help Command**: Get assistance with command usage.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Task-Tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-Tracker
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
## Usage
Run the application using Node.js:
```bash
npm run start
```
## Commands
Use one of the following commands to manage your tasks:

- add "Task description": Add a new task with a given description.

- update <task-id> "New task description": Update the description of an existing task by ID.

- delete <task-id>: Delete a task by its ID.

- mark-in-progress <task-id>: Mark a task as "in-progress" by its ID.

- mark-done <task-id>: Mark a task as "done" by its ID.

- list: List all tasks.

- list-done: List tasks with status "done".

- list-todo: List tasks with status "todo".

- list-in-progress: List tasks with status "in-progress".

- help: Show the help message.

- exit: Exit the application.

## Example Usage

```bash
> add "Buy groceries"
> update 1 "Buy groceries and cook dinner"
> mark-done 1
> list
```
## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## [Roadmap.sh](https://roadmap.sh/) Project

This project is part of the roadmap.sh [Task Tracker project](https://roadmap.sh/projects/task-tracker).
