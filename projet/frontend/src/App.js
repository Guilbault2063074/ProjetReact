import CreateTask from "./CreateTask"
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css'

function App() {
  document.body.style = 'background: #43223b;';
  return (
    <BrowserRouter>
    <div>
      

      <ul>
          <li><Link to="/">Create a Task</Link></li>
          <li><Link to="/About">List all Tasks</Link></li>
        </ul>


        <CreateTask></CreateTask>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
