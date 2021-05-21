import React, { useEffect } from 'react'
import Typed from 'typed.js'

export default function TypeText ({ strings }) {
  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 40,
      backSpeed: 50
    }

    const typed = new Typed('#text', options)

    return () => {
      typed.destroy()
    }
  }, [strings])

  return <span id='text'></span>
}
