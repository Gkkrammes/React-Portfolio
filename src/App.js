import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Contact from './Pages/Contact';
import Porfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Jumbo from './Components/Jumbotron'
import Skills from './Components/Skills';
import NavBar from './Components/NavBar';

class App extends Component {
render() {
  return (
    <Router>
      <div className="App">

        <NavBar /> 
        <Jumbo />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Porfolio}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/jumbo" component={Jumbo}/>
        </Switch>


      </div>
    </Router>
    );
  }
}

export default App;

