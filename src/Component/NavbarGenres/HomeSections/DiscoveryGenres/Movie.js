import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/not_found.png";

export default function Movie(){
    const [movieNews, setMovieNews] = useState([]);
    async function getMovieNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=movie&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setMovieNews(response.articles);
    }
    useEffect(()=>{
        getMovieNews();
    },[]);
    
    if(movieNews !== undefined && movieNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {movieNews.map(movie => {
                    return(
                        <Card headline={movie}/>
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