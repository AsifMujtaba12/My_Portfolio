import React from 'react'
import { contactImg } from '../../asset1'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
function LeftSide() {
  const handleLinkedInClick = () => { window.open('https://www.linkedin.com/in/asif-mujtaba-wani-5940b4271/', '_blank'); } 

  return (
    <>
      <div className='w-full  lgl:w-[38%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 

rounded-lg shadow-shadowOne flex flex-col gap-4 '>
  <div>
    <img 
    className='w-full h-64 object-cover rounded-lg mb-2'
      src={contactImg}
    />
  <div className='flex flex-col gap-8'>
    <h3 className='text-3xl font-bold text-white mt-10'>Asif Mujtaba</h3>
    <p className="text-lg font-normal text-gray-400">
      MERN Stack Developer
    </p>
     <p className="text-base text-gray-400 tracking-wide">
     I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
    </p>
    <p className="text-base text-gray-400 flex items-center gap-2">
    <FaPhoneSquareAlt /><span className="text-lightText">9149667915</span>
    </p>
    <p className="text-base text-gray-400 flex items-center gap-2">
    <MdOutlineMarkEmailRead /><span className="text-lightText">asifmujtaba8888@gmail.com</span>
    </p>
    <p className="text-base text-gray-400 flex items-center gap-2">
    <CiLocationOn /><span className="text-lightText">India</span>
    </p>
  </div>
  </div>
  <div className="flex flex-col gap-4 ">
    <h2 className="text-base uppercase font-titleFont mb-4 mt-2">Find me in</h2>
    <div className="flex gap-4">
      <span className="bannerIcon" onClick={handleLinkedInClick}>
        <FaLinkedinIn />
      </span>
      <span className="bannerIcon">
        <FaFacebookF />
      </span>
    </div>
  </div>
</div>
    </>
  )
}

export default LeftSide
