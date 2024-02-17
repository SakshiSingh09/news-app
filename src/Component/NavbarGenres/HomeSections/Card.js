import React from 'react';
import no_img1 from "../../../images/no_img1.jpg";

export default function Card(props){
    const formatDate = (date) => {
        let formattedDate = (date.split("T"))[0];
        return formattedDate;
    }
    const formatTitle = (title) => {
        title = title.length>props.count?title.substring(0,props.count-3)+'...':title;
        return title;
    }
    const setImage = (imageUrl) => {
        return imageUrl === null?no_img1:imageUrl;
    }
    return(
        <div className='card'>
            <div className='card-left'>
                <img src={setImage(props.headline.urlToImage)} alt="img"/>
            </div>
            <div className='card-right'>
                <a href={props.headline.url} target='_blank' rel="noopener noreferrer">{formatTitle(props.headline.title)}</a>
                <p className='description'>{props.headline.description}</p>
                <p className="newsDate">
                    <box-icon name='calendar' size="sm" type='solid' color="#fb4c35" ></box-icon>
                    {props.headline.publishedAt!==null?formatDate(props.headline.publishedAt):null}
                </p>
            </div>
        </div>
    )
}