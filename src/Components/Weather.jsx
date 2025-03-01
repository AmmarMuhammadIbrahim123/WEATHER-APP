import React from 'react'
import clear from "../assets/clear.png"
import drizzle from '../assets/drizzle.png'
import cloud from "../assets/cloud.png"
import search from '../assets/search.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
const Weather = () => {
  return (
    <div className="w-72 h-full p-4 bg-blue-600 rounded-2xl mx-auto">
        <div className='flex flex-wrap '>
    <input 
      className="  rounded-3xl bg-white border border-gray-500 p-2 text-black placeholder-gray-300 focus:outline-none w-{70%} appearance-none autofill:bg-transparent"
      type="text"
      placeholder="Enter Country Name"
    />
    <button className='bg-white h-7 w-7  mt-2 flex items-center justify-center px-4 py-2 rounded-2xl'>
    <img className='rounded-2xl ' src={search}/>
    </button>
  </div>
<div className=''>
  <img src={cloud} className='mx-auto w-[80%] '/>
  <h1  className=' text-4xl text-white mx-auto'>30</h1>
  <h1  className=' text-4xl text-white mx-auto'>Karachi</h1>
  </div>
  
 
  <div  className='flex flex-wrap gap-5'>
<div className='flex items-center space-x-2 mt-5'>   
   <img  className=' flex-start h-7 w-7' src={humidity}/>
 
 <div  className='text-white ' >
   <p> 50%</p>
   <p>Humidity</p>
   </div>
   </div>

   <div className='flex items-center space-x-2 mt-5'>   
   <img  className='  h-7 w-7 ' src={wind}/>
 
 <div  className='text-white ' >
   <p>5 km/h</p>
   <p>Wind Speed</p>
   </div>
   </div>
</div>
</div> 
  )
}

export default Weather
