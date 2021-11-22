import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

import Home from './components/Home/Home';
import LoginModal from './components/LoginModal/LoginModal';
import Footer from './components/Footer/Footer';
import FormControl from './components/FormControl/FormControl';

import Test from './components/NavBar/Test';
import AdminNavBar from './components/NavBar/AdminNavBar';
import { useState , useEffect } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import AdminLogin from './components/AdminLogin/AdminLogin';
import UserHome from './components/UserHome/UserHome';

function App() {


  const [ isUserLoggedIn, setUserLoggedIn ] = useState(false);
  const [ isLoggedIn, setLoggedIn ] = useState(false);



    // window.location.reload();

      // useEffect(()=>{
      //   setLoggedIn(true);
      // },[]);



  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            {
              isLoggedIn===false && isUserLoggedIn===false ? 
              <LoginPage isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></LoginPage>
              : isUserLoggedIn===true ? 
              <UserHome></UserHome> :
               isLoggedIn === true ?
              <AdminNavBar></AdminNavBar> :
              <App></App>
            }
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
