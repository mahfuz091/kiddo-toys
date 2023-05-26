import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllToysRow = ({ toy, index }) => {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    _id,
    picture,
    sellerName,
    availableQuantity,
    details,
    name,
    price,
    rating,
    subcategory,
  } = toy;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={picture} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
            <div>
              <div className='font-bold whitespace-break-spaces'>{name}</div>
              <div className='text-sm opacity-50'>{subcategory}</div>
            </div>
          </div>
        </td>
        <td>{sellerName}</td>
        <td className='whitespace-break-spaces'>{details}</td>
        <td>{availableQuantity}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <th>
          <button onClick={() => {

            console.log('clicked');

            if (!user) {
              Swal.fire({
                title: 'Login Required',
                text: "You have login first to View Details",
                icon: 'warning',

                confirmButtonColor: '#3085d6',

                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {


                  navigate(`/toys/${_id}`)
                }
              })

            }
            // else {

            //   navigate(`/toys/${_id}`)
            // }

          }}

            className='bg-[#f379a7] hover:bg-[#95b3e0] px-4 py-2 rounded-3xl text-white'
          >
            View details
          </button>
        </th>
      </tr>
    </>
  );
};

export default AllToysRow;
