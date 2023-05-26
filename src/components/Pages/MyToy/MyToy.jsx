import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Select from "react-select";

const options = [
  { value: "Price-Ascending", label: "Ascending" },
  { value: "Price-Descending", label: "Descending" },
];

const MyToy = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    document.title = "Kiddo | My Toys";
  }, []);

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const [value, type] = selectedOption.value
      .split("-")
      .map((item) => item.toLowerCase());
    fetch(
      `https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/user?sellerEmail=${user?.email}&value=${value}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data)

      });


  }, [user, control, selectedOption]);

  return (
    <div className='wrapper'>
      <h2 className='my-5 text-center font-bold text-4xl text-[#00a0d4]'>
        My Toys
      </h2>
      <div className='my-10 w-1/4 float-right'>
        <h2 className='font-bold my-2 text-end text-lg'>Sort by Price</h2>
        <Select
          defaultValue={options[0]}
          onChange={setSelectedOption}
          options={options}
        ></Select>
      </div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Details</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {toys.map((toy, index) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                control={control}
                setControl={setControl}
                index={index}
              ></MyToyRow>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Details</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Edit</th>
              <th>Update</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
