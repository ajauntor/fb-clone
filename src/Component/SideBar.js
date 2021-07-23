import { ChatOutlined, EmojiFlags, LocalHospital, PeopleOutline, Storefront, VideoLabel} from '@material-ui/icons';
import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://media-exp1.licdn.com/dms/image/C4E03AQHbdJifA8Fc8w/profile-displayphoto-shrink_200_200/0/1619802784619?e=1628121600&v=beta&t=6KLoIZTR_ynzzE_tduqzMTWRYtIbnc67fTp-D1ULGDQ" title="AJ Auntor"/>
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