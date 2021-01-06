import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <Router>
    <div className="app">
      <Sidebar />       
          <Switch>
            <Route exact path='/buttons'>
              <Main/>
           </Route> 
           <Route exact path='/'>
              <Main/>
          </Route> 
        </Switch>       
      </div>       
    </Router>  
  );
}

export default App;
