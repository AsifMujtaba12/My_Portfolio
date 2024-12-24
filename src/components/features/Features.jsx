import React from 'react'
import Title from '../layouts/Title'
import Cards from './Cards';
import { IoIosBusiness} from "react-icons/io";
import { SiAntdesign,SiWebtrees } from 'react-icons/si';
import { MdEngineering } from "react-icons/md";
import {FaReact,FaMobile} from "react-icons/fa";
import {} from "react-icons/md";

function Features() {
  return (
  <>
    <div id='features' 
    className='w-full h-full  py-20 flex flex-col border-b-[1px] border-b-black px-10'>
     <Title title={"Features"} des={"What I Do"}/>
    <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10 lgl:gap-20'>
        {/* <Cards
        title={"Business"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros at est semper tincidunt."}
        icon={<IoIosBusiness />}
        /> */}
        {/* <Cards 
        title={"Web Developer"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros at est semper tincidunt."}
        icon={<SiWebtrees />}
        /> */}
        <Cards 
            title={"Full Stack MERN Web Developer"}
            description={"I build full-stack web applications with the MERN stack, creating responsive interfaces and robust backend services for seamless, high-quality applications."}
            icon={<FaReact/>}
        />
        <Cards
        title={"UX/UI Designer"}
        description={"I design intuitive and visually captivating user experiences. My work focuses on creating user-friendly interfaces and enhancing overall interaction, ensuring that every digital experience is both engaging and enjoyable."} 
        icon={<SiAntdesign/>}
        />
        
        
        {/* <Cards 
            title={'Mobile App'}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros at est semper tincidunt."}
            icon={<FaMobile/>}
        /> */}
        
        <Cards 
            title={"Electrical Engineer"}
            description={"I design, develop, and maintain electrical systems and equipment. My work involves solving complex problems, ensuring optimal performance, and innovating to improve efficiency and reliability in various electrical applications."}
           icon={<MdEngineering />}
        />

        </div>
    </div>

    </>
  )
}

export default Features;
