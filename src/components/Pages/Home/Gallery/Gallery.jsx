import React from "react";
import "./Gallery.css";
import car from "../../../../assets/Toys/car-1.jpg";
import truck1 from "../../../../assets/Toys/truck-1.webp";
import truck2 from "../../../../assets/Toys/truck-2.jpg";
import train from "../../../../assets/Toys/train-1.jpg";
import fererri from "../../../../assets/Toys/ferreri-2.jpg";
import police from "../../../../assets/Toys/police.jpg";

const Gallery = () => {
  return (
    <div className='wrapper'>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-3 mt-12'>
        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-right'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='lg:w-full  block rounded-lg' src={car} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Toy BMW Car</h2>
          </div>
        </div>

        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='w-full block rounded-lg' src={police} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Toy Police Car</h2>
          </div>
        </div>
        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-left'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='w-full block rounded-lg' src={fererri} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Mini Ferreri Car</h2>
          </div>
        </div>
        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-right'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='w-full block rounded-lg' src={truck1} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Mini Cargo Truck</h2>
          </div>
        </div>
        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='w-full block rounded-lg' src={train} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Toy Train</h2>
          </div>
        </div>

        <div
          className='relative w-52 mx-auto lg:mx-0 lg:w-96'
          data-aos='fade-left'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <img className='w-full block rounded-lg' src={truck2} alt='' />
          <div className='image_overlay'>
            <h2 className='image_title'>Mini Drum Truck</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
