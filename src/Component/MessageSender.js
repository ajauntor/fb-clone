import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoAlbum, Videocam } from '@material-ui/icons';
import React from 'react';
import './MessageSender.css'

const MessageSender = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">

            <div className="messageSender_top">
                <Avatar />
                <form>

                    <input
                    className="messageSender_input"
                    placeholder={"What's on your mind"}
                    />

                    <input placeholder="Image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden button
                    </button>

                </form>
            </div>

            <div className="messageSender_bottom">

                <div className="messageSender_option">
                    <Videocam style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoAlbum style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
            
        </div>
    );
};

export default MessageSender;