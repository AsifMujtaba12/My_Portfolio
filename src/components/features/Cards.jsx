import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Cards( {title, description, icon}) {
  return (
    <>
    <div className='w-full h-90 px-12 py-10
    rounded-lg 
    shadow-shadowOne
    flex
    items-start 
    bg-gradient-to-r from-bodyColor to-[#202327] 
    hover:bg-gradient-to-b
   hover:from-black 
    hover:to-[#1e2024]
    transition-colors 
    duration-100]'>
    <div className='h-full overflow-y-hidden group '>
    <div className='flex flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
    <div className='flex flex-col gap-6'>
    <span className='text-designColor text-5xl'>{icon}</span>
    <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
    <p className='text-base '>{description}</p>
    </div>
   <span className='text-2xl text-designColor'><FaArrowRight /></span>
   </div>
    </div>
    </div>
    </>
  )
}

export default Cards
