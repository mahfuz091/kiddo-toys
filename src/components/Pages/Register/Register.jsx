import React, { useContext, useEffect, useState } from "react";
import register from "../../../assets/signup.avif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {



  useEffect(() => {
    document.title = "Kiddo | Register";
  }, []);

  const { createUser, setError, updateProfileAndPhoto, logOut } =
    useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passWordError, setPasssWordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (passWordError) {
      e.target.password.focus();
      return;
    } else {

      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          updateUserInfo(createdUser, name, photo);
          navigate(from, { replace: true });
          form.reset();


        })
        .catch((error) => {

          setError(error.message);
        });
      const updateUserInfo = (user, name, photo) => {
        updateProfileAndPhoto(user, name, photo)
          .then(() => {
            logOut()
          })
          .catch((error) => {

            setError(error.message);
          });
      };
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const passwordInput = e.target.value;
    if (passwordInput.length < 6) {
      setPasssWordError("Password must be 6 chareter");
    } else {
      setPasssWordError("");
    }
  };

  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img className='w-1/3' src={register} alt='' />

        <div className='card flex-shrink-0 w-full max-w-sm  '>
          <form onSubmit={handleRegister} className='card-body'>
            <h1 className='text-3xl text-center font-bold'>
              Create An Account
            </h1>
            <p className='mt-3 text-center'>
              Create an account to enjoy all the services.
            </p>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
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
                value={password}
                onChange={handlePassword}
                className='input input-bordered'
                required
              />
            </div>
            {passWordError && (
              <span className='text-warning'>{passWordError}</span>
            )}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo Url</span>
              </label>
              <input
                type='text'
                placeholder='Photo Url'
                name='photo'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn bg-[#f379a7] hover:bg-[#d63f79] border-none'>
                Create Account
              </button>
            </div>
            <Link
              to='/login'
              className=' mt-3 text-center pb-4 text-sm text-blue-600 link link-hover'
            >
              Already Have Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
