import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-gradient-to-r from-amber-100/50 to-amber-300'>
    <nav className='bg-transparent p-4 text-xl md:flex md:items-center md:justify-between'>
        <ul className='md:flex'>
            <li className='m-4 md:my-0'>
        <a className='cursor-pointer hover:text-orange-600 duration-300'>Home</a>
            </li>
            <li className='m-4 md:my-0'>
        <a className='cursor-pointer hover:text-orange-600 duration-300'>Products</a>
            </li>
            <li className='m-4 md:my-0'>
        <a className='cursor-pointer hover:text-orange-600 duration-300'>Orders</a>
            </li>
        </ul>
        <ul className='md:flex'>
            <li className='m-4 md:my-0 cursor-pointer hover:text-lime-600 duration-300'>Log In</li>
            <li className='m-4 md:my-0 cursor-pointer hover:text-lime-600 duration-300'>Sing Up</li>
        </ul>
    </nav>
    </div>
  )
}
