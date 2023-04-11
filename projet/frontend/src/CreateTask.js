import useState from "react"

const CreateTask = () => {
    
    const [currentTask, setTask] = useState({
        title: "",
        description: "",
        isDone:"",
        id:"",
    })

    const handleTitleChange = (event) => {console.log(event.target.value)}
    return(
        <form>
            <b>
        <label htmlFor="Title" style={{color:"whitesmoke"}} onChange={handleTitleChange}>Title :</label>
        <br/>
        <input id="Title" type="text"></input><br/><br/>
        

        <label htmlFor="Description" style={{color:"whitesmoke",}}>Description :</label>
        <br/>
        <input id="Description" type="text"></input><br/><br/>


        <label htmlFor="Title" style={{color:"whitesmoke"}}>Done :</label>
        <input id="Done" type="checkbox"></input><br/><br/>
        

        <input id="Submit" type="submit" value="Submit Task" style={{color:"whitesmoke", backgroundColor:"#43223b"}}></input>
        </b>
        </form>
        
    )
}

export default CreateTask