import CreateTask from "./CreateTask"
import ReadTask from "./ReadTasks"


const RouteComponent = () => (
    <Routes>
        <Route path="/" element={<CreateTask/>}/>
        <Route path="/Tasks" element={<ReadTasks/>}/>
    </Routes>
)

export default RouteComponent