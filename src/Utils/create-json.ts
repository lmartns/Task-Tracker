import * as fs from "fs";
import * as path from "path";

interface Data {
  [key: string]: any;
}

export const createJSON = (fileName: string, data: Data): void => {
  const filePath = path.join(__dirname, "..", fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`Created ${fileName} JSON Format`);
  } else {
    console.log(`Failed a created ${fileName}, exist`);
  }
};
