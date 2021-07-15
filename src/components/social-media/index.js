import React from "react";
import './style.css'

export default ()=>{
    const social = [
        {icon:'github',name:'Github',link:'https://github.com/Jol4g/'},
        {icon:'dev',name:'DEV',link:'https://dev.to/fedi_sarray'},
        {icon:'linkedin',name:'LinkedIn',link:'https://www.linkedin.com/in/fedisarray/'},
        {icon:'twitter',name:'Twitter',link:'https://twitter.com/fedi_sarray'}

    ]
    return social.map(obj=>{
            return (
                <a className={'social'} href={obj.link}>
                    <i className={"fab fa-" + obj.icon} style={{fontSize:30,margin:10}}></i>
                </a>
            )
        })
}
