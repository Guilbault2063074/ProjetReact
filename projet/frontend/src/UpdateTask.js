import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { useParams } from "react-router-dom"

function onSubmit() {
    console.log("submit")
}

function UpdateTask() {
    const id = useParams();
    useEffect(() =>{
        
        var updatabledata = {}
        axios.get("http://localhost:3001/tasks/"+id)
        .then((resp) => updatabledata = resp.data)})


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
    
 
    
    const navigate = useNavigate(); 
    function handleClick() {navigate("/Tasks")}

    return(
        <form onSubmit={onSubmit} style={{backgroundColor:"#a3528f", marginLeft:"230px",marginRight:"230px",padding:"10px", borderRadius:"15px", marginBottom:"10px"}}>
        <b>
    <label htmlFor="Title" style={{color:"whitesmoke"}}>Title :</label>
    <br/>
    <input id="Title" type="text" name="title" onChange={HandleChange}></input><br/><br/>
    

    <label htmlFor="Description" style={{color:"whitesmoke",}} >Description :</label>
    <br/>
    <input id="Description" type="text" name="description" onChange={HandleChange}></input><br/><br/>


    <label htmlFor="Title" style={{color:"whitesmoke"}}>Done :</label>
    <input id="Done" type="checkbox" name="isDone" onChange={HandleChange}></input><br/><br/>
    

    <input id="Submit" type="submit" value="Update Task" style={{color:"whitesmoke", backgroundColor:"#a3528f",borderRadius:"10px"}} onChange={HandleChange}></input>

    <br></br>
    <button style={{color:"whitesmoke", backgroundColor:"#a3528f",borderRadius:"10px", marginTop:"10px", fontSize:"medium"}} onClick={handleClick}>Back</button>
    </b>
    </form>
    )
}

export default UpdateTask