import React from 'react'
import { FaFacebookF,FaLinkedinIn, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
function MediaPart() {
  const handleLinkedInClick = () => { window.open('https://www.linkedin.com/in/asif-mujtaba-wani-5940b4271/', '_blank'); } 
  return (
    <>
      <div className="flex gap-20 flex-col lgl:flex-row">
        <div>
        <h2 className="text-base font-titleFont mb-4 uppercase" >
          Find me in
        </h2>
        <div className="flex  gap-4">
        <span className="bannerIcon cursor-pointer" onClick={handleLinkedInClick}><FaLinkedinIn/></span>

          <span className="bannerIcon"><FaFacebookF/></span>

        </div>
      </div>
      <div>
        <h2 className="text-base font-titleFont mb-4 uppercase" >
          Best Skill on
        </h2>
        <div className="flex  gap-4">
          <span className="bannerIcon"><SiTailwindcss/></span>
          <span className="bannerIcon"><FaNodeJs /></span>
          <span className="bannerIcon"><FaReact/></span>
          <span className="bannerIcon"><DiMongodb/></span>


        </div>
      </div>
      </div>
    </>
  )
}

export default MediaPart;
