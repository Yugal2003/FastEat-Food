import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; 
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      console.log('User signed up successfully:', { firstName, lastName, phone, email });
       toast.success('User SignUp Successfully !!!');
    } catch (error) {
      console.error("Error signing up: ", error);
      toast.error('Error While SignUp !!!');
    }
  };

  return (
    <div className=''>
      <div className='bg-violet-500 flex flex-col justify-center items-center mt-8 md:mt-16 mx-auto text-center w-[95%] md:w-[60%] xl:w-[40%] rounded-xl'>

        <form className='w-[90%] md:w-[80%]' onSubmit={handleSignup}>
          <h2 className='flex justify-center items-center text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Sign Up</h2>

          <div className='flex items-center text-center justify-center mt-4 gap-2'>
            <label className='w-[30%] lg:text-xl xl:text-xl'>FirstName:</label>
              <input
                className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
                required
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div className='flex items-center text-center justify-center mt-4 gap-2'>
            <label className='w-[30%] lg:text-xl xl:text-xl'>LastName:</label>
              <input
                  className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
                  required
                  type='text'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div className='flex items-center text-center justify-center mt-4 gap-2'>
          <label className='w-[30%] lg:text-xl xl:text-xl'>Phone :</label>
              <input
              className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
                required
                type='number'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
          </div>
          <div className='flex items-center text-center justify-center mt-4 gap-2'>
          <label className='w-[30%] lg:text-xl xl:text-xl'>Email :</label>
              <input
              className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
                required
                placeholder='Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='flex items-center text-center justify-center mt-4 gap-2'>
          <label className='w-[30%] lg:text-xl xl:text-xl'>Password :</label>
              <input
              className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
                required
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <div className='flex justify-center items-center text-center text-sm md:text-base lg:text-lg gap-2 pt-4'>
            <input required type='checkbox' />
            <span>I accept the Terms of Use & Privacy Policy</span>
          </div><br />

          <button className='bg-black text-white px-3 md:px-3 lg:px-4 py-1 rounded-lg text-lg' type='submit'>Sign Up</button>
        </form>

        <h4 className='pt-2 font-semibold text-lg md:text-xl'>Already have an Account? <NavLink to={'/login'} className='underline'>Login here</NavLink></h4>
        <p className='pt-2 font-semibold text-lg md:text-xl'>Copyright © <NavLink to={'/'} className='underline'>FastEat.com</NavLink></p>

      </div>
    </div>
  );
};

export default Signup;
