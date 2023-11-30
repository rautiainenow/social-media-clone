import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorderOutlined, Publish, Repeat, Verified } from '@mui/icons-material'
import {forwardRef} from "react";

const Post = forwardRef(({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
    // could add  likes and retweets
}, ref ) => {
  return (
    <div className='post' ref = {ref}>
        <div className='post_avatar'>
            <Avatar src = {avatar}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        {displayName} {" "}
                        <span className='post_headerSpecial' >
                        {verified && <Verified className='post_badge'/>} @{username}
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src = {image} 
            alt = ""/>
            <div className='post_footer'>
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorderOutlined fontSize='small'/>
                <Publish fontSize='small'/>
            </div>
        </div>
    </div>
  )
});

export default Post