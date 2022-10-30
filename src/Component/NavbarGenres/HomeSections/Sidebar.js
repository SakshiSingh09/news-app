import React from 'react';
import SocialMedia from './SidebarContents/SociaMedia.js';
import Subscribe from './SidebarContents/Subscribe.js';
import Weather from './SidebarContents/Weather.js';
import TwitterTrends from './SidebarContents/TwitterTrends.js';

export default function Sidebar(){
    return(
        <div>
            <SocialMedia />
            <Subscribe />
            <Weather />
            <TwitterTrends />
        </div>
    )
}