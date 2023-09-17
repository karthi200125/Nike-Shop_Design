import { Brands, products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl text-center font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <div className="all flex items-center gap-5 ml-auto mr-auto">
        <div className="allcon bg-coral-red p-2 pl-5 pr-5 max-w-content text-white rounded-[20px]">
            <h1>All</h1>
          </div>
          {Brands.map((b)=>(
          <div className="allcon border-[1px] border-lightgray font-medium  p-2 pl-5 pr-5 max-w-content text-black rounded-[20px]">
            <h1>{b.name}</h1>
          </div>
          ))}
        </div>
        <p className='text-slate-gray text-center'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value          
        </p>
      </div>

      <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
