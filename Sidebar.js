import React from "react";
import './Sidebar.css'

import SidebarOption from "./SidebarOption";

import HomeIcon from '@mui/icons-material/Home';
import SeachIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { BookmarkBorder, ListAlt, MailOutline, MoreHoriz } from "@mui/icons-material";
import { Button } from "@mui/material";

function Sidebar(){

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>
 
            

            <SidebarOption active Icon = {HomeIcon} text='Home'/>
            <SidebarOption Icon = {SeachIcon} text='Explore'/>
            <SidebarOption Icon = {NotificationsNoneIcon} text='Notifications'/>
            <SidebarOption Icon = {MailOutline} text='Messages'/>
            <SidebarOption Icon = {BookmarkBorder} text='Bookmarks'/>
            <SidebarOption Icon = {ListAlt} text='Lists'/>
            <SidebarOption Icon = {MoreHoriz} text='More'/>
           
            {/* button */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;