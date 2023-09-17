import { star } from "../assets/icons";
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { LuArrowRightLeft } from 'react-icons/lu'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full items-center'>

<div className="imgcon relative w-[260px] h-[260px] group overflow-hidden rounded-[20px]">

<img src={imgURL} alt={name} className="absolute w-[100%] h-[100%] transform scale-100 group-hover:scale-110 transition-transform  duration-500 "  />

<div className="icons flex z-20 absolute top-0 right-0 h-[100%] w-[50px] flex-col items-center justify-center gap-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-50%] duration-500">
<div className="card-icon-con "><span className="add-to-cart">Add to cart</span><AiOutlineShoppingCart className="card-icon"/></div>
<div className="card-icon-con "><span className="add-to-cart">Favoruite</span><AiOutlineHeart className="card-icon"/></div>
<div className="card-icon-con "><span className="add-to-cart">View Item</span><AiOutlineEye className="card-icon"/></div>
<div className="card-icon-con "><span className="add-to-cart">compare</span><LuArrowRightLeft className="card-icon"/></div>
</div>
</div>


      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24}/>
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
