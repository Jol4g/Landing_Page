import React from "react";
import {ProgressBar, Spacer, Title} from "../../components";
import './style.css'
const Skills = () =>{
    const skills = [
        {name:'React JS',percent:60},
        {name:'React Native',percent:70},
        {name:'Node JS',percent:30},
        {name:'Express JS',percent:40},
    ]
    return (
        <div id={'skills'} className={'skills'}>
            <Title text={'Skills'} backText={'Skills'} />
            <div className={'container'}>
                <div className={'stats'}>
                    {
                        skills.map(value => (
                            <ProgressBar title={value?.name} percent={value?.percent} />
                        ))
                    }
                </div>
                <Spacer height={30} />
                <div className={'center white middle h2'}>I Am Available For Freelance !</div>
            </div>
        </div>
    )
}

export default Skills
