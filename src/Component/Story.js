import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css'

const Story = ({image, profileSrc, title }) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar style={{border:"5px solid #2e81f4", margin:"10px"}} src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;