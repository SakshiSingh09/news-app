import React, { useEffect, useState } from "react"
import HomeMainContent from "./HomeSections/HomeMainContent.js"
import LeftContent from "./HomeSections/LeftNewsContent.js";
import Sidebar from "./HomeSections/Sidebar.js";

export default function Home(){
    const [topHeadlines, setTopHeadlines] = useState([]);
    
    async function getFeaturedNews(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9&pageSize=6";
        let response = await fetch(url).then(res => res.json());
        setTopHeadlines(response.articles);
    }
    useEffect(()=>{
        getFeaturedNews();
    },[])
    return(
        <div className="mainContent">
            <HomeMainContent topHeadlines={topHeadlines}/>
            <div className="bottomContent">
                <div className="leftContent">
                    <LeftContent />
                </div>
                <div className='rightContent'>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}