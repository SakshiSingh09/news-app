import React, { useEffect, useState } from 'react'
import Card from './HomeSections/Card';
import not_found from "../../images/not_found.png";

export default function Fashion(){
    const [fashionNews, setFashionNews] = useState([]);
    async function getFashionNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=fashion&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setFashionNews(response.articles);
    }
    useEffect(()=>{
        getFashionNews();
    },[]);
    
    if(fashionNews !== undefined && fashionNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {fashionNews.map((fashion,index) => {
                    return(
                        <Card key={index} headline={fashion}/>
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