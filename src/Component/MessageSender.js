import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoAlbum, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import db from './firebase.config';
import firebase from 'firebase';

const MessageSender = () => {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = e => {
        e.preventDefault();


        // Some Clever Database stuff

        setInput("");
        setImageURL("");
    };


    return (
        <div className="messageSender">

            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>

                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />

                    <input
                    value={imageURL}
                    onChange={(e) => setImageURL (e.target.value)}
                    placeholder="Image URL (Optional)" />

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