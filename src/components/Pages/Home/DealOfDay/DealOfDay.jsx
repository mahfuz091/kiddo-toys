import React from "react";
import img1 from "../../../../assets/1.png";
import img2 from "../../../../assets/2.png";
import { Link } from "react-router-dom";

const DealOfDay = () => {
  return (
    <div className='bg-[#fce8f1] py-20 lg:py-32 mt-32'>
      <div className='lg:flex items-center justify-between wrapper'>
        <img
          className='w-40 lg:w-80 mx-auto lg:mx-0'
          src={img1}
          alt=''
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='2500'
        />

        <div className='lg:flex items-center'>
          <div>
            <h2 className='text-center font-defult font-extrabold text-2xl mt-10 lg:mt-0 lg:text-4xl mb-5'>
              Deal Of The Day
            </h2>
            <p className='text-center font-defult font-semibold lg:text-xl mb-12 lg:mb-28'>
              <span className='text-[#f379a7]'>UPTO 35% OFF</span> ON ALL
              BABY TOYS
            </p>
            <div className='text-center'>
              <Link to='/alltoys'><button className='py-2 px-8 mb-10 lg:mb-0 font-semibold rounded-3xl text-white bg-[#f379a7]'>
                Shop Now
              </button></Link>
            </div>
          </div>
        </div>
        <img
          className="mx-auto lg:mx-0 w-40 lg:w-80"
          src={img2}
          alt=''
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='2500'
        />
      </div>
    </div>
  );
};

export default DealOfDay;
