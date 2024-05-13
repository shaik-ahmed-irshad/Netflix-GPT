// import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='absolute px-3 bg-black w-full md:bg-transparent md:px-8 py-2  z-10'>
        <img className='w-32 md:w-44' src={logo} alt="Netflix" />
    </div>
  )
}

export default Header