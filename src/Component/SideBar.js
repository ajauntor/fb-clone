import { ChatOutlined, EmojiFlags, LocalHospital, PeopleOutline, Storefront, VideoLabel} from '@material-ui/icons';
import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={PeopleOutline} title="Friends"/>
            <SidebarRow Icon={ChatOutlined} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLabel} title="Videos"/>
        </div>
    );
};

export default SideBar;