import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

import "@smastrom/react-rating/style.css";
import { Link, Navigate, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";



const CategoryToyCard = ({ toy }) => {

  const { user } = useContext(AuthContext)

  const navigate = useNavigate()




  const {
    _id,
    picture,
    availableQuantity,
    details,
    name,
    price,
    rating,
    subcategory,
  } = toy;




  return (
    <div className='card w-full lg:w-2/3 mt-5 lg:mt-0 bg-[#e4f6fe]'>
      <figure className='px-10 pt-10 h-2/3'>
        <img className='w-9/12 rounded-xl' src={picture} alt='Toys' />
      </figure>
      <div className='card-body text-left  '>
        <h2 className='card-title'>{name}</h2>
        <p>Price: $ {price}</p>
        <div className='flex gap-1 mb-4 items-center'>
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating || 0)}
            readonly
          />
          <span>{rating}</span>
        </div>

        <div className='card-actions'>
          <button onClick={() => {

            if (!user) {
              Swal.fire({
                title: 'Login Required',
                text: "You have login first to View Details",
                icon: 'warning',

                confirmButtonColor: '#3085d6',

                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  // Swal.fire(
                  //   'Deleted!',
                  //   'Your file has been deleted.',
                  //   'success'
                  // )

                  navigate(`/toys/${_id}`)
                }
              })

            }
            else {

              navigate(`/toys/${_id}`)
            }

          }} className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] ml-2 text-white font-semibold  rounded-3xl px-6 py-2'>
            View Details
          </button>

        </div>
      </div>
    </div >
  );
};

export default CategoryToyCard;
