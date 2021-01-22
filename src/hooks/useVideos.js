// TODO - finish making this a custom hook and implement

// import { useState, useEffect } from 'react';
// import youtube from '../apis/youtube';

// const useVideos = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     onSearchTermSubmit('puppies');
//   }, []);

//   const onSearchTermSubmit = async (term) => {
  //   console.log('Search Term: ', term);
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term // this is a youtube param (the q part)
  //     }
  //   });
  //   console.log("response", response);

  //   setVideos(response.data.items);

  //   return [videos, onSearchTermSubmit] // or can be object

// };

// export default useVideos;