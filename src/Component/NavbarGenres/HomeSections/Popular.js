import React from 'react'
import Card from "./Card";

export default function Popular(props){
    let c = 0;
    if(props.popularHeadlines.length !== 0){
        return(
            <>
            <h6 className='sectionHeading'>Popular</h6>
            <div className='popularContent'>
                {props.popularHeadlines.map((headline) => { 
                    c++;
                    return( 
                        <Card headline={headline} count={50} key={c}/>
                    )
                })}
            </div>
            </>
        )
    }
}