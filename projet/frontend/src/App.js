import { BrowserRouter, Link } from 'react-router-dom';
import './App.css'
import RouteComponent from "./routes";

function App() {
  document.body.style = 'background: #2e1832;';
  return (
    <BrowserRouter>
    <div>
      

      <ul>
          <li><Link to="/">Create a Task</Link></li>
          <li><Link to="/Tasks">List all Tasks</Link></li>
        </ul>


        <RouteComponent>
        </RouteComponent>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
