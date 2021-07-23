import React from 'react';
import logo from '../image/logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
    return (
        <div className="header">

            <div className="header_left">
                <img src={logo} alt="" />
                <div className="search_input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" name="" id="" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option 
                header_option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>AJ Auntor</h4>
                </div>
                <IconButton>
                <AddIcon/>
                </IconButton>
                <IconButton>
                <ForumIcon/>
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    );
};

export default Header;