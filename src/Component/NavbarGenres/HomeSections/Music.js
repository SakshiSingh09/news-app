import React from 'react'
import Card from './Card';

export default function Music(props){
    let c = 0;
    if(props.musicHeadlines.length!==0){
        return(
            <>
                <h6 className='sectionHeading'>Music</h6>
                <div className='musicContent'>
                {props.musicHeadlines.map(music => {
                    c++;
                        return(
                            <Card headline={music} count={90} key={c}/>
                        )
                    })}
                </div>
            </>
        )
    }
}
//<Card imageUrl={music.urlToImage} title={music.title} titleUrl={music.url} date={music.publishedAt}/>