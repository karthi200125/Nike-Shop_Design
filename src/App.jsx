import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import banner1 from './assets/images/1248.jpg'
import banner2 from './assets/images/banner2.jpg'
import {AiFillTwitterCircle} from 'react-icons/ai'

const App = () => {
  return (
    <main className='relative '>      
      <Nav />
      
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <div className="offers flex gap-10 items-center justify-center p-10 max-sm:flex-col">
        <img src={banner1} alt="" className="w-[43%] h-[300px] max-sm:w-[100%]"/>
        <img src={banner2} alt="" className="w-[43%] h-[300px] max-sm:w-[100%]"/>
      </div>
  
    <section className='bg-pale-blue padding '>
        <CustomerReviews />
      </section>
      <section className='px-[16px] sm:py-32 py-16 w-full subscribe add'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
