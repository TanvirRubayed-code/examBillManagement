import logo from './logo.svg';
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

function App() {



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
              isLoggedIn ? <AdminNavBar></AdminNavBar> : <LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></LoginPage>
            }
            {/* <LoginPage></LoginPage>
            <AdminNavBar></AdminNavBar> */}
            <Footer></Footer>
            {/* <FormControl></FormControl> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
