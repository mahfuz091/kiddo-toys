import React, { useEffect } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import errorimg from "../../../assets/Error/404.jpg";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Kiddo | Error";
  }, []);
  const { error, status } = useRouteError();
  // console.log(error, status);
  return (
    <>
      <div className='mt-16'>
        <img className='h-96 mx-auto' src={errorimg} alt='' />
      </div>
      <div className='text-center'>
        <h2 className='error-status'>
          <span>Error</span>
          {status || 404}
        </h2>
        <p className='error-message mb-5'>{error?.message}</p>

        <NavLink to='/' className='bg-[#f379a7] mt-5 hover:bg-[#95b3e0] ml-2 text-white font-semibold  rounded px-6 py-2'>
          Back to homepage
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
