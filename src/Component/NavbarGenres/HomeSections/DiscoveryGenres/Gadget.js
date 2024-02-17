import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/not_found.png";

export default function Gadget(){
    const [gadgetNews, setGadgetNews] = useState([]);
    async function getGadgetNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=gadget&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(response => response.json());
        setGadgetNews(response.articles);
    }
    useEffect(()=>{
        getGadgetNews();
    },[]);
    
    if(gadgetNews !== undefined && gadgetNews.length !== 0){
        return(
            <div className='navbarPagesContent'>
                {gadgetNews.map((gadget,index) => {
                    return(
                        <Card key={index} headline={gadget}/>
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