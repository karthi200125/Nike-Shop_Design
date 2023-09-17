import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'
import {GrFormClose} from 'react-icons/gr'

const Nav = () => {

  const [open, setopen] = useState(false)

  return (
    <header className='fixed h-[80px] pl-10 pr-10 py-2 z-10 w-full bg-black '>
      <nav className='flex justify-between items-center max-container'>
           
        <h1 className='text-[40px] text-white lg:flex'><span className='text-coral-red font-bold'>S</span>HOE <span className=' font-semibold text-coral-red ml-1'>L</span>UXE</h1>

        <ul className='flex-1 flex justify-center items-center gap-7 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-[15px] font-medium text-white cursor-pointer cen'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="icons flex items-center gap-5 hidden lg:flex">
          <div className="group cursor-pointer p-1.5 items-center rounded-full hover:bg-slate-gray duration-500 "><AiOutlineSearch className='w-[25px] text-white h-[25px] hover:text-coral-red' /></div>
          <div className="cursor-pointer p-1.5 items-center rounded-full hover:bg-slate-gray duration-500"><AiOutlineUser className='w-[25px] text-white h-[25px] cursor-pointer hover:text-coral-red' /></div>
          <div className="cursor-pointer p-1.5 items-center rounded-full hover:bg-slate-gray duration-500"><AiOutlineHeart className='w-[25px] h-[25px] text-white hover:text-coral-red' /></div>
          <div className="cursor-pointer p-1.5 items-center rounded-full hover:bg-slate-gray duration-500"><AiOutlineShopping className='w-[25px] h-[25px] text-white hover:text-coral-red' /></div>
        </div>

        <div className='hidden text-white p-2  hover:bg-coral-red cursor-pointer hover:text-white max-lg:block'>
          <RiMenu3Line className="text-[30px]" onClick={() => setopen(true)} />
        </div>

      </nav>
      {/* ------------------------------------------------------------------------------------------- */}

      {open &&
      <div className="nav">
        <nav className='flex justify-between items-center absolute top-0 left-0 bg-pale-blue hidden-nav ease-in-out  duration-500 border-r-[3px] border-black flex-col'>
          <div className="flex flex-col absolute top-0 justify-between items-center w-full p-5 bg-black h-[150px]">
            <GrFormClose onClick={() => setopen(false)} className="cursor-pointer absolute right-5 bg-white hover:bg-coral-red" size={25}/>
            <h1 className='text-[35px] cursor-pointer text-white w-full lg:flex mt-8'><span className='text-coral-red font-bold'>S</span>HOE <span className=' font-semibold text-coral-red ml-1'>L</span>UXE</h1>            
          </div>
          <ul className='flex-1 flex flex-col justify-center items-center gap-7'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='text-[15px] font-medium text-black cursor-pointer cen'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="icons flex flex-col lg:flex absolute bottom-[5%] left-0 w-full">            
            <div className="group hover:bg-coral-red hover:text-white pl-20 flex gap-2 cursor-pointer p-1.5 items-center rounded-full text-black duration-300"><AiOutlineUser className='w-[25px] text-black h-[25px] cursor-pointer group-hover:text-white' />Login</div>
            <div className="group hover:bg-coral-red hover:text-white pl-20 flex gap-2 cursor-pointer p-1.5 items-center rounded-full text-black duration-300"><AiOutlineHeart className='w-[25px] h-[25px] text-black group-hover:text-white' />Favorite</div>
            <div className="group hover:bg-coral-red hover:text-white pl-20 flex gap-2 cursor-pointer p-1.5 items-center rounded-full text-black duration-300"><AiOutlineShopping className='w-[25px] h-[25px] text-black group-hover:text-white'/>Cart</div>
          </div>
        </nav>
        </div>
      }

    </header>
  );
};

export default Nav;
