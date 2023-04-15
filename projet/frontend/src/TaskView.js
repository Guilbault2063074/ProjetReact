//afficheur de 1 task

const TaskView = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.status}</p>
        </div>
    )
}