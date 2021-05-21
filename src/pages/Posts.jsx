import React from 'react'
import image from '../web-bg.png'

export default function Posts () {
  return (
    <>
      <img
        src={image}
        alt={`Navy background with logo on right corner`}
        className='absolute top-0 object-cover w-full h-full'
      />
    </>
  )
}
