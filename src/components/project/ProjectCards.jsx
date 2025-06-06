import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
function ProjectCards({ title, des, src, githublink}) {
 
  return (
    <div
      className="w-full px-12  h-auto py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-contain group-hover:scale-110 duration-300
    cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-5">
        <div className="flex items-center justify-between ">
        <h3 className="text-designColor">{title}</h3>
        <div className="flex gap-2">
        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400
         hover:text-designColor duration-300 cursor-pointer" onClick={githublink} >
        <BsGithub /></span>
        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400
         hover:text-designColor duration-300 cursor-pointer"><FaProjectDiagram /></span>
        </div>
      </div>
      <div>
      <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{des}</p></div>
      </div>
    </div>
  );
}

export default ProjectCards;
