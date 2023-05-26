import React from "react";
import banner1 from "../../../../assets/Banner/banner-1.png";
import banner2 from "../../../../assets/Banner/banner-2.png";
import banner3 from "../../../../assets/Banner/banner-3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className='carousel w-full lg:h-[550px] mt-5'>
      <div
        id='slide1'
        className='carousel-item relative w-full bg-[#c2e0eb] rounded-xl'
      >
        <div className='lg:flex w-full justify-between p-9 wrapper'>
          <div className='flex items-center' data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="1500">
            <div>
              <h2 className='banner-title'>
                Best Kids Toys <br /> & Online Shop
              </h2>
              <p className='banner-des'>
                Give the gift of your children everyday.
              </p>
              <Link to='/alltoys'><button className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] text-white font-semibold  rounded-3xl px-6 py-2'>
                Shop Now
              </button></Link>
            </div>
          </div>
          <img src={banner1} className='w-[250px] mx-auto lg:mx-0 mt-5 lg:mt-0 h-[380px] lg:w-[350px] lg:h-[450px] rounded' data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1500" />
        </div>
        <div className='absolute flex gap-4 transform -translate-y-1/2 bottom-0 right-5 lg:right-28 '>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div
        id='slide2'
        className='carousel-item relative w-full bg-[#f7a0af]  rounded-xl'
      >
        <div className='lg:flex w-full justify-between p-9 wrapper'>
          <img src={banner2} className='w-[250px] h-[300px] lg:w-[400px] lg:h-[500px] mx-auto lg:mx-0 rounded' />
          <div className='flex items-center'>
            <div>
              <p className='banner-des text-center'>New Arrivals</p>
              <h2 className='banner-title'>
                Best Kids Toys <br /> & Online Shop
              </h2>

              <Link to='/alltoys'><button className='bg-white mt-4 font-semibold  rounded-3xl px-6 py-2'>
                Discover More
              </button></Link>
            </div>
          </div>
        </div>
        <div className='absolute flex gap-4 transform -translate-y-1/2 bottom-0 right-5 lg:right-28'>
          <a href='#slide1' className=' btn btn-circle '>
            ❮
          </a>
          <a href='#slide3' className=' btn btn-circle text-white'>
            ❯
          </a>
        </div>
      </div>
      <div
        id='slide3'
        className='carousel-item relative w-full bg-[#c2e0eb] rounded-xl'
      >
        <div className='lg:flex w-full justify-between p-9 wrapper'>
          <img src={banner3} className='w-[280px] lg:w-[420px] mx-auto lg:mx-0 mb-5 lg:mb-0' />
          <div className='flex items-center'>
            <div>
              <h2 className='banner-title'>
                Best Kids Toys <br /> & Online Shop
              </h2>
              <p className='banner-des'>
                Give the gift of your children everyday.
              </p>
              <Link to='/alltoys'><button className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] text-white font-semibold  rounded-3xl px-6 py-2'>
                Shop Now
              </button></Link>
            </div>
          </div>
        </div>
        <div className='absolute flex gap-4 transform -translate-y-1/2 bottom-0 right-5 lg:right-28'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
