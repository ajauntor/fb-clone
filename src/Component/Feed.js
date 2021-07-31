import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    return (
        <div className="feed">

            <StoryReel />

            <MessageSender />

            <Post />
            <Post />
            <Post />

        </div>
    );
};

export default Feed;