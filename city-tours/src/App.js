import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import About from './Component/About'
import TourList from './Component/TourList'
//import { TransitionGroup, CSSTransition } from "react-transition-group"

class App extends Component {
  render() {

    return (
      <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={TourList} />
              <Route path="/Home" component={Home} />
              <Route path="/About" component={About} />
            </Switch>   
      </div>
    )
  }
}

export default App