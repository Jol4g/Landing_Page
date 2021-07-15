import React from "react";
import {Card, Title} from "../../components";

const Portfolio = () => {

    const list = [
        {
            title:'Trackini app',
            description:'Mobile app using React native',
            img:'https://maroof.sa//app/businesses/Tmp/attachment_142030.jpg'
        },
        {
            title:'Arqam',
            description:'web client',
            img:'https://maroof.sa//app/businesses/Tmp/attachment_142030.jpg'
        }
    ]
    return (
        <div id={"portfolio"} className={'portfolio'}>
            <div className={'container-darker'}>
                <Title text={'Portfolio'} backText={'Portfolio'}/>
                <div style={{display:'flex',justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    {list?.map(obj=> <Card
                        title={obj?.title}
                        description={obj?.description}
                        img={obj?.img}
                    />)}
                </div>

            </div>
        </div>
    )
}

export default Portfolio
