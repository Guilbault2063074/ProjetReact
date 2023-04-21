//juste un bouton pour delete dans readtask
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function DeleteTask(){
    const {id} = useParams();
    const navigate = useNavigate(); 

    const handleClick = () =>{
        axios.post("http://localhost:3001/tasks/deleteTask/"+id); 
        navigate("/Tasks")
    }

    return(
            <button style={{backgroundColor:"inherit",borderRadius:"inherit"}} onClick={handleClick}>Delete this Task</button>
        
    )
}

export default DeleteTask