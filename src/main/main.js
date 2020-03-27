import React from 'react'
import {Switch, Route} from 'react-router-dom' 
import Landing from './Landing'
import Contact from './Contact'
const Main = () =>(
  
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;