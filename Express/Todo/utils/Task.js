const fs = require("fs");
const uuid = require("uuid");
const TASK_FILE = "tasks.json";

const EDITABLE_TASKS = ["title", "body"];

let getAllTasks = () => {
    try {
        let tasks = JSON.parse(fs.readFileSync(TASK_FILE));
        return tasks;
    } catch {
        return [];
    }
};

let addNewTask = (task) => {
    let tasks = getAllTasks();
    task = { ...task, taskId: uuid.v4() };
    tasks.push(task);
    fs.writeFileSync(TASK_FILE, JSON.stringify(tasks));
    return task;
};

let getTaskById = (taskId) => {
    let tasks = getAllTasks();
    let task = tasks.find((task) => task.taskId === taskId);
    return task;
};

let deleteTaskById = (taskId) => {
    let tasks = getAllTasks();
    let originalLength = tasks.length;
    tasks = tasks.filter((task) => task.taskId !== taskId);
    if (tasks.length >= originalLength) {
        return false;
    }
    return true;
};

let updateTaskById = (task) => {
    let { taskId } = task;
    let tasks = getAllTasks();
    let isUpdated = false;
    for (let t of tasks) {
        if (t.taskId === taskId) {
            for (let field of EDITABLE_TASKS) {
                t[field] = task[field];
            }
            isUpdated = true;
        }
    }
};

module.exports = { getAllTasks, addNewTask, getTaskById, deleteTaskById };
