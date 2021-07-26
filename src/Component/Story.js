import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css'

const Story = ({image, profileSrc, title }) => {
    return (
        <div className="story">
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;