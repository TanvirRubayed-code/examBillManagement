import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
