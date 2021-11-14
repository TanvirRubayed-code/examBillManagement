import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Home from './components/Home/Home';
import LoginModal from './components/LoginModal/LoginModal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <LoginModal></LoginModal>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
