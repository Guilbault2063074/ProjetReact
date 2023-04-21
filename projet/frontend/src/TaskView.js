//afficheur de 1 task

import { useNavigate } from "react-router";


function GoToUpdate() {
    
}

const TaskView = (props)=>{
    const navigate = useNavigate(); 
    return(
        <div style={{backgroundColor:"purple", marginLeft:"200px",marginRight:"200px",padding:"10px",textAlign:"left", borderRadius:"15px"}}>
            <u style={{color:"whitesmoke"}}><h2>{props.title}</h2>
            <h4 style={{margin:"0px"}}>Description</h4></u>
            <p style={{marginTop:"2px"}}>{props.description}</p>
            <p><b><u>Status</u>:</b> {(props.isDone == "on") ? "Done" : "In Progress"}</p>
            <button style={{backgroundColor:"purple",borderRadius:"10px"}} onClick={navigate("/UpdateTask")}>Update this Task</button>
        </div>
    )
}

export default TaskView