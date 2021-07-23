import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
            <SidebarRow title="Pages"/>
            <SidebarRow/>
        </div>
    );
};

export default SideBar;