import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/not_found.png";

export default function Game(){
    const [gameNews, setGameNews] = useState([]);
    async function getGameNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=game&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setGameNews(response.articles);
    }
    useEffect(()=>{
        getGameNews();
    },[]);
    
    if(gameNews !== undefined && gameNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {gameNews.map(game => {
                    return(
                        <Card headline={game}/>
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