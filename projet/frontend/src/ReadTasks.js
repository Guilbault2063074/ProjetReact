import { useEffect, useState } from "react";
import TaskView from "./TaskView"

function ReadTask(){
    let nav = useNaviguate();
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:3000/task")
        .then((resp) => setTasks(resp.data))
    }, [])

    return(
        <div>
            <h1>List of task</h1>
                {tasks.map(tasks =>{
                    <TaskView></TaskView>
                })}
        </div>
    )
}
//une liste de TaskView
//Dans chaque TaskView, un bouton update et un bouton delete
//le bouton update t'amène dans une autre page
//Après les opérations update et delete, le state est changé