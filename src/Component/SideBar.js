import { ArrowDownwardRounded, ChatOutlined, EmojiFlags, LocalHospital, PeopleOutline, Storefront, VideoLabel} from '@material-ui/icons';
import React from 'react';
import './SideBar.css'
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

const SideBar = () => {
    const [{user}, dispatch] = useStateValue();


    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={PeopleOutline} title="Friends"/>
            <SidebarRow Icon={ChatOutlined} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLabel} title="Videos"/>
            <SidebarRow Icon={ArrowDownwardRounded} title="More"/>
        </div>
    );
};

export default SideBar;