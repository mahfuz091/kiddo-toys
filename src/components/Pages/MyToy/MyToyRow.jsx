import React, { useContext, useEffect, useState } from "react";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const MyToyRow = ({ toy, setControl, control, index }) => {
  const [showModal, setShowModal] = useState(false);
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



  const handleToyUpdate = (data) => {
    console.log(data);

    data.price = parseFloat(data.price)
    console.log(typeof (data.price));
    fetch(
      `https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/updateToy/${toy._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          Swal.fire({
            icon: "success",
            title: "Your Toy Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
        console.log(result);
      });
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/toys/${toy._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };

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
        <td className='whitespace-break-spaces'>{details}</td>
        <td>{availableQuantity}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>
          <button
            onClick={() => setShowModal(true)}
            className='text-2xl text-[#f379a7]'
          >
            <FaEdit></FaEdit>
          </button>
          {showModal ? (
            <UpdateToyModal
              key={_id}
              setShowModal={setShowModal}
              toy={toy}
              handleToyUpdate={handleToyUpdate}
            ></UpdateToyModal>
          ) : null}


        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className='text-2xl ml-3 text-[#f379a7]'
          >
            <FaTrash></FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyRow;
