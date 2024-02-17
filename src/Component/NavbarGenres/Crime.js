import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Crime(){
    const [crimeNews, setCrimeNews] = useState([]);
    let count = 0;
    async function getCrimeNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=crime&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setCrimeNews(response.articles);
    }
    useEffect(()=>{
        getCrimeNews();
    },[]);
    
    if(crimeNews !== undefined && crimeNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {crimeNews.map((crime,index) => {
                    count++;
                    return(
                        <Card headline={crime} key={count}/>
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