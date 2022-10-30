import React from 'react'

export default function Subscribe(){
    return(
        <div>
            <h6 className='sectionHeading'>Subscribe</h6>
            <form className='subscribeSection'>
                <h6>Subscribe to our New Stories</h6>
                <input type="text" placeholder="Email Address" />
                <button type="submit"><box-icon name='envelope' color="white" size="20px"></box-icon>Submit</button>
            </form>
        </div>
    )
}