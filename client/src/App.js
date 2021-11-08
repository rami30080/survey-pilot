import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './View/Home/Home';
import {Submitted} from './View/Submitted/Submitted'

function App(){



    return (
      <Router>
      <Switch>
      <Route path="/Submitted">
          <Submitted/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
      </Router>
    );
  
}

export default App;