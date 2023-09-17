import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import {BiLogoFacebook ,BiLogoInstagramAlt} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
          <h1 className='text-[40px] text-white lg:flex'><span className='text-coral-red font-bold'>S</span>HOE <span className=' font-semibold text-coral-red ml-5'>L</span>UXE</h1>            
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>            
              <div className=' flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red cursor-pointer group'>
                <BiLogoFacebook size={25} className="group-hover:text-white duration-500"/>                
              </div>            
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red cursor-pointer group'>                
                <BiLogoInstagramAlt size={25} className="group-hover:text-white duration-500"/>                
              </div>            
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red cursor-pointer group'>                
                <AiOutlineTwitter size={25} className="group-hover:text-white duration-500"/>
              </div>            
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base border-b-2 border-transparent leading-normal text-white-400 cen'
                    key={link.name}
                  >
                    <a href={link.link} >{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
