import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Sports(){
    const [sportsNews, setSportsNews] = useState([]);
    async function getSportsNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=sports&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setSportsNews(response.articles);
    }
    useEffect(()=>{
        getSportsNews();
    },[]);
    
    if(sportsNews !== undefined && sportsNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {sportsNews.map((sports,index) => {
                    return(
                        <Card key={index} headline={sports}/>
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