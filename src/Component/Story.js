import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css'

const Story = ({image, profileSrc, title }) => {
    return (
        <div className="story">
            <Avatar src={profileSrc} />
        </div>
    );
};

export default Story;