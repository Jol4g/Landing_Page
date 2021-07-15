import React from "react";
import {Title} from "../../components";
import './style.css'
const Contact = () => {
    return (
        <div id={'contact'} className={'contact'}>
            <div className={'container-yellow'}>
                <a href={'#about-me'}><Title  backText="Contact Me"  /></a>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignSelf:'center',color:'white'}}>
                Made with <span role={'img'} aria-label={"heart"}> ❤️ </span>for sure by me
            </div>
        </div>
    )
}

export default Contact
