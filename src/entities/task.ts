export class Task {
  constructor(
    public id: number,
    public description: string,
    public status: "todo" | "in-progress" | "done",
    public createdAt: Date,
    public updateAt: Date,
  ) {}
}