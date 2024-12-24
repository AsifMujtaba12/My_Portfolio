import React, { useState } from 'react'
import { logo } from '../../asset1';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';
import { MdMenu } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <div className='w-full h-24 mx-auto px-10 flex  sticky top-0 z-50 bg-bodyColor items-center justify-between font-titleFont border-b-[1px] border-b-gray-600'>
      <div >
        <img className="w-20 h-20 rounded-full object-cover" src={logo} alt='logo' />
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lgl:gap-10'>
            {navLinksdata.map(({_id, title, link})=> (
                <li className='text-base tracking-wide font-normal text-gray-400 cursor-pointer hover:text-designColor hover:border-b hover:border-designColor duration-300 ease-in' key={_id}>
                <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

              >
                {title}
              </Link>
                </li>

            
            ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <MdMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-20 h-20 rounded-full object-cover" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                Passionate MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js.Dedicated to building dynamic and responsive web applications with a keen focus on user experience and performance.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
