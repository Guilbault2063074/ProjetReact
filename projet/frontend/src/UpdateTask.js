import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { useParams } from "react-router-dom"



function UpdateTask() {
    const {id} = useParams();
    const navigate = useNavigate(); 

    useEffect(() =>{
        axios.get("http://localhost:3001/tasks/"+id)
        .then(
            (resp) => {(setTask(resp.data))}
            )
    },[])
    
    const onSubmit = async(event) => {
        event.preventDefault();
        await axios.put("http://localhost:3001/tasks/updateTask/"+id,currentTask);
        navigate("/Tasks")
    }

    const [currentTask, setTask] = useState({
        title: "",
        description: "",
        isDone:"",
        id:"",
    })
    
    const HandleChange = (event) => {
        const { name, value } = event.target;
        setTask({...currentTask, [name]: value });
    }

    const HandleBoxChange = (event) => {
        const { name, checked } = event.target;
        setTask({...currentTask, [name]: checked });
    }

    
    function handleBackClick() {navigate("/Tasks")}

    return(
        <div style={{backgroundColor:"#a3528f", marginLeft:"30%",marginRight:"30%",padding:"10px", borderRadius:"15px", marginBottom:"10px"}}>
        <form onSubmit={onSubmit} >
        <b>
    <label htmlFor="Title" style={{color:"whitesmoke"}}>Title :</label>
    <br/>
    <input id="Title" type="text" name="title" value={currentTask.title} onChange={HandleChange}></input><br/><br/>
    

    <label htmlFor="Description" style={{color:"whitesmoke",}} >Description :</label>
    <br/>
    <input id="Description" type="text" name="description" value={currentTask.description} onChange={HandleChange}></input><br/><br/>


    <label htmlFor="isDone" style={{color:"whitesmoke"}}>Done :</label>
    <input id="isDone" type="checkbox" name="isDone" checked={currentTask.isDone} onChange={HandleBoxChange}></input><br/><br/>
    

    <input id="Submit" type="submit" value="Update Task" style={{color:"whitesmoke", backgroundColor:"#a3528f",borderRadius:"10px"}} onChange={HandleChange}></input>

    <br></br>
    <button style={{color:"whitesmoke", backgroundColor:"#a3528f",borderRadius:"10px", marginTop:"10px", fontSize:"medium"}} onClick={handleBackClick}>Back</button>
    </b>
    </form>
    </div>
    )
}

export default UpdateTask