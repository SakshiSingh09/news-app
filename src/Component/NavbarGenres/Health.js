import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Health(){
    const [healthNews, setHealthNews] = useState([]);
    async function getHealthNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=health&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setHealthNews(response.articles);
        console.log(healthNews)
    }
    useEffect(()=>{
        getHealthNews();
    },[]);
    
    if(healthNews !== undefined && healthNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {healthNews.map((health,index) => {
                    return(
                        <Card key={index} headline={health}/>
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