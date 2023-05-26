import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user, setLoading } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Kiddo | Add A Toys";


  }, []);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.price = parseFloat(data.price)
    fetch(
      "https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/postToys",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your toy has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
        // console.log(data);
      });
  };


  return (
    <div className="wrapper">
      <h2 className='text-center mt-10 font-bold text-3xl mb-12 text-[#00a0d4]'>
        Add A Toy
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-16'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Name</span>
            </label>
            <input
              className='input input-bordered w-full max-w-xs'
              {...register("name", { required: true })}
              placeholder='name'
            />
            {errors.name && <span className="text-warning mt-2">This field is required</span>}


          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Seller Name</span>
            </label>
            <input
              className='input input-bordered w-full max-w-xs'
              {...register("sellerName")}
              placeholder='Seller Name'
              defaultValue={user?.displayName}
            />

          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Seller Email</span>
            </label>
            <input
              type='text'
              name='sellerEmail'
              {...register("sellerEmail")}
              placeholder='Seller Email'
              defaultValue={user?.email}
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Sub-Category</span>
            </label>
            <select
              className='input input-bordered w-full max-w-xs'
              {...register("subcategory", { required: true })}
            >
              <option disabled>Sub Category</option>
              <option value='SportsCar'>Sports Car</option>
              <option value='Truck'>Truck</option>
              <option value='FireTruck'>Fire Truck</option>
            </select>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Rating</span>
            </label>
            <input
              type='text'
              {...register("rating", { required: true })}
              placeholder='Rating'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.rating && <span className="text-warning mt-2">This field is required</span>}
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Price</span>
            </label>
            <input
              type='text'
              {...register("price", { required: true })}
              placeholder='price'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.price && <span className="text-warning mt-2">This field is required</span>}
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Available Quantity</span>
            </label>

            <input
              type='text'
              {...register("availableQuantity", { required: true })}
              placeholder='Available quantity'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.availableQuantity && <span className="text-warning mt-2">This field is required</span>}
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Details</span>
            </label>

            <input
              type='text'
              {...register("details", { required: true })}
              placeholder='Detail description'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.details && <span className="text-warning mt-2">This field is required</span>}
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Photo Url</span>
            </label>

            <input
              type='text'
              {...register("picture", { required: true })}
              placeholder='Photo URL'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.picture && <span className="text-warning mt-2">This field is required</span>}
          </div>
        </div>

        <div className=' px-16 mt-8 lg:mr-14 mr-2 '>
          <input
            className='input   input-bordered w-full  cursor-pointer bg-[#f379a7] text-white font-semibold'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
