import React from 'react'
import Title from '../layouts/Title'
import { projectOne,projectTwo,projectThree,projectFour,projectFive,projectSix} from '../../asset1';


import ProjectCards from './ProjectCards';
function Projects() {
  const handleGitlink = (url) => { window.open(url, '_blank'); }
  return (
    <>
    <section id='projects'
    className='w-full h-full py-20 px-10 lgl:px-0 border-b-[1px] border-b-black'>
    <div className='flex items-center justify-center text-center'>
    <Title 
    title={"Visit My Portfolio And Keep your feedback"}
     des={"My Projects"}/>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20'>
      <ProjectCards
        title={"Real Time Chat APP"}
          des={"A real-time chat application built with the MERN stack and Socket.io, enabling instant messaging and online user tracking. Features secure authentication, responsive UI, and real-timeupdates."}
          src={projectOne}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/Chat_APP')}
      />
      <ProjectCards 
        title="MEDIBOOK"
          des="Doctor’s Booking Appointment App (Ongoing): Developing a full-stack doctor’s appointment booking platform using the MERN stack to facilitate easy scheduling and patient management."
          src={projectTwo}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/MEDIBOOK')}
      />
      <ProjectCards 
        title="MERN Authentication Login/Signup"
          des="MERN Authentication: Implemented secure user authentication and authorization using JWT, MongoDB, Express.js, React.js, and Node.js."
          src={projectThree}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/Auth_MERN')}
      />
      <ProjectCards
        title="Todo List App"
          des="A simple and efficient to-do list application built with HTML, CSS, and JavaScript. Manage your tasks effortlessly and stay organized throughout the day."
          src={projectFour}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/Todo-list')}
      />
      <ProjectCards 
        title="Tic-Tac-Toe"
          des="A classic Tic Tac Toe game built with React JS and CSS. Enjoy a fun and interactive way to play this timeless game with smooth animations and responsive design."
          src={projectFive}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/tic-tac-toe-game/tree/main/src')}

      />
      <ProjectCards
        title="Pokedex"
          des=" A dynamic Pokedex built with React JS and CSS. Explore detailed information about your favorite Pokémon with a sleek and interactive user interface."
          src={projectSix}
          githublink={()=>handleGitlink('https://github.com/AsifMujtaba12/Pokedex_Project')}
      />

      
    </div>
    </section>
    </>
  )
}

export default Projects;
