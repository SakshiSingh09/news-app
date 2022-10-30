import React from 'react';
import no_img1 from "../../../images/no_img1.jpg";

export default function LifeStyleCard(props){
    const formatDate = (date) => {
        let formattedDate = (date.split("T"))[0];
        return formattedDate;
    }
    const formatTitle = (title) => {
        title = title.length>50?title.substring(0,47)+'...':title;
        return title;
    }
    const setImage = (imageUrl) => {
        return imageUrl === null?no_img1:imageUrl;
    }
    return(
        <div>
            <img src={setImage(props.image)} alt="img"/>
            <p style={{marginTop: "10px"}}>{formatTitle(props.title)}</p>
            <p>{props.date!==undefined?formatDate(props.date):null}</p>
        </div>
    )
}