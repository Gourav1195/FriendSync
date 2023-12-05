import {Routes, Route} from 'react-router-dom';
import './global.css';
import { Home } from './_root/pages';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/forms/AuthLayout';
import RootLayout from './_root/RootLayout';

export const App = () => {
  return (
  <main className='flex h-screen'>
  <Routes>
  {/* public routes can see without sign in */}
    <Route element={<AuthLayout />}>
      <Route  path="sign-in" element={<SigninForm />} />
      <Route path='/sign-up' element={<SignupForm />}  />
    </Route>

  {/* private route */}
  <Route element={<RootLayout />} >
  <Route index element={<Home />} />
  </ Route>
  </Routes>
  </main>
  )
}
 
//Tailwind allows to create custom style more quickly