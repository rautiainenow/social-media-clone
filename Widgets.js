import React from 'react'
import './Widgets.css'
import Search from '@mui/icons-material/Search'
import{
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed"

function Widgets() {
  return (
    <div className='widgeta'>
        <div className='widgets_input'>
          <Search className="Widgets_searchIcon"/>
          <input placeholder='Search Twitter' type ="text"/>

        </div>
        <div className='widgets_widgetContainer'>
          <h2>Whats happening</h2>

          <TwitterTweetEmbed tweetId={'858551177860055040'}/>

          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='elonmusk'
            options={{height:400}}/>

          <TwitterShareButton
            url={'https://www.linkedin.com/in/oscar-rautiainen-62072b232/'}
            options={{text: "Hire this guy", via:"Oscar Rautianen"}}
            />
        </div>
    </div> 
  )
}

export default Widgets