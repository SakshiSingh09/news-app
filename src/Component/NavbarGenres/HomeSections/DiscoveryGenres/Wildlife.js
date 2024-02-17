import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/not_found.png";

export default function Wildlife(){
    const [wildlifeNews, setWildlifeNews] = useState([]);
    async function getWildlifeNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=wildlife&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setWildlifeNews(response.articles);
    }
    useEffect(()=>{
        getWildlifeNews();
    },[]);
    
    if(wildlifeNews !== undefined && wildlifeNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {wildlifeNews.map((wildlife,index) => {
                    return(
                        <Card key={index} headline={wildlife}/>
                    )
                })}
            </div>
        )
    }else{
        return(
            <img className='errorImg' src={not_found} alt="error-img"/>
        )
    }
}