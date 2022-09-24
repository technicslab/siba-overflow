import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter as Router,Switch,Route, Link,useLocation,useHistory,useParams,useRouteMatch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import User from './Components/User'
import TeamsPage from './Components/TeamsPage'
import AboutPage from './Components/AboutPage';
import NeedHelpPage from './Components/NeedHelpPage'
import {useState,useEffect} from 'react'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'

function App() {

    return (
      <>
      <Router>
         <Switch>
            <Route path="/" exact>
               <HomePage />
            </Route>
            
            <Route path="/Teams" excat>
              <TeamsPage />
              </Route>
              <Route path="/About" exact>
                <AboutPage />
              </Route>
              <Route path ="/Help" excat>
                <NeedHelpPage />
              </Route>
              <Route path ="/User" excat>
                <User />
              </Route>
              <Route path ="/Login" excat>
                <LoginPage  />
              </Route>
              <Route path="/Register" exact>
                <RegisterPage />
              </Route>
         </Switch>
      </Router>
    </>
    );
  
  
}

export default App;
