import React from 'react';
import free from '../../../../assets/Services/free-delivery.png'
import shopping from '../../../../assets/Services/shopping-bag.png'
import delivery from '../../../../assets/Services/delivery-truck.png'

const Services = () => {
    return (
        <div className='wrapper'>
            <h2 className='text-center font-bold text-3xl lg:text-5xl mt-28 mb-12'>Our Services</h2>
            <div className='lg:flex justify-center gap-4 px-20 lg:px-1'>
                <div className='border rounded-md p-10 text-center mt-5 ' data-aos="flip-left" data-aos-duration="3000">
                    <img className='w-28 lg:w-40 mx-auto' src={free} alt="" />
                    <h3 className='mt-3 font-medium'>Free Shipping</h3>
                </div>
                <div className='border rounded-md p-10 text-center mt-5' data-aos="flip-left" data-aos-duration="3000">
                    <img className='w-28 lg:w-40 mx-auto' src={shopping} alt="" />
                    <h3 className='mt-3 font-medium'>One Stop Shop</h3>
                </div>
                <div className='border rounded-md p-10 text-center mt-5' data-aos="flip-left" data-aos-duration="3000">
                    <img className='w-28 lg:w-40 mx-auto' src={delivery} alt="" />
                    <h3 className='mt-3 font-medium'>International Shipping</h3>
                </div>
            </div>

        </div>
    );
};

export default Services;