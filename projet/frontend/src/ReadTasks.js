import { useEffect, useState } from "react";
import TaskView from "./TaskView"
import axios from "axios";


function ReadTask(){
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:3000/tasks")
        .then((resp) => setTasks(resp.data))
    }, [])

    return(
        <div>
            <h1>Tasks</h1>
                {tasks.map(tasks =>{
                    <TaskView title={tasks.title} description={tasks.description} isDone={tasks.isDone}></TaskView>
                })}
        </div>
    )
}

export default ReadTask
//une liste de TaskView
//Dans chaque TaskView, un bouton update et un bouton delete
//le bouton update t'amène dans une autre page
//Après les opérations update et delete, le state est changé