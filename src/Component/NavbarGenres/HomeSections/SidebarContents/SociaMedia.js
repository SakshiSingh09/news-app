import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaFacebookF } from "react-icons/fa";

export default function SocialMedia(){
    return(
        <div>
            <h6 className='sectionHeading'>Stay Connected</h6>
            <div className='socialMedia' style={{backgroundColor: '#3b5998'}}>
                <FaFacebookF color="white" className='icon'/>
                <h6>12,7400 Likes</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#c8232c'}}>
                <FaPinterestP color="white" className='icon'/>
                <h6>5,600 Fans</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#5851DB'}}>
                <FaInstagram color="white" className='icon'/>
                <h6>8,700 Followers</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: ' #1D9BF0'}}>
                <FaTwitter color="white" className='icon'/>
                <h6>22,700 Followers</h6>
            </div>
            <div className='socialMedia' style={{backgroundColor: '#c4302b'}}>
                <FaYoutube color="white" className='icon' />
                <h6>2,700 Subscribers</h6>
            </div>
        </div>
    )
}