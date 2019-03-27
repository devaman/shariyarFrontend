import React, { Component } from "react";
import Appi from './containers/APP/App'
import { Route, Switch } from 'react-router-dom'
import Home from "./containers/Home/Home";
class App extends Component {
 
  render() {
    return (

      <Switch>

        <Route path='/home' exact component={Home} />
        <Route path='/' exact component={Appi} />

      </Switch>
    );
  }
}

export default App;
