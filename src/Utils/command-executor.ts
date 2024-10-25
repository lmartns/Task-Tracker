import { taskInstructions } from "../config/config";
import { Commands } from "../enums/Commands";

export function executeCommand(command: string, args: string[]): void {
  switch (command) {
    case Commands.ADD:
      console.log("Add Task");
      break;
    case Commands.UPDATE:
      console.log("Update Task");
      break;
    case Commands.DELETE:
      console.log("DELETE TASK");
      break;
    case Commands.MARK_IN_PROGRESS:
      console.log("Mark in progress");
      break;
    case Commands.MARK_DONE:
      console.log("MARK DONE");
      break;
    case Commands.LIST:
      console.log("List all");
      break;
    case Commands.LIST_DONE:
      console.log("list done");
      break;
    case Commands.LIST_TODO:
      console.log("list todo");
      break;
    case Commands.LIST_IN_PROGRESS:
      console.log("list in progress");
      break;
    case Commands.HELP:
      console.log(taskInstructions);
      break;
    default:
      console.log("Comando não reconhecido. Tente novamente.");
      break;
  }
}
