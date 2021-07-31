import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, NearMeOutlined, ThumbUp } from '@material-ui/icons';
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

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeOutlined/>
                    <p>Share</p>
                </div>

                <div className="post_option">
                    
                </div>
            </div>
        </div>
    );
};

export default Post;