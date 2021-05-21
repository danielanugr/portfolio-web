import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import About from '../pages/About'

export default function Navbar () {
  const [openAbout, setOpenAbout] = useState(false)

  function handleAbout (e) {
    e.preventDefault()
    setOpenAbout(!openAbout)
  }

  return (
    <>
      {openAbout ? (
        <About
          openAbout={openAbout}
          setOpenAbout={setOpenAbout}
          className='transform transition ease-in-out duration-500 sm:duration-700'
        />
      ) : (
        ''
      )}
      <header className='sticky top-0 z-50 bg-transparent'>
        <div className='container mx-auto flex justify-between'>
          <nav className='flex'>
            <NavLink
              to='/'
              exact
              activeClassName='text-green-400'
              className='title inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-500 text-4xl spartan tracking-widest'
            >
              @danielanugr
            </NavLink>
            <NavLink
              to='/post'
              activeClassName='text-red-500'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-white origin-top-left hover:transform-gpu hover:rotate-12 transition duration-600'
            >
              Blog
            </NavLink>
            <NavLink
              to='/portfolio'
              activeClassName='text-red-500'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-white origin-top-left hover:transform-gpu hover:rotate-12 transition duration-600'
            >
              Portfolios
            </NavLink>
            <NavLink
              to='/about'
              activeClassName='text-red-500'
              className='inline-flex items-center py-3 px-3 my-6 rounded text-white origin-top-left hover:transform-gpu hover:rotate-12 transition duration-600'
              onClick={e => handleAbout(e)}
            >
              About Me
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
