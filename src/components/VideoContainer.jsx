import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_URL } from '../constants';

const VideoContainer = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      setAllVideos(data.items);
      setFilteredVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  };
  // console.log(filteredVideos);

  return (
    <div className='flex flex-wrap gap-8'>
      {filteredVideos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}

    </div>
  );
};

export default VideoContainer;
