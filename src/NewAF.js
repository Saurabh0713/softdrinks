import React from 'react'
import hibiscus from './Images/hibiscus-canned-juice-beverage.png'
import strawberry from './Images/strawberry-canned-juice-beverage.png'
import mango from './Images/mango-canned-juice-beverage.png'

export default function NewAF() {
  return (
    <div className='w-full h-screen md:flex'>
        <img className='w-1/3' src={hibiscus}></img>
        <img className='w-1/3' src={mango}></img>
        <img className='w-1/3' src={strawberry}></img>
    </div>
  )
}
