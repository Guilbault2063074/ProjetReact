const taskDAO = require("../dal/TaskDAO");

async function main(){
    await taskDAO.doConnect();

    //const task = {title: "faire le backend", description: "faire les trois couche", isDone: "on"};
    //await taskDAO.addTask(task);

    const result = await taskDAO.findAllTasks();
    console.log(result);
}

main();

function resolve(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("2 seconds");
        }, 4000);
    });
}