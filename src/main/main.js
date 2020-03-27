import React from 'react'
import {Switch, Route} from 'react-router-dom' 
import Landing from './Landing'
import Contact from './Contact'
import About from './About'
const Main = () =>(
  
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
 
  </Switch>
)

export default Main;