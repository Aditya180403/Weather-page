import React from 'react'
import { UilTemperatureHalf ,UilTear ,UilWind } from '@iconscout/react-unicons'


const DateTime = () => {
  return (
    <div>
    <div className='text-white w-full h-10 flex flex-column justify-center py-7'>
      <div className='flex flex-row font-extrabold'>Tuesday , 31 May 2002<p className='px-2'>|</p>Local Time: 12:46PM
      </div> 
      {/* <div className='text-white'>BERLIN</div> */}
    </div>
    <div className='text-white text-3xl flex justify-center py-3'>
      BERLIN
    </div>
    <div className='py-9 flex flex-row place-content-around '>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShImYdWeumsprHAfwt5hEDc31ZWlqDXXtto3TuJOtS4g&s" />
      <div className='text-white flex justify-items-center justify-center font-bold text-3xl pt-3'>19 C</div>
      <div className=''>
        <div className='text-white py-1 flex'><UilTemperatureHalf /><p className='px-1'>Real felt : 18C</p></div>
        <div className='text-white py-1 flex'><UilWind /><p className='px-1'>Wind : 2km/h</p></div>
        <div className='text-white py-1 flex'><UilTear /><p className='px-1'>Humidity : 43%</p></div>

      </div>
    </div>
    </div>
  )
}

export default DateTime
