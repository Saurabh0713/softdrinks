import React from 'react'
import insta from './Images/logo-instagram.svg'
import fb from './Images/logo-facebook.svg'

export default function Footer() {
  return (
    <div className='w-full h-24 bg-gray-800 flex justify-center items-center text-3xl text-slate-200'>
        <div className='md:mx-4 mx-2'>Follow Us On</div>
        <img className='w-12 rounded-md bg-slate-400 md:mx-4 mx-2' src={fb}></img>
        <img className='w-12 rounded-md bg-slate-400' src={insta}></img>
    </div>
  )
}
