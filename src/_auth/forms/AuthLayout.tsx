import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;
// item center: Vertically center; justify-center: Horizontally center; flex-col: one below another; py-10: padding on top and bottom; hidden; xl:block: show on xl devices; h-screen : full height; w-1/2: half;
  return (
    <>
      {isAuthenticated ? (<Navigate to='/' />
      ):(<>
      <section className='flex flex-1 justify-center items-center flex-col py-10'>
        <Outlet/>
        {/* Outlet will show the page which is there, i.e. signup or signin page */}
      </section>
        <img src='/assets/images/side-img.svg' alt="logo" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' />

      </>)
}
    </>
    )
}

export default AuthLayout