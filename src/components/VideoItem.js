import './VideoItem.css';
import React from 'react';

// I did NOT destructure this on purpose - makes it easier to understand for me for now
const VideoItem = (props) => { // contains props.video for each (and now onVideoSelect too)
  return (
    <div className="video-item item" onClick={() => props.onVideoSelect(props.video)}>
      <img 
        className="ui image" 
        src={props.video.snippet.thumbnails.medium.url} 
        alt={props.video.snippet.title}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem;