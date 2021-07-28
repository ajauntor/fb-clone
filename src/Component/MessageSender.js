import { Avatar } from '@material-ui/core';
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

                    </button>

                </form>
            </div>

            <div className="messageSender_bottom">

            </div>
            
        </div>
    );
};

export default MessageSender;