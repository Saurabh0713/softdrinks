import React from 'react'
import hibiscus from './Images/hibiscus-canned-juice-beverage.png'
import strawberry from './Images/strawberry-canned-juice-beverage.png'
import mango from './Images/mango-canned-juice-beverage.png'

export default function NewAF() {
  return (
    <div className='w-full md:h-screen max-h-max md:flex md:flex-row md:justify-evenly md:items-center flex flex-col justify-center items-center bg-slate-400'>
        <img className='md:w-1/4 md:h-4/5 w-3/4 m-4 rounded-lg md:hover:scale-110 duration-500' src={hibiscus}></img>
        <img className='md:w-1/4 md:h-4/5 w-3/4 m-4 rounded-lg md:hover:scale-110 duration-500' src={mango}></img>
        <img className='md:w-1/4 md:h-4/5 w-3/4 m-4 rounded-lg md:hover:scale-110 duration-500' src={strawberry}></img>
    </div>
  )
}
