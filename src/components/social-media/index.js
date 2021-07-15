import React from "react";
import './style.css'

export default ()=>{
    const social = [
        {icon:'github',name:'Github',link:''},
        {icon:'dev',name:'DEV',link:''},
        {icon:'linkedin',name:'LinkedIn',link:''},
        {icon:'twitter',name:'Twitter',link:''}

    ]
    return social.map(obj=>{
            return (
                <a className={'social'} href={obj.link}>
                    <i className={"fab fa-" + obj.icon} style={{fontSize:30,margin:10}}></i>
                </a>
            )
        })
}
