import React from "react";
import {Card, Title} from "../../components";
import TrakingImg from '../../assets/images/logo.png'
const Portfolio = () => {

    const list = [
        {
            title:'Trackini',
            description:'An application that provides vehicle services for real-time tracking and signal notification',
            img:TrakingImg
        },
        {
            title:'Arqam — Buy, Rent or Get for Free',
            description:'Arqam is a Saudi platform that acts as an intermediary concerned with exchanging and rotating books between individuals to spread reading and knowledge',
            img:'https://maroof.sa//app/businesses/Tmp/attachment_142030.jpg',
            link:'https://arqam-sa.com/'
        }
    ]
    return (
        <div id={"portfolio"} className={'portfolio'}>
            <div className={'container-darker'}>
                <Title text={'Portfolio'} backText={'Portfolio'}/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    {list?.map(obj=> <Card
                        title={obj?.title}
                        description={obj?.description}
                        img={obj?.img}
                        link={obj?.link}
                    />)}
                </div>

            </div>
        </div>
    )
}

export default Portfolio
