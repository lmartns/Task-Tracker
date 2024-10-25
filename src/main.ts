import * as readline from "readline";
import { askQuestion } from "./Utils/input-scan";
import { createJSON } from "./Utils/create-json";
import { rl, taskInstructions } from "./config/config";
import { executeCommand } from "./Utils/command-executor";

async function start() {
  console.log("Welcome to task tracker!");
  const input = await askQuestion(rl, "Write command: ");

  const [command, ...args] = input.split(" ");
  executeCommand(command, args);

  rl.close();
}

start();
