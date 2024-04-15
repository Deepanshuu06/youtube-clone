import React from 'react'

const VideoCard = ({video}) => {

  const {snippet , statistics} = video;
  const {channelTitle , title  } = snippet

  console.log(video);
  return (
    <div className=' w-80 cursor-pointer'>
      <img  className='rounded-xl' src={video.snippet.thumbnails.standard.url} alt="" />
      <div className='flex justify-between mt-2 '>
        <img className='rounded-full h-12 mr-3  ' src="https://yt3.ggpht.com/dViJijSRWeRSHCZULzt8i3s1j7m11KQUuAc6_Yyo36wVKXN1uZZ_HrUfoR_kna_4EiYJX8C7-rA=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <div className=''>
          <h2 className='text-[90%] font-bold'>{title}</h2>
          <h5>{channelTitle}</h5>
          <p className='mt-1  text-sm'>{statistics.viewCount} Views</p>
        </div>
      </div>

    </div>
  )
}

export default VideoCard