import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow/>
            <SidebarRow/>
            <SidebarRow/>
            <SidebarRow/>
        </div>
    );
};

export default SideBar;