const taskDAO = require("../dal/TaskDAO");

async function main(){
    taskDAO.doConnect();

    const result = await taskDAO.findAllTasks();
    console.log(customers);
}

main();

function resolve(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("2 seconds");
        }, 4000);
    });
}