import React, {useState} from "react";

export default ({title,percent=20}) => {
    const [percentage,setPercentage]= useState(percent)
    return (
        <div style={{padding:10,width:'40%',}}>
            <div style={{display:"flex",flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <p className={'white'}  >{title}</p>
                <p className={'white'} >{percentage+'%'}</p>
            </div>
        <div style={{width:'100%',height:'1em',borderRadius:5,border:'solid 0px ',background:'#2e2e2e'}}>
                <div id="myBar" style={{background:'gold',borderRadius:5,height:'100%',width:percentage+'%',}} />
        </div>
        </div>
    )
}
