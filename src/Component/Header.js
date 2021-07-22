import React from 'react';
import logo from '../image/logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';

const Header = () => {
    return (
        <div className="header">

            <div className="header_left">
                <img src={logo} alt="" />
                <div className="search_input">
                    <SearchIcon/>
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large"/>
                </div>
            </div>

            <div className="header_right"></div>

        </div>
    );
};

export default Header;