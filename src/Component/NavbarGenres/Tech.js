import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Tech(){
    const [techNews, setTechNews] = useState([]);
    async function getTechNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=tech&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setTechNews(response.articles);
    }
    useEffect(()=>{
        getTechNews();
    },[]);
    
    if(techNews !== undefined && techNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {techNews.map(tech => {
                    return(
                        <Card headline={tech}/>
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