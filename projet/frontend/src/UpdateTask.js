
import { useState } from "react"

function onSubmit() {
    console.log("submit")
}

function UpdateTask() {

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
    

    return(
        <form onSubmit={onSubmit}>
        <b>
    <label htmlFor="Title" style={{color:"whitesmoke"}}>Title :</label>
    <br/>
    <input id="Title" type="text" name="title" onChange={HandleChange}></input><br/><br/>
    

    <label htmlFor="Description" style={{color:"whitesmoke",}} >Description :</label>
    <br/>
    <input id="Description" type="text" name="description" onChange={HandleChange}></input><br/><br/>


    <label htmlFor="Title" style={{color:"whitesmoke"}}>Done :</label>
    <input id="Done" type="checkbox" name="isDone" onChange={HandleChange}></input><br/><br/>
    

    <input id="Submit" type="submit" value="Update Task" style={{color:"whitesmoke", backgroundColor:"#43223b",borderRadius:"10px"}} onChange={HandleChange}></input>
    </b>
    </form>
    )
}

export default UpdateTask