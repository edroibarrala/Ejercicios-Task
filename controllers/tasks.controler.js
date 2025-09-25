const Task = require('../models/task.model');

                //REQUEST,RESPONSE
exports.findAll = (req, res) => {
    const data = Task.findAll();
    res.status(200).json(data);
}

exports.addTask = (req, res) => {
    const title = req.body.title;
    const createdTask = Task.create(title);
    res.status(201).json(createdTask);
}

exports.removeTask = (req, res) => {
    const id = req.params.id;
    const ok = Task.removeTask(id);
    if(!ok)
        return res.status(404).json({message: "Task not found"});
    res.status(204).json(message = "Task deleted");
}

exports.findById = (req, res) => {
    const id = req.params.id;
    const task = Task.findById(id);
    if(!task)
        return res.status(404).json({message: "Task not found"});   
    res.status(200).json(task);
}

exports.updateTask = (req, res) => {

    const {title} = req.body;
    const ok = Task.updateTask(title);
    if(!ok)
        return res.status(404).json({message: "Task not found"});
    res.status(204).json(message = "Task updated");
}