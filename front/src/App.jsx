import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Create from './Pages/Create';
import Film from './Pages/Film';
import Home from './Pages/Home'
import routes from './routes'

function App() {
  console.log(routes)
  return (
    <Router>
    <div>
      <nav>
        <ul>
          {routes.map(({ title, to, meta }, index) => {
            return meta.inMenu ? <li key={index}>
              <Link to={to}>{title}</Link>
            </li> : null}
          )}
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/film/:id">
          <Film />
        </Route> 
        <Route path="/create">
          <Create />
        </Route> 
      </Switch>
    </div>
  </Router>
  )
}

export default App
