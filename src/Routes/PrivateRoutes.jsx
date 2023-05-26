import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {

    return (
      <div className='flex items-center justify-center '>
        <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );

  }



  if (user) {

    return children;
  }




  return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoutes;
