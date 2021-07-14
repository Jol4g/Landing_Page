import React from "react";
import {Navbar} from "../../components";
import './style.css'
export default () => {
    return (
        <div className={'page-one'}>
            <Navbar/>
            <div className={'container'}>
                <span className={'pre-post'}>I'm a</span>
                <br/>
                <span className={'post'}>FULLSTACK <span className={'js-brand'}>JS</span></span>
                <br/>
                <span className={'post'}>DEVELOPER .</span>
                <span className={'text-background'}>developer</span>
            </div>
        </div>
    )
}
