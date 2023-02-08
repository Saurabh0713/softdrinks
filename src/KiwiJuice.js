import React from 'react'
import kiwiSlice from './Images/kiwi-png-1068728.png'
import strawberries from './Images/strawberries-png-1487322.png'
import minuteMaid from './Images/Minute-Maid_Lemonades.png'

export default function KiwiJuice() {
  return (
    <div className='w-full h-screen bg-yellow-800 md:flex md:items-center md:justify-center'>
      <div className='relative w-1/3 h-3/4 rounded-l-lg  bg-lime-600'>
        <img className='absolute top-12 left-4 h-80' src={kiwiSlice}></img>
        <img className='absolute bottom-0 -right-20 h-1/3' src={strawberries}></img>
        <img className='absolute bottom-2 right-20 hover:scale-125 duration-500 h-1/2' src={minuteMaid}></img>
      </div>
        <div className='p-4 w-1/3 h-3/4 rounded-r-lg bg-yellow-700 text-green-900'>
          <p className='text-4xl my-4'>KIWI STRAWBERRY</p>
          <p className='text-2xl'>Minute Maid Kiwi Strawberry blends the tartness of kiwi with sweet strawberries into one delicious juice drink. Bring this refreshing medley of fruit flavors wherever you go.</p>
          <button className='text-xl text-center rounded-xl mx-2 my-6 px-3 p-2 bg-rose-600 hover:bg-rose-700 duration-300 text-slate-50'>Buy Now</button>
        <button className='text-xl text-center rounded-xl mx-2 my-6 px-3 p-2 bg-rose-600 hover:bg-rose-700 duration-300 text-slate-50'>Add to Cart</button>
        <div className='md:flex md:items-center md:justify-end'>
          <button className='text-xl text-center rounded-xl p-2 px-3 bg-lime-700 hover:bg-green-900 duration-300 text-slate-50'>Explore more</button></div>
        </div>
    </div>
  )
}
