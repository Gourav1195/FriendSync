import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;
// item center: Vertically center; justify-center: Horizontally center; flex-col: one below another; py-10: padding on top and bottom
  return (
    <>
      {isAuthenticated ? (<Navigate to='/' />
      ):(<>
      <section className='flex flex-1 justify-center items-center flex-col py-10'>
        <Outlet/>
        {/* Outlet will show the page which is there, i.e. signup or signin page */}
      </section>
      
      </>)
}
    </>
    )
}

export default AuthLayout