import React from 'react';
import { bannerImg } from '../../asset1';

function RightPart() {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center'>
      <img className='w-[350px] h-[450px] lgl:w-[500px] lgl:h-[680px] object-cover rounded-lg' src={bannerImg}/>
    </div>
  )
}

export default RightPart;
