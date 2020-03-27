import React from 'react'
import './About.css'
class About extends React.Component{
    render(){
        return(
            <div className="abt">
                <div className="title">About</div>
                <div className="card1"> 
                <h1 id="name">Fedi Sarray</h1>
                    <p>
                A Computer Science Student<br/>
            in Faculty of Sciences of Monastir<br/>
            from Kebili,Tunisia.
                    </p>
                </div>
                <div className="card21"></div>
                <div className="card2">
                <div className="card3">
                <h1>Projects</h1> 
                <h4>Advice App:</h4><p> a Web App thats tell you Random adevices</p>
                <h4>Landinng Page:</h4><p> a Web Portfolio created with React JS Library</p>
                <h4>Unknwon:</h4><p>Comming Soon!</p>
                </div>
                </div>
               
            </div>
        )
    }
}
export default About;