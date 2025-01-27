type Task = {
    name: String;
}

type Day = {
    name: String;
    tasks: Task[];
}

type Week = {
    number: number;
    days: Day[];
}