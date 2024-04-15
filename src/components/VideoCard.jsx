import React from 'react'

const VideoCard = () => {
  return (
    <div className='  w-80'>
      <img  className='rounded-xl' src="https://i.ytimg.com/vi/qaFRf_PcaE8/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL6WG_2T0AECkSWw9gU67y8AuOuQ" alt="" />
      <div className='flex justify-between mt-2 '>
        <img className='rounded-full h-12 mr-3  ' src="https://yt3.ggpht.com/dViJijSRWeRSHCZULzt8i3s1j7m11KQUuAc6_Yyo36wVKXN1uZZ_HrUfoR_kna_4EiYJX8C7-rA=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <div className=''>
          <h2 className='text-[90%] font-bold'>Jetha के हाथ लगा Bhide का Letter | Taarak Mehta Ka Ooltah Chashmah</h2>
          <p className='mt-1  text-sm'>Sony Sub - 8M views 8 months ago</p>
        </div>
      </div>

    </div>
  )
}

export default VideoCard