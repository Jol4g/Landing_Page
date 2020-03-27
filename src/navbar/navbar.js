import React from 'react'
import {Layout, Header, Navigation,Switch} from 'react-mdl'
import { Link } from "react-router-dom";

class Navbar extends React.Component{


    render(){
        return(
         <div style={{height: '100px', position: 'fixed' ,top:'0',left:'0',width:'100%'}} >
        <Layout>
            <Header transparent title="JOL4G" style={{color: 'white'}}>
                <Navigation>
                <Switch  ripple id="switch1"  defaultChecked></Switch>
                    <Link to="/" >Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
        </Layout>
       </div>
       )
    
}}
export default Navbar;
