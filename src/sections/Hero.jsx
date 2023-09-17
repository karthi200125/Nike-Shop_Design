import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 max-sm:text-center'>
        <p className='text-[40px] text-black font-thin '>Our Summer Collections</p>
        <h1 className='font-palanquin text-[60px] max-sm:text-[50px] max-sm:leading-[82px] font-thin max-sm:text-center max-sm:font-bold'>New Arrival <span className="text-coral-red max-sm:font-bold">Shoes</span></h1>        
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

         <div className="max-sm:w-full flex items-center justify-center">
            <Button label='Shop now' iconURL={arrowRight} />
         </div>

        <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-3xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-green bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={450}
          height={450}
          className='object-contain relative animate-[moveupdown_3s_ease-in-out_infinite]'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
