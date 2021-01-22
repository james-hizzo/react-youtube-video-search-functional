import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // just putting in a default search term
    onSearchTermSubmit('puppies');
  }, []);

  const onSearchTermSubmit = async (term) => {
    console.log('Search Term: ', term);
    const response = await youtube.get('/search', {
      params: {
        q: term // this is a youtube param (the q part)
      }
    });
    console.log("response", response);

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]); // this puts first video in player.
   
  };

  const onVideoSelect = (video) => { // callback being sent down to VideoList
    setSelectedVideo(video)
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
            I have {videos.length} videos.
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;