import React from 'react'

function Card( {Title, Year, Time, src}){
  return(
      <div className='w-[10rem] px-4 border-2 border-white'>
          <img src={src} className="w-full h-full object-cover my-3"/> 
       
          <h1 className='text-1xl font-bold text-white'>{Title}</h1>
          <p className='text-white'>{Year}</p>
          <p className='text-white'>{Time}</p>
  
      
    </div>
  )
}
export default Card;