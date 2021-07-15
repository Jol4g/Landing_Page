import React from "react";
import {SocialMedia, Spacer, Title} from "../../components";
import './style.css'

export default () => {

    const MyIMG ="https://images.pexels.com/photos/5333094/pexels-photo-5333094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    return (
        <div id={'about-me'} className={'about-me'}>
            <div className={'container-darker'}>
                <Title text={'about me'} backText={'about'} />
                <div className={'row center'} >
                    <div style={{position:'relative'}}>
                        <div className={'rectangle'}/>
                        <img alt={'me'} title={'Fedi Sarray'} className={'photo'} src={MyIMG}/>
                    </div>
                    <div className={'section'}>
                        <p className={'white text text-2'}>My name is <span className={'yellow'}>Fedi Sarray</span></p>
                        <p className={'white text'}>
                        JavaScript developer is responsible for completing the design of applications and software using Java programming language. JavaScript developers work with websites, producing front-end applications, and performing code analysis and overall improvement of style and usability.                        </p>
                        <div
                            style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',}}
                        >

                        <div
                                style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    padding:'0 30px'}}>
                        {[{sub:'Name',value:'Fedi Sarray'},{sub:'Country',value:'Tunisia'}]
                            .map(
                                (obj)=><div style={{alignItems:'center'}} className={'column center'}>
                            <span className={'subtitle'}>{obj?.sub}</span>
                            <span className={'white text-2'}>{obj?.value}</span>
                                    <Spacer height={10}/>
                        </div>)}
                    </div>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            alignItems:'center',
                            padding:'0 30px'}}>
                        {[{sub:'Phone',value:'+21650264852'},{sub:'Email',value:'fedisarray@gmail.com'}]
                            .map(
                                (obj)=><div  style={{alignItems:'center'}} className={'column center'}>
                            <span className={'subtitle'}>{obj?.sub}</span>
                            <span className={'white text-2'}>{obj?.value}</span>
                                    <Spacer height={10}/>
                                </div>)}
                        </div>
                    </div>
                        <div className={'education'}>
                            <span className={'subtitle'}>Education</span>
                            <span className={'white text-3 text-center'}>JavaScript developer is responsible for completing the design of applications and software using Java programming language. JavaScript developers work with websites,</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:"center",margin:10,width:'100%'}}>
                            <SocialMedia/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
