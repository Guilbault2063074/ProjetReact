//afficheur de 1 task
import { useNavigate } from "react-router";



const TaskView = (props)=>{
    const navigate = useNavigate(); 
    function handleClick() {navigate("/UpdateTask/"+props.id)}


    return(
        <div style={(props.isDone === "off") ? {backgroundColor:"#a3528f", marginLeft:"200px",marginRight:"200px",padding:"10px",textAlign:"left", borderRadius:"15px", marginBottom:"10px"}:{backgroundColor:"#542C5C", marginLeft:"200px",marginRight:"200px",padding:"10px",textAlign:"left", borderRadius:"15px",marginBottom:"10px"}}>
            <u style={{color:"whitesmoke"}}><h2>{props.title}</h2>
            <h4 style={{margin:"0px"}}>Description</h4></u>
            <p style={{marginTop:"2px"}}>{props.description}</p>
            <p><b><u>Status</u>:</b> {(props.isDone === "on") ? "Done" : "In Progress"}</p>
            <button style={(props.isDone === "off") ? {backgroundColor:"#a3528f",borderRadius:"10px"}:{backgroundColor:"#542c5c",borderRadius:"10px"}} onClick={handleClick}>Update this Task</button>
        </div>
    )
}

export default TaskView