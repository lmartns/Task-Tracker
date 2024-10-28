import { UUID } from "crypto";
import { Task } from "../entities/task";
import { TaskStorageService } from "./task-storage-service";

export class TaskService {
  addTask(description: string): Task {
    const tasks = TaskStorageService.readTasks();
    const id = crypto.randomUUID();
    const newTask = new Task(id, description, "todo", new Date(), new Date());
    TaskStorageService.addTask(newTask);
    return newTask;
  }

  updateTask(
    id: UUID,
    newDescription: string,
    newStatus: "todo" | "in-progress" | "done"
  ) {
    const tasks = TaskStorageService.readTasks();
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.description = newDescription;
      task.status = newStatus;
      task.updateAt = new Date();
      TaskStorageService.updateTask(task);
    }
  }

  deleteTask(id: UUID): void {
    TaskStorageService.deleteTask(id);
  }
}
