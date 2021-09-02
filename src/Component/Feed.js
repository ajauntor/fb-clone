import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Feed.css'
import db from './firebase.config';
import MessageSender from './MessageSender';


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        db.collection("posts").orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
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
            profilePic={post.data.profilePic}
            message={post.data.message}
            timeStamp={post.data.timestamp}
            userName={post.data.username}
            image={post.data.image}
            />
        ))}
        </div>
    );
};

export default Feed;