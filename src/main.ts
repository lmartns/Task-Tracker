import * as readline from "readline";
import { askQuestion } from "./Utils/input-scan";
import { rl, taskInstructions } from "./config/config";
import { executeCommand } from "./Utils/command-executor";
import { ensureJSONExists } from "./Utils/file-utils";
import { TaskStorageService } from "./services/task-storage-service";

ensureJSONExists();

let id = crypto.randomUUID();

TaskStorageService.listTasks();

// try {
//   TaskStorageService.addTask({
//     id: id,
//     description: "Example task",
//     status: "todo",
//     createdAt: new Date(),
//     updateAt: new Date(),
//   });
//   console.log("Task added successfully.");
// } catch (error) {
//   console.error("Error adding task:", error);
// }

// async function start() {
//   console.log("Welcome to task tracker!");
//   const input = await askQuestion(rl, "Write command: ");

//   const [command, ...args] = input.split(" ");
//   executeCommand(command, args);

//   rl.close();
// }

// start();
