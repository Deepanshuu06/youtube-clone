import React from 'react'
import { userIcon } from '../constants'

const LiveChatMessage = ({username , message , profileImage}) => {
  return (
    <div className="flex items-center mb-4 ">
    <img src={userIcon} alt="" className="h-7 mr-2" />
    <div className="text-sm">
      <h1 className="font-bold">{username}</h1>
      <p>{message}</p>
    </div>
  </div>
  )
}

export default LiveChatMessage