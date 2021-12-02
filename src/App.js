import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Home from './components/Home/Home';
import AdminNavBar from './components/NavBar/AdminNavBar';
import { useState , } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import UserHome from './components/UserHome/UserHome';

function App() {


  const [ isUserLoggedIn, setUserLoggedIn ] = useState(false);
  const [ isLoggedIn, setLoggedIn ] = useState(true);


  function adminLoginAuth(value){
    setLoggedIn(value);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            {
              isLoggedIn===false && isUserLoggedIn===false ? 
              <LoginPage adminLoginAuth={adminLoginAuth} isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></LoginPage>
              : isUserLoggedIn===true ? 
              <UserHome></UserHome> :
               isLoggedIn === true ?
              <AdminNavBar></AdminNavBar> :
              <App></App>
            }



          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
