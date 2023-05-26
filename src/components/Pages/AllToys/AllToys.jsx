import React, { useEffect, useState } from "react";

import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    document.title = "Kiddo | All Toys";
  }, []);
  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/toysBySearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div className='wrapper'>
      <h2 className='text-center font-bold text-5xl mb-11 text-[#00a0d4]'>
        All Toys
      </h2>

      <div className=' p-2 text-center mb-5'>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type='text'
          placeholder='search toy by name'
          className='p-2 rounded-md input-bordered border'
        />
        <button
          className='bg-[#f379a7] mt-4 hover:bg-[#95b3e0] ml-2 text-white font-semibold  rounded-md px-6 py-2'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Seller Name</th>
                <th>Details</th>
                <th>Available Quantity</th>
                <th>Price</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {toys.map((toy, index) => (
                <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Seller Name</th>
                <th>Details</th>
                <th>Available Quantity</th>
                <th>Price</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
