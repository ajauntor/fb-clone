import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css'

const Post = ({profilePic, image, userName, timeStamp, message}) => {
    return (
        <div className="post">

            <div className="post_top">
                <Avatar src ={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{userName}</h3>
                    <p>timeStamp..</p>
                </div>

            </div>
            
        </div>
    );
};

export default Post;