import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyCard = () => {
  useEffect(() => {
    document.title = "Kiddo | Details";
  }, []);

  const toy = useLoaderData();


  const {
    _id,
    picture,
    sellerEmail,
    sellerName,
    availableQuantity,
    details,
    name,
    price,
    rating,
    subcategory,
  } = toy;

  return (
    <div className='wrapper '>
      <h2 className='mb-10 font-bold text-2xl mt-14'>{name}</h2>
      <div className='flex justify-around'>
        <div className='w-full '>
          <img className='w-1/2' src={picture} alt='' />
        </div>
        <div className='w-1/2'>
          <hr className='h-[2px] bg-black' />
          <h2 className='mt-5'>Visit the Kiddo Toys Store</h2>
          <div className='flex gap-1 mb-4 items-center'>
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating || 0)}
              readonly
            />
            <span>{rating}</span>
          </div>
          <hr className='h-[2px] bg-black' />
          <p className='mt-5 text-2xl font-semibold text-blue-600'>
            <sup className='text-lg'>$</sup>
            {price}
          </p>
          <p className='mt-5 mb-5'>
            <span className='font-bold'>Details : </span>
            {details}
          </p>
          <p>
            <span className='font-bold'>Available Quantity : </span>
            {availableQuantity}
          </p>
          <p className='mt-5 mb-3'>
            <span className='font-bold'>Sub Category : </span>
            {subcategory}
          </p>
          <p className='mt-5 mb-3'>
            <span className='font-bold'>Seller Name : </span>
            {sellerName}
          </p>
          <p className='mt-5 mb-3'>
            <span className='font-bold'>Seller Email : </span>
            {sellerEmail}
          </p>

          <button className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] ml-2 text-white font-semibold  rounded-3xl px-6 py-2'>
            Add to Cart
          </button>
          <button className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] ml-2 text-white font-semibold  rounded-3xl px-6 py-2'>
            Bye Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
