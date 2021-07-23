import { ChatOutlined, EmojiFlags, PeopleOutline } from '@material-ui/icons';
import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={PeopleOutline} title="Friends"/>
            <SidebarRow Icon={ChatOutlined} title="Messenger"/>
            <SidebarRow/>
        </div>
    );
};

export default SideBar;