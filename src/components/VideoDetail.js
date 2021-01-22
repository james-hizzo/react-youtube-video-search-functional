import React from 'react';

const VideoDetail = (props) => { 

  if (!props.video) {  // if video is null (throws an error without this)
    return <div>Enter a Video Category Above</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`; 
  console.log('video ', props.video.snippet)
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;