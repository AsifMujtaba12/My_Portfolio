import React from 'react'

function ResumeCard({title, institution, duration, result, des}) {
  return (
    
    <div className='w-[85%] h-1/3 group flex '>
      <div className='w-10 h-[6px]  bgOpacity mt-16 relative'>
      <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'></span>
      <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex 
      group-hover:bg-designColor duration-300 absolute -left-2 -top-1'></span>
    </div>
    <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300
    rounded-lg px-10 flex flex-col  justify-center gap-10 shadow-shadowOne'>
    
    <div className='flex flex-col gap-20 lgl:items-center lgl:flex-row lgl:justify-between py-10'>
    <div className='flex flex-col gap-5'>
    <h3 className='text-2xl  font-semibold group-hover:text-white duration-300'>{title}</h3>
    <h4 className='text-sm  text-gray-400 group-hover:text-white duration-300'>{institution}</h4>
    <h3>{duration}</h3>
    <p>{des}</p>
    </div>
    <div> 
    <h3 className='w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium mb-[190px]'>{result}</h3>

  </div>
    </div>
    </div>
    </div>
  )
}

export default ResumeCard;
