import React from 'react'
import './index.css';

import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Projects from './components/project/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import FooterBottom from './components/footer/FooterBottom';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
     <Navbar/>
     <div className='max-w-screen-xl mx-auto'>
    <Banner />
    <Features/>
    <Projects/>
    <Resume />
    <Contact />
    <FooterBottom />
    </div>
    </div>
  )
}

export default App
