import { useEffect, useState } from "react";
import TaskView from "./TaskView"
import axios from "axios";


function ReadTask(){
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
        //axios.get("http://localhost:3000/tasks")
        //.then((resp) => setTasks(resp.data))
        setTasks(
            [{"_id":{"$oid":"6441c034854f4940bababe0f"},"title":"Finish back-end","description":"Complete all 3 layer of backend","isDone":"on"}]
        )
    }, [])


    return(
        <div>
            <h1>Tasks</h1>
                {tasks.map((task) =>{
                    return <TaskView key={task.$oid} title={task.title} description={task.description} isDone={task.isDone}></TaskView>
                })}
        </div>
    )
}

export default ReadTask
//une liste de TaskView
//Dans chaque TaskView, un bouton update et un bouton delete
//le bouton update t'amène dans une autre page
//Après les opérations update et delete, le state est changé