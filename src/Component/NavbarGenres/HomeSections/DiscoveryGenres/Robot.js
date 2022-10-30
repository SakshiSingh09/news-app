import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/not_found.png";

export default function Robot(){
    const [robotNews, setRobotNews] = useState([]);
    async function getRobotNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=robot&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setRobotNews(response.articles);
    }
    useEffect(()=>{
        getRobotNews();
    },[]);
    
    if(robotNews !== undefined && robotNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {robotNews.map(robot => {
                    return(
                        <Card headline={robot}/>
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