import React,  {useState} from 'react'
import './TweetBox.css'
import { Avatar,Button } from '@mui/material'
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Oscar Rautiainen",
      username: "Orautsi11",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
            <Avatar src = 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Jaebum-Joo.jpg'/>
            <input 
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage} 
              placeholder='Whats happening?' type= 'text' />
            </div>
            <input 
              value={tweetImage}
              onChange={e => setTweetImage(e.target.value)}
              className='tweetBox_imageInput'
              placeholder='Optional: Enter image URL?' 
              type= 'text' />
            
            <button 
              onClick={sendTweet}
              type ="submit" 
              className='tweetBox_tweetButton'>Tweet</button>
        </form>
    </div>
  )
}

export default TweetBox