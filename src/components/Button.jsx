import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='  bg-gray-300  rounded-xl px-4 py-2'>{name}</button>
    </div>
  )
}

export default Button