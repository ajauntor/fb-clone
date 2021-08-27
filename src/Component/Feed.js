import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Feed.css'
import db from './firebase.config';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        );
    }, []);


    return (
        <div className="feed">

            <StoryReel />

            <MessageSender />

        {posts.map((post) => (
            <Post
            key={posts.id}
            profilePic={post.profilePic}
            message={post.message}
            timeStamp={post.timestamp}
            userName={post.username}
            image={post.image}
            />
        ))}
        </div>
    );
};

export default Feed;