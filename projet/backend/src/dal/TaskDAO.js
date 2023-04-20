const mongoose = require("mongoose");
const Task = require("../model/Task");

async function doConnect(){
    mongoose.connect("mongodb+srv://ReactDbUser:2023@cluster0.lvayy.mongodb.net/ProjetReact?retryWrites=true&w=majority",
    {
        useNewParser:true,
        useUnifiedTopology:true
    })
    .then(() => {console.log("Connected to mongoDB database")})
    .catch((err) => {console.error(err)})
}

async function addTask(jsonStr){
    const new_Task = new Task(jsonStr);
    await new_Task.save();
    console.log("Task added")
}

async function findAllTasks(){
    return await Task.find({})
}

async function findTaskById(id){
    return await Task.findById(id).exec();
}

async function findAllTaskByIsDone(isDone){
    return await Task.find({isDone: isDone})
}

async function deleteTaskById(id){
    return await Task.deleteOne({_id:id})
}

async function updateTaskById(id, body){
    return await Task.updateOne({_id:id, body:body})
}

module.exports = {
    doConnect: doConnect,
    addTask: addTask,
    findAllTasks: findAllTasks,
    findTaskById: findTaskById,
    findAllTaskByIsDone: findAllTaskByIsDone,
    deleteTaskById: deleteTaskById,
    updateTaskById: updateTaskById
};
