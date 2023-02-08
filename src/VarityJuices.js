import React from 'react'
import cranGrape from './Images/JTG-PCP-Thumbnails-cranGrape.png'
import tropicalBlend from './Images/JTG-PCP-Thumbnails-tropicalBlend.png'


export default function VarityJuices() {
  return (
    <div className='md:flex h-screen md:items-center md:justify-center bg-gradient-to-r from-fuchsia-800 to-cyan-600'>
        <div className='w-1/4 h-96 md:flex md:items-center md:justify-center bg-fuchsia-700 rounded-l-lg'>
            <img className='hover:-mt-8 duration-500' style={{height:"500px"}} src={cranGrape}></img>
        </div>
        <div className='w-2/5'>
            <div className='bg-fuchsia-700 h-48 p-2 px-4'>
                <p className='text-3xl text-red-900'>CRANBERRY GRAPE</p>
                <p className='text-xl text-red-300 my-1'>Enjoy Minute Maid Cranberry Grape, a refreshing juice beverage made from the delicious taste of apple, cranberry and grape juices. </p>
                <span className='md:flex md:justify-end'>
                    <button className=' text-center rounded-xl m-2 px-3 p-1 bg-green-200 hover:bg-fuchsia-500 hover:text-slate-50 duration-300'>Buy Now</button >
                    <button className=' text-center rounded-xl m-2 px-3 p-1 bg-green-200 hover:bg-fuchsia-500 hover:text-slate-50 duration-300'>Add to cart</button>
                </span>
            </div>
            <div className='bg-cyan-500 h-48 p-2 px-4'>
                <p className='text-3xl text-green-900'>TROPICAL BLEND</p>
                <p className='text-xl text-yellow-900 my-1'>Refresh your day with a tropical mix of 25% juice blend of carrot, pear, mango and pineapple juices from concentrate with 100% vitamin C.</p>
                <span className='md:flex md:justify-end'>
                    <button className=' text-center rounded-xl m-2 px-3 p-1 bg-green-200 hover:bg-cyan-700 hover:text-slate-50 duration-300'>Buy Now</button>
                    <button className=' text-center rounded-xl m-2 px-3 p-1 bg-green-200 hover:bg-cyan-700 hover:text-slate-50 duration-300'>Add to cart</button>
                </span>
            </div>
        </div>
        <div className='w-1/4 h-96 md:flex md:items-center md:justify-center bg-cyan-500 rounded-r-lg'>
        <img className='hover:-mt-8 duration-500' style={{height:"500px"}} src={tropicalBlend}></img>
        </div>
    </div>
  )
}
