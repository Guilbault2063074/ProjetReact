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
            <h1>Update the selected task</h1>
            {title && 
            <div>
                <label></label>
            <div/>
            }
        </div>
    )
}
