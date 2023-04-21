import CreateTask from "./CreateTask"
import ReadTask from "./ReadTasks"
import { Route, Routes } from "react-router"
import UpdateTask from "./UpdateTask"


const RouteComponent = () => (
    <Routes>
        <Route path="/" element={<CreateTask/>}/>
        <Route path="/Tasks" element={<ReadTask/>}/>
        <Route path="/UpdateTask/:id" element={<UpdateTask/>}/>
    </Routes>
)

export default RouteComponent