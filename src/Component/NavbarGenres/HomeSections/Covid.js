import React from 'react';
import Card from './Card';

export default function Covid(props){
    let c = 0;
    if(props.covidHeadlines.length !== 0){
        return(
            <>
                <h6 className='sectionHeading'>Covid</h6>
                <div className='covidContent'>
                    {props.covidHeadlines.map(covid => {
                        c++;
                            return(
                                <Card headline={covid} count={80} key={c}/>
                            )
                        })}
                    </div>
            </>
        )
    }else{
        return null;
    }
}