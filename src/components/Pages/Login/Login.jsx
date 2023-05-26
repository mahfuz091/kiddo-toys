import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";

import { AuthContext } from "../../../providers/AuthProvider";

import signin from "../../../assets/login.webp";
import logo from "../../../assets/login-logo.png";

const Login = () => {
  useEffect(() => {
    document.title = "Kiddo | Login";
  }, []);
  const { signIn, signInWithGoogle, setError, error } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("wrong password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        } else {
          setError(error.message);
        }
      });
  };
  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className='hero min-h-screen login '>
      <div className='hero-content flex-col lg:flex-row-reverse'>

        <img className='w-96' src={signin} alt='' />
        <div className='card mx-16 flex-shrink-0 lg:w-1/2  '>
          <img className='w-11' src={logo} alt='' />
          <h1 className='text-3xl mt-5 font-bold'>Login to your Account</h1>
          <p>See what is going on with your business</p>

          <div className='pb-4 flex flex-col w-full mt-5 mx-auto gap-2'>
            <button
              onClick={googleSignIn}
              className='btn social-btn btn-outline hover:border-none gap-1 '
            >
              <FaGoogle></FaGoogle>Continue With Google
            </button>

          </div>

          <div className='divider'> or Sign in with Email</div>

          <form onSubmit={handleLogin}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                name='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            {error && <p>{error}</p>}
            <div className='form-control mt-6'>
              <button className='btn bg-[#f379a7] hover:bg-[#d63f79] border-none'>
                Login
              </button>
            </div>
          </form>
          <Link
            to='/register'
            className='text-center pb-4 text-sm mt-5 text-blue-600 link link-hover'
          >
            Don't have account? Please Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
