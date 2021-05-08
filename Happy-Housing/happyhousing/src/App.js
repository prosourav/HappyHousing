import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Cpmponents/Home/Home/Home";
import Login from "./Cpmponents/Login/Login";
import SignIn from "./Cpmponents/SignIn/SignIn";
import Dashboard from "./Cpmponents/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Cpmponents/PrivateRoute/PrivateRoute";
import AddService from "./Cpmponents/Dashboard/AddService/AddService";
import AddProject from "./Cpmponents/Dashboard/AddProject/AddProject";
import Addreview from "./Cpmponents/Dashboard/Addreview/Addreview";
import AddToTeam from "./Cpmponents/Dashboard/AddToTeam/AddToTeam";
import ContactMessege from "./Cpmponents/Dashboard/ContactMessage/ContactMessege";
import Checkout from "./Cpmponents/Dashboard/Checkout/Checkout";
import ManageOrder from "./Cpmponents/Dashboard/ManageOrder/ManageOrder";


export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    name:'',
    email:'',
    isLoggedIn:false,
    photoURL:''
  });
  return (
    <userContext.Provider value= {[loggedInUser,setLoggedInUser]}>
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route path='/home'>
      <Home></Home>
      </Route>
      <Route path='/login'>
      <Login/>
      </Route>
      <Route path='/signup'>
      <SignIn/>
      </Route>
      <PrivateRoute path='/admin/addService'>
      <AddService/>
      </PrivateRoute>
      <PrivateRoute path='/admin/projects'>
      <AddProject/>
      </PrivateRoute>
      <PrivateRoute path='/admin/addAdmin'>
      <AddToTeam/>
      </PrivateRoute>
      <PrivateRoute path='/admin/manageOrders'>
      <ManageOrder/>
      </PrivateRoute>
      <PrivateRoute path='/admin/readContact'>
      <ContactMessege/>
      </PrivateRoute>
      <Route path='/addReview'>
      <Addreview/>
      </Route>
      <PrivateRoute path='/dashboard'>
      <Dashboard/>
      </PrivateRoute>
      <PrivateRoute path='/service/:Id'>
      <Checkout/>
      </PrivateRoute>

      <Route path='*'>
      <h1>Oops...Page Not Found!!</h1>
      </Route>
      
      </Switch>
    </div>
    </Router>
    </userContext.Provider>
  );
}

export default App;
