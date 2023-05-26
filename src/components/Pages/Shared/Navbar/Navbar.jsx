import React, { useContext, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logo from "../../../../assets/kiddo_logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>

      <li>
        <NavLink to='/alltoys'>AllToys</NavLink>
      </li>


      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/mytoys'
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/addToy'
            >
              Add a Toy
            </NavLink>
          </li>

          <div className='lg:flex items-start gap-2'>
            <a
              className='z-10 '
              data-tooltip-id='my-tooltip'
              data-tooltip-content={user?.displayName}
            >
              <li className=' rounded-full   '>
                <img
                  className='w-10 btn-circle lg:mr-auto'
                  src={user?.photoURL}
                />

                <Tooltip id='my-tooltip' />
              </li>
            </a>
            <button onClick={logOut}>Log out</button>
          </div>
        </>
      ) : (
        <li>
          <Link to='/login'>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className='navbar wrapper justify-between  '>
      <div className='navbar-start mt-5'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu-compact dropdown-content mt-3 p-5  mx-2 bg-slate-50  rounded-box w-52'
          >
            {navItems}
          </ul>
        </div>
        <img className='w-14' src={logo} alt='' />
        <Link
          to='/'
          className='ml-2 normal-case text-2xl font-bold text-[#00a0d4]'
        >
          Kiddo Toys
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className=' inline-flex gap-5 px-2'>{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
