import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//views
import Home from './views/Home';
import Cart from './views/Cart';

const App = () => {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
