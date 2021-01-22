import axios from 'axios';

const KEY = 'AIzaSyCRm06kpM0dGXaD6x-qIfG8rXsJl4Jf6DE';

// documentation here: https://developers.google.com/youtube/v3/docs/search/list 
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});