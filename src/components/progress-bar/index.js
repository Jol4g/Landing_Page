import React, {useEffect, useState} from "react";

export default ({title,percent}) => {
    const [percentage,setPercentage]= useState(0)
    useEffect(()=>{
        const id = setInterval(frame,10 )
        function frame() {
                setPercentage(p=> {
                    if(p>=percent){
                        clearInterval(id)
                        return p
                    }else {
                        return p + 1
                    }

                })
        }
    },
    // eslint-disable-next-line
     [])
    return (
        <div style={{padding:10,width:'40%',}}>
            <div style={{display:"flex",flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <p className={'white'}  >{title}</p>
                <p className={'white'} >{percentage+'%'}</p>
            </div>
        <div style={{width:'100%',height:'1em',borderRadius:5,border:'solid 0px ',background:'#2e2e2e',transition:'ease'}}>
                <div id="myBar" style={{
                    background:'gold',
                    borderRadius:5,height:'100%',width:percentage+'%',transition:'.1s ease',}} />
        </div>
        </div>
    )
}
