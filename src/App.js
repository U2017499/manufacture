import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo1 from './logo1.jpeg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import gradient from './components/gradient.png'
import bg from './components/bg.jpg'
import Login from "./components/login";
import ProEntry from "./components/pe";
import Sales from './components/salesrecord'
import Mp from './components/mp'


function App() {
  return (
  <Router>
      <div className = "container-fluid">
    <div className="App" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img className="navbar-brand" src={logo1} style={{width:100, marginTop: -7}} alt = "logo"/>
        </div>
      </nav>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/productentry" component={ProEntry} />
            <Route path="/salesrecord" component={Sales} />
            <Route path="/manufactureproduct" component={Mp} />
            
          </Switch>
          
    </div>
    </div>
    </Router>

  
  );
}

export default App;