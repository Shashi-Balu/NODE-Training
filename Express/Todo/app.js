const express = require("express");
const { getAllTasks, addNewTask, getTaskById, deleteTaskById } = require("./utils/Task");

const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
    let tasks = getAllTasks();
    return res.status(200).send(tasks);
});

app.post("/tasks", (req, res) => {
    let task = { ...req.body };
    task = addNewTask(task);
    return res.status(201).send({
        message: "Task successfully created",
        task,
    });
});

app.get("/tasks/:taskId", (req, res) => {
    let taskId = req.params.taskId;
    let task = getTaskById(taskId);
    if (!task) {
        return res.status(404).send({
            message: `Task with ID: ${taskId} was not found.`,
        });
    }
    return res.status(200).send(task);
});

app.delete("/tasks/:taskId", (req, res) => {
    let taskId = req.params.taskId;
    let isDeleted = deleteTaskById(taskId);
    if (!isDeleted) {
        return res.status(404).send({
            message: `Delete Failed! Task with ID: ${taskId} was not found.`,
        });
    }
    return res.status(200).send({
        message: `Delete Success ! Task with ID ${taskId} was deleted`,
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server ${PORT} is listening`);
});
