import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css'

const MessageSender = () => {
    return (
        <div className="messageSender">

            <div className="messageSender_top">
                <Avatar />
            </div>

            <div className="messageSender_bottom">

            </div>
            
        </div>
    );
};

export default MessageSender;