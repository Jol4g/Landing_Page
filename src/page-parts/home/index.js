import React from "react";
import {Navbar} from "../../components";
import './style.css'
export default () => {
    return (
        <div id={'home'} className={'page-one'}>
            <Navbar/>
            <div className={'container-home'}>
                <span className={'pre-post'}>I'm a</span>
                <br/>
                <span className={'post'}>FULLSTACK <span className={'js-brand'}>JS</span></span>
                <br/>
                <div
                    className={'row'}
                    style={{
                        alignItems:'baseline',
                    }}
                >
                    <div className={'post'}>DEVELOPER </div><div className={'dot'}/>
                </div>
                <span className={'text-background'}>developer</span>
                <a className={'btn-contact-me'} href={'#about-me'}>Contact me</a>
            </div>
        </div>
    )
}
