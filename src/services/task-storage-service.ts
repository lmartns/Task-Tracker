import * as fs from "fs";
import { Task } from "../entities/task";
import { JSON_FILE_PATH } from "../config/config";
import { UUID } from "crypto";

export class TaskStorageService {
  static readTasks(): Task[] {
    try {
      if (fs.existsSync(JSON_FILE_PATH)) {
        const data = fs.readFileSync(JSON_FILE_PATH, "utf8");
        const tasks = JSON.parse(data);
        if (Array.isArray(tasks)) {
          return tasks as Task[];
        }
      }
    } catch (error) {
      console.error("Error reading tasks:", error);
    }
    return [];
  }

  static addTask(task: Task): void {
    const tasks = this.readTasks();
    tasks.push(task);
    this.writeTasks(tasks);
  }

  static listTasks(): void {
    const tasks = this.readTasks();
    if (tasks.length === 0) {
      console.log("No tasks available");
    } else {
      console.log("Tasks: ");
      tasks.forEach((task, index) => {
        console.log(
          `${index + 1}. ${task.id} [${task.status}] ${
            task.description
          } (Created at: ${task.createdAt})`
        );
      });
    }
  }

  static writeTasks(tasks: Task[]): void {
    try {
      fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(tasks, null, 2), "utf8");
    } catch (error) {
      console.error("Error writing tasks:", error);
    }
  }

  static updateTask(updateTask: Task): void {
    const tasks = this.readTasks();
    const index = tasks.findIndex((t) => t.id === updateTask.id);
    if (index !== -1) {
      tasks[index] = updateTask;
      this.writeTasks(tasks);
    }
  }

  static deleteTask(taskId: UUID): void {
    const tasks = this.readTasks();
    const updateTask = tasks.filter((t) => t.id !== taskId);
    this.writeTasks(updateTask);
  }
}
