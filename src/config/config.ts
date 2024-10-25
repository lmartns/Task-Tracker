import * as readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const taskInstructions = `# Adding a new task
1 - task-cli add "Buy groceries"

# Updating and deleting tasks
2 - task-cli update 1 "Buy groceries and cook dinner"
3 - task-cli delete 1

# Marking a task as in progress or done
4 - task-cli mark-in-progress 1
5 - task-cli mark-done 1

# Listing all tasks
6 - task-cli list

# Listing tasks by status
7 - task-cli list done
8 - task-cli list todo
9 - task-cli list in-progress`;
