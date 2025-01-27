export type Task = {
    description: String;
}

export type Day = {
    name: String;
    tasks: Task[];
}

export type Week = {
    id: number;
    days: Day[];
}