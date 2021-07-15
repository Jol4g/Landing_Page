import React from "react";
import {SocialMedia, Spacer, Title} from "../../components";
import './style.css'
import MyIMG from '../../assets/images/myphoto.jpeg'
export default () => {

    //const MyIMG ="https://images.pexels.com/photos/5333094/pexels-photo-5333094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    return (
        <div id={'about-me'} className={'about-me'}>
            <div className={'container-darker'}>
                <Title text={'about me'} backText={'about'} />
                <div className={'row center'} >
                    <div style={{position:'relative'}}>
                        <div className={'rectangle'}/>
                        <img alt={'me'} title={'Fedi Sarray'}  className={'photo'} src={MyIMG}/>
                    </div>
                    <div className={'section'}>
                        <p className={'white text text-2'}>My name is <span className={'yellow'}>Fedi Sarray</span></p>
                        <p className={'white text'}>
                            I graduated from faculty of sciences of Monastir; since 2021; with computer science degree {<br/>}
                            At this time, I self learn in front-end and have a firm knowledge of HTML,
                            CSS, JavaScript and <b>React JS <span role={'img'}  aria-label={"react"}>⚛️</span></b>as library. {<br/>}
                            and interested in <b>mobile</b> development with<b> React Native <span role={'img'} aria-label={"react"}>⚛</span></b>
                            and possess a good knowledge of computer software packages
                            (frameworks and tools) that are used in today’s technology.{<br/>}{<br/>}

                            I had the opportunity to be recruited in the enterprise in which i had internship {<br/>}
                            joined the professional life.{<br/>}
                            On a personal level, I am highly-motivated, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.
                        </p>
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
                                    height:'100px'}}>
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
                            height:'100px'}}>
                        {[{sub:'Phone',value:'+21650264852'},{sub:'Email',value:'fedisarray@gmail.com'}]
                            .map(
                                (obj)=><div  style={{alignItems:'center'}} className={'column center'}>
                            <span className={'subtitle'}>{obj?.sub}</span>
                            <span className={'white text-2'}>{obj?.value}</span>
                                    <Spacer height={10}/>
                                </div>)}
                        </div>
                    </div>
                        <Spacer height={10}/>
                        <div className={'education'}>
                            <span className={'subtitle'}>Education</span>
                            <span className={'white text-3 text-center'}>
                                Basic Bachelor of Computer Science {<br/>}
                                in Faculty of Sciences of Monastir,
                                Monastir University.
                            </span>
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
