import * as fs from "fs";
import { JSON_FILE_PATH } from "../config/config";
import { Task } from "../entities/task";

interface Data {
  [key: string]: Task;
}

export const ensureJSONExists = (initialData: Data = {}): void => {
  if (!fs.existsSync(JSON_FILE_PATH)) {
    fs.writeFileSync(
      JSON_FILE_PATH,
      JSON.stringify(initialData, null, 2),
      "utf-8"
    );
    console.log(`Created JSON file at ${JSON_FILE_PATH}`);
  } else {
    console.log(`JSON file already exists at ${JSON_FILE_PATH}`);
  }
};
