import React, { useEffect, useState } from 'react'
import Card from '../Card';
import not_found from "../../../../images/no_img1.jpg";

export default function TwitterTrends(){
    const [twitterTrendsNews, setTwitterTrendsNews] = useState([]);
    async function getTwitterTrendsNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=twitter&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9&pageSize=5";
        let response = await fetch(url).then(response => response.json());
        setTwitterTrendsNews(response.articles);
    }
    useEffect(()=>{
        getTwitterTrendsNews();
    },[]);
    let c = 0;
    if(twitterTrendsNews !== undefined && twitterTrendsNews.length !== 0){
        return(
            <div className='twitterContent'>
            <h6 className='sectionHeading'>Twitter Trends</h6>
                {twitterTrendsNews.map(TwitterTrends => {
                    c++;
                    return(
                        <Card headline={TwitterTrends} count={30} key={c}/>
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