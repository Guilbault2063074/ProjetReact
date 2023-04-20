const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    isDone: String,
});

let Task = mongoose.model("Task", taskSchema);
module.exports = Task;

