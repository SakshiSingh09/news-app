import React, { useEffect, useState } from 'react';
import Popular from "./Popular.js";
import Music from "./Music.js";
import Covid from './Covid.js';

export default function LeftContent(){
    const [popularHeadlines, setPopularHeadlines] = useState([]);
    const [musicHeadlines, setMusicHeadlines] = useState([]);
    const [covidNews, setCovidNews] = useState([]);
    async function getPopularNews(){
        let url = "https://newsapi.org/v2/top-headlines?q=popular&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9";
        let response = await fetch(url).then(res => res.json());
        setPopularHeadlines(response.articles);
    }
    async function getMusicNews(){
        let url = 'https://newsapi.org/v2/top-headlines?q=music&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9&pageSize=3';
        let responseData = await fetch(url).then(response => response.json()).catch(setMusicHeadlines([]));
        setMusicHeadlines(responseData.articles);
    }
    async function getCovidNews(){
        let url = 'https://newsapi.org/v2/top-headlines?q=covid&sortBy=publishedAt&apiKey=77d30588227f401d8ae9c549d314bff9&pageSize=4';
        let responseData = await fetch(url).then(response => response.json()).catch(setMusicHeadlines([]));
        setCovidNews(responseData.articles);
    }
    useEffect(()=>{
        getPopularNews();
        getMusicNews();
        getCovidNews();
    },[])
    return(
        <>
            <Popular popularHeadlines={popularHeadlines}/>
            <Covid covidHeadlines={covidNews}/>
            <Music musicHeadlines={musicHeadlines}/>
        </>
    )
}