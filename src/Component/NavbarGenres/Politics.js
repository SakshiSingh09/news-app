import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Politics(){
    const [politicsNews, setPoliticsNews] = useState([]);
    async function getPoliticsNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=politics&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setPoliticsNews(response.articles);
    }
    useEffect(()=>{
        getPoliticsNews();
    },[]);
    
    if(politicsNews !== undefined && politicsNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {politicsNews.map(politics => {
                    return(
                        <Card headline={politics}/>
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