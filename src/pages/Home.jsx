import React from 'react'
import { SocialIcon } from 'react-social-icons'
import image from '../web-bg.png'

export default function Home () {
  return (
    <>
      <main>
        <img
          src={image}
          alt={`Navy background with logo on right corner`}
          className='absolute top-0 object-cover w-screen h-screen'
        />
        <section className='absolute inset-0 flex flex-col justify-center items-center min-h-screen pt-12 lg:pt-12 px-8'>
          <h1 className='text-6xl text-white spartan leading-none lg:leading-snug home-name'>
            Daniel Adhi Nugraha
          </h1>
          <div className='wrapper'>
            <h2 className='text-4xl text-white spartan leading-none lg:leading-snug home-name'>
              I'm a{' '}
              <span className='text-4xl text-red-400 spartan leading-none lg:leading-snug home-name'>
                Full Stack Developer
              </span>
            </h2>
          </div>
          <div>
            <SocialIcon
              url='https://www.instagram.com/danielanugr/'
              className='mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-125'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.facebook.com/nfornocturnal/'
              className='mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-125'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.linkedin.com/in/danielanugr/'
              className='mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-125'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://github.com/danielanugr'
              className='mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-125'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
          </div>
        </section>
      </main>
    </>
  )
}
