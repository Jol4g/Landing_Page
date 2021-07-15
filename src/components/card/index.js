import React from "react";

export default ({title,description,img,link}) => {
    return (
        <div
            className={"hover"}
            style={{
            alignItems:'center',
            justifyContent:'center',
            width:200,
            height:180,
            backgroundColor:'#2e2E2E',
                margin:10
        }}
        >
            <img
                src={img}
                alt={title}
                style={{
                    width:200,
                    height:180,
                }}
            />
        </div>
    )
}
