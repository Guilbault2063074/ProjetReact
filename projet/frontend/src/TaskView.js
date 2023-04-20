//afficheur de 1 task

import { useNavigate } from "react-router";


function GoToUpdate() {
    const navigate = useNavigate(); 
    navigate("/UpdateTask")
}

const TaskView = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.isDone}</p>
            <button onClick={()=>{}}></button>
        </div>
    )
}

export default TaskView