const taskDAO = require("../dal/TaskDAO");

async function sendIndexFile(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
}

async function sendTaskById(req, res){
    let id = req.params.id;
    var task = "";
    task = await taskDAO.findTaskById(id);
    res.send(task);
}

async function sendAllTask(req, res){
    tasks = await taskDAO.findAllTasks();
    res.send(tasks);
}

async function postNewTask(req, res){
    const {title, description, isDone} = req.body;
    const json = {title: title, description: description, isDone: isDone};
    task = await taskDAO.addTask(json);
    res.send(JSON.stringify(task) + "Added successfully....");
}

async function updateTaskById(req, res){
    let id = req.params.id;
    let body = req.body;
    var newTask = "";
    newTask = await taskDAO.updateTaskById(id, body);
    res.send(newTask);
}

async function deleteTaskById(req, res){
    let id = req.params.id;
    var task = "";
    task = taskDAO.deleteTaskById(id);
    res.send(task);
}

module.exports = {
    sendIndexFile: sendIndexFile,
    sendTaskById: sendTaskById,
    sendAllTask: sendAllTask,
    postNewTask: postNewTask,
    updateTaskById: updateTaskById,
    deleteTaskById: deleteTaskById
}