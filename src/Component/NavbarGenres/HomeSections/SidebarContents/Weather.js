import React, { useEffect, useState } from 'react'

export default function Weather(){
    const [weather, setWeather] = useState([]);
    async function getWeather(){
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=740d4f0694fef87c19ada67d30442235';
        let res = await fetch(url).then(response => response.json());
        setWeather(res);
    }
    function getIcon(weather){
        let icon = weather.weather[0].icon;
        let imgUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        return imgUrl;
    }
    useEffect(()=>{
        getWeather();
    },[])
    if(weather.length !== 0){
        return(
            <div>
                <h6 className='sectionHeading'>Weather</h6>
                <div className='weather'>
                    <h5>{weather.name}</h5>
                    <div className='weatherTop'>
                        <h6>{weather.main.temp}</h6>
                        <img src={getIcon(weather)} alt="icon" />
                    </div>
                    <div className='weatherBottom'>
                        <section className='weatherBottomSection'><box-icon type='solid' name='chevrons-up'></box-icon><p>{weather!==null?weather.main.temp_max:null}</p></section>
                        <section className='weatherBottomSection'><box-icon type='solid' name='chevrons-down'></box-icon><p>{weather!==null?weather.main.temp_min:null}</p></section>
                    </div>
                </div>
            </div>
        )
    }
}
//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=740d4f0694fef87c19ada67d30442235