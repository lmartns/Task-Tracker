import * as readline from "readline";
import * as path from "path";

export const JSON_FILE_PATH = path.join(__dirname, "..", "..", "tasks.json");

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const taskInstructions = `
=========================
   Task Tracker CLI Guide
=========================

Manage your tasks with the following commands. After entering a command, follow the prompts for additional details.

Commands:
1. add "Task description"
   - Add a new task with a given description.

2. update <task-id> "New task description"
   - Update the description of an existing task by its ID.

3. delete <task-id>
   - Remove a task by its ID.

4. mark-in-progress <task-id>
   - Set the status of a task to "in-progress" by its ID.

5. mark-done <task-id>
   - Mark a task as "done" by its ID.

6. list
   - Display all tasks.

7. list-done
   - Show tasks that are marked as "done".

8. list-todo
   - Show tasks that are marked as "todo".

9. list-in-progress
   - Show tasks that are "in-progress".

10. help
   - Display this help guide.

11. exit
   - Close the application.

Examples:
> add "Buy groceries"
> update 1 "Buy groceries and cook dinner"
> mark-done 1
> list
`;
