import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='sticky bg-white '>
      <div className='flex space-x-2 mb-6 overflow-hidden '>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Music"/>
        <Button name="Music"/>
        <Button name="Inventions"/>
        <Button name="All"/>
        <Button name="Gaming"/>


        <Button name="Music"/>
        <Button name="Inventions"/>
      </div>
    </div>
  )
}

export default ButtonList
