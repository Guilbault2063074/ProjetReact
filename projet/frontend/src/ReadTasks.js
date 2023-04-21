import { useEffect, useState } from "react";
import TaskView from "./TaskView"
import axios from "axios";


function ReadTask(){
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
        //axios.get("http://localhost:3001/tasks")
        //.then((resp) => setTasks(resp.data))
        setTasks(
            [{"_id":{"$oid":"6441c034854f4940bababe0f"},"title":"Finish back-end","description":"Complete all 3 layer of backend","isDone":"on"},
            {"_id":{"$oid":"IJsDfsBR5q0RazTpf6RK"},"title":"Finish front-end","description":"Complete all Views","isDone":"off"}]
        )
    }, [])


    return(
        <div>
            <h1>Tasks</h1>
                {tasks.map((task) =>{
                    return <TaskView key={task.$oid} title={task.title} description={task.description} isDone={task.isDone} id={task._id.$oid}></TaskView>
                })}
        </div>
    )
}

export default ReadTask
//une liste de TaskView
//Dans chaque TaskView, un bouton update et un bouton delete
//le bouton update t'amène dans une autre page
//Après les opérations update et delete, le state est changé