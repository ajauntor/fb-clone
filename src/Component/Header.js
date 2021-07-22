import React from 'react';
import logo from '../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <div className="header_left">
                <img src={logo} alt="" />
            </div>

            <div className="header_middle"></div>

            <div className="header_right"></div>

        </div>
    );
};

export default Header;