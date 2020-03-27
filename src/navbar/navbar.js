import React from 'react'
import {Layout, Header, Navigation} from 'react-mdl'
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
         <div style={{height: '100px', position: 'relative' }} >
        <Layout>
            <Header transparent title="JOL4G" style={{color: 'white'}}>
                <Navigation>
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
