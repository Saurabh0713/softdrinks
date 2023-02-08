import React from 'react'
import realOrange from './Images/orange-png-95467.png'
import branchOrange from './Images/branch-png-62265.png'
import pulpOrange from './Images/orange-png-41970.png'
import kiwi from './Images/kiwi-png-1068957.png'

export default function Home() {
  return (
    <div className='w-full h-screen md:flex md:items-center md:justify-center bg-gradient-to-t from-yellow-400 to-orange-500'>
             <div className='w-1/4 h-3/4 md:flex md:justify-end md:items-end' style={{backgroundImage: `url(${branchOrange})`,backgroundSize: '320px 300px',backgroundRepeat:'no-repeat'}}>
             <img className='w-48' src={kiwi}></img>
             </div>
             <div className='w-1/4 h-4/5 text-lime-800 text-center'>
              <p className='text-4xl my-2'>BRINGING GOODNESS TO YOUR FAMILY FOR 75 YEARS.</p>
              <p className='text-2xl'>Here at Minute Maid, we pride ourselves on our history of providing quality products to families around the world. With more than 100 different flavors and varieties from orange juice to apple juice, and lemonades to punches, we use the freshest ingredients to ensure you get the highest quality juices.</p>
             </div>
             <div className='w-1/3 h-96' style={{backgroundImage: `url(${realOrange})`,backgroundSize: '400px 200px',backgroundRepeat:'no-repeat',backgroundPositionY: 'bottom'}}>
              <img className='w-48' src={pulpOrange}></img>
             </div>
    </div>
  )
}
