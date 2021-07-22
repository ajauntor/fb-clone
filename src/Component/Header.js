import React from 'react';
import logo from '../image/logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

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

            <div className="header_middle"></div>

            <div className="header_right"></div>

        </div>
    );
};

export default Header;