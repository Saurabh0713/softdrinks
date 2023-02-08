import React from 'react'
import orangeJuiceImg from './Images/minute-maid.png'

export default function OrangeJuice() {
  return (
    <div className='box-border h-screen bg-gradient-to-r from-yellow-400 to-orange-500 md:flex md:items-center md:justify-center'>
    <div className='container rounded-xl w-3/4 h-3/4 bg-lime-600 md:flex md:items-center md:justify-around shadow-xl'>
      <img src={orangeJuiceImg} className=' hover:scale-110 duration-700' alt='orange-juice'></img>
      <div className='w-1/2 h-3/4 text-slate-50 '>
        <h3 className='text-4xl my-4'>ORIGINAL ORANGE JUICE</h3>
        <p className='text-2xl my-4'>Authentic, timeless and downright deliciously refreshing juice made from perfectly ripe, natural oranges. That's what Minute Maid 100% Original is all about</p>
        <button className='text-xl text-center rounded-xl m-4 px-3 p-2 bg-orange-500 hover:bg-orange-600 duration-300 text-slate-50'>Buy Now</button>
        <button className='text-xl text-center rounded-xl m-4 px-3 p-2 bg-orange-500 hover:bg-orange-600 duration-300 text-slate-50'>Add to Cart</button>
        <div className='md:flex md:items-center md:justify-end'>
          <button className='text-xl text-center rounded-xl p-2 px-3 bg-orange-600 hover:bg-lime-700 duration-300 text-slate-50'>Explore more</button></div>
      </div>
    </div>
    </div>
  )
}
