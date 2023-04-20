
import { useState } from "react"

const update = () => {console.log("a")}

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
        <div>
            <h1>Update a task</h1>
           
            <div>
                <label>
                Title : 
                <input type="text" onChange={HandleChange}/>
            </label>
            <br/>
            <label>
                Description : 
                <input type="text"  onChange={HandleChange} />
            </label>
            <br/>
            <label>
                Status : 
                <input type="checkbox"  onChange={HandleChange}/>
            </label>
            <br/>
            <button type="button" onClick={update}>Update</button>
            </div>
        </div>
    )
}

export default UpdateTask