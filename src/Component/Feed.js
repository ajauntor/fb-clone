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

            <Post
            profilePic="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2776.jpg?itok=v424ATY4"
            message="I am gonna moonland today"
            timeStamp="This is Time Stamp"
            userName="Jhankar Mahbub"
            image="https://i.ytimg.com/vi/TSVjANr7I5o/maxresdefault.jpg"
            />
            
            <Post
            profilePic="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2776.jpg?itok=v424ATY4"
            message="I am gonna moonland today"
            timeStamp="This is Time Stamp"
            userName="Jhankar Mahbub"
            image="https://i.ytimg.com/vi/TSVjANr7I5o/maxresdefault.jpg"
            />

            <Post
            profilePic="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2776.jpg?itok=v424ATY4"
            message="I am gonna moonland today"
            timeStamp="This is Time Stamp"
            userName="Jhankar Mahbub"
            image="https://i.ytimg.com/vi/TSVjANr7I5o/maxresdefault.jpg"
            />

        </div>
    );
};

export default Feed;