import { rl, taskInstructions } from "../config/config";
import { Commands } from "../enums/commands";
import { TaskService } from "../services/task-service";
import { TaskStorageService } from "../services/task-storage-service";
import { askQuestion } from "./input-scan";

export async function executeCommand(
  command: string,
  args: string[]
): Promise<void> {
  return new Promise(async (resolve) => {
    switch (command) {
      case Commands.ADD:
        const addDescription = await askQuestion(
          rl,
          "Enter task description: "
        );
        const newTask = TaskService.addTask(addDescription);
        console.log(`Task added: ${newTask.description}`);
        break;
      case Commands.UPDATE:
        const updateId = await askQuestion(rl, "Enter task ID: ");
        const updateDescription = await askQuestion(
          rl,
          "Enter new task description: "
        );
        const statusInput = await askQuestion(
          rl,
          "Enter new task status (todo, in-progress, done): "
        );
        const validStatuses = ["todo", "in-progress", "done"] as const;
        const status = validStatuses.includes(statusInput as any)
          ? (statusInput as "todo" | "in-progress" | "done")
          : "todo";
        TaskService.updateTask(updateId, updateDescription, status);
        console.log(`Task ${updateId} updated sucessfully`);
        break;
      case Commands.DELETE:
        const id = await askQuestion(rl, "Enter task ID: ");
        TaskService.deleteTask(id);
        console.log("Task deleted");
        break;
      case Commands.MARK_IN_PROGRESS:
        const inProgressId = await askQuestion(
          rl,
          "Enter task ID to mark as in-progress: "
        );
        TaskService.updateTask(inProgressId, "", "in-progress");
        console.log("Task marked as in-progress.");
        break;
      case Commands.MARK_DONE:
        const doneId = await askQuestion(rl, "Enter task ID to mark as done: ");
        TaskService.updateTask(doneId, "", "done");
        console.log("Task marked as done.");
        break;
      case Commands.LIST:
        TaskStorageService.listTasks();
        break;
      case Commands.LIST_DONE:
        TaskStorageService.listTasksByStatus("done");
        break;
      case Commands.LIST_TODO:
        TaskStorageService.listTasksByStatus("todo");
        break;
      case Commands.LIST_IN_PROGRESS:
        TaskStorageService.listTasksByStatus("in-progress");
        break;
      case Commands.HELP:
        console.log(taskInstructions);
        break;
      case Commands.EXIT:
        process.exit(0);
      default:
        console.log("Not a command");
        console.log(taskInstructions);
    }
    resolve();
  });
}
