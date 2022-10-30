import React from 'react';

export default function SocialMedia(){
    return(
        <div>
            <h6 className='sectionHeading'>Stay Connected</h6>
            <div className='socialMedia' style={{backgroundColor: '#3b5998'}}>
                <box-icon type='logo' color="white" name='facebook'></box-icon>
                <h6>12,7400 Likes</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#c8232c'}}>
                <box-icon name='pinterest-alt' color="white"  type='logo' ></box-icon>
                <h6>5,600 Fans</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#5851DB'}}>
                <box-icon type='logo' name='instagram-alt' color="white" ></box-icon>
                <h6>8,700 Followers</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: ' #1D9BF0'}}>
                <box-icon name='twitter' type='logo' color="white"  ></box-icon>
                <h6>22,700 Followers</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#c4302b'}}>
                <box-icon name='youtube' type='logo' color="white"  ></box-icon>
                <h6>2,700 Subscribers</h6>
            </div>
        </div>
    )
}