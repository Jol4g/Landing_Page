import React from "react";
import './style.css'

export default ({text,backText,color})=> {
    return (
    <div className={'title-container'}>
        <span className={'title-back'}>{backText}</span>
        <span className={'title'}>{text}</span>
    </div>
    )
}
