import react from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import {useNaviguate, useParams} from "react-router-dom"


function updateTask(){
    let nav = useNaviguate();
    let {taskId} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    

    return(
        <div>
            <h1>Update a task</h1>
            {title &&
            <div>
                <label>
                Title : 
                <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>
            </label>
            <br/>
            <label>
                Description : 
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
            </label>
            <br/>
            <label>
                Status : 
                <input type="text" value={status} onChange={event => setStatus(event.target.value)}/>
            </label>
            <br/>
            <button type="update" onClick={update}>Update</button>
            </div>}
        </div>
    )
}
