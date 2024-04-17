import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='sticky top-24 bg-white z-[-1]'>
      <div className='flex space-x-2 mb-6 flex-wrap '>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Music"/>
        <Button name="Music"/>
        <Button name="Inventions"/>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Music"/>
        <Button name="Music"/>
        <Button name="Inventions"/>
        <Button name="All"/>
        <Button name="Gaming"/>
      </div>
    </div>
  )
}

export default ButtonList
