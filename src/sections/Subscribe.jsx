import { Button } from "../components";

const Subscribe = () => {
  return (
    <section id='contact-us' className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-white max-sm:text-center'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-white rounded-full bg-white max-sm:bg-transparent '>
        <input type='text' placeholder='subscribe@shoeluxe.com' className='input focus:outline-none ml-4 bg-transparent max-sm:bg-white max-sm:w-full h-[50px] rounded-[25px] pl-[20px]'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full '>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
