import { UUID } from "crypto";

export class Task {
  constructor(
    public id: UUID,
    public description: string,
    public status: "todo" | "in-progress" | "done",
    public createdAt: Date,
    public updateAt: Date
  ) {}
}
