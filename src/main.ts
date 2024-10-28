import { askQuestion } from "./Utils/input-scan";
import { rl } from "./config/config";
import { executeCommand } from "./Utils/command-executor";
import { ensureJSONExists } from "./Utils/file-utils";
import { Commands } from "./enums/commands";

ensureJSONExists();

let isFirstRun = true;

async function start() {
  if (isFirstRun) {
    console.log("Welcome to task tracker!");
    isFirstRun = false;
  }

  const input = await askQuestion(rl, "Type command: ");

  const [command, ...args] = input.split(" ");
  await executeCommand(command, args);

  if (command !== Commands.EXIT) {
    start();
  } else {
    rl.close();
  }
}

start();
