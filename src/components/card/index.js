import React from "react";
import './style.css'
export default ({title,description,img,link}) => {
    return (
        <a style={{textDecorationLine:'none',width:'30%'}} href={link}>
        <div
            className={"hover"}
            style={{
                position:'relative',
            alignItems:'center',
            justifyContent:'center', margin:10,
        }}
        >
                <img
                src={img}
                alt={title}
                style={{
                    borderRadius:5,
                    width:150,
                    height:140,
                    zIndex:0
                }}
            />
            <div style={{marginTop:10,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <span className={'white text-center'}  >{title}</span>
            <br/>
                <span className={'white text-center'} style={{fontSize:12}}>{description}</span>
            </div>
        </div>
        </a>
    )
}
