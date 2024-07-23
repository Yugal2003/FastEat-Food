import React, { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.allCart);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful !!!");
      if (cart.length > 0) {
        navigate('/cart');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error("Email OR Password Not Found !!!");
    }
  };

  return (
    <div className='bg-violet-500 border-2 border-black flex flex-col justify-center items-center mt-20 md:mt-24 mx-auto text-center w-[95%] md:w-[60%] xl:w-[40%] rounded-xl'>
      <h2 className='flex justify-center items-center text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Login</h2>

      <form className='w-[90%] md:w-[80%]' onSubmit={handleLogin}>
        <div className='flex items-center text-center justify-center mt-4 gap-2'>
          <label className='w-[30%] lg:text-xl xl:text-xl'>Email :</label>
          <input 
          className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className='flex items-center text-center justify-center mt-4 gap-2'>
        <label className='w-[30%] lg:text-xl xl:text-xl'>Password :</label>
          <input 
          className='border-2 text-black lg:text-lg xl:text-xl outline-none px-2 w-[65%] md:w-auto rounded-lg'
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button className='bg-black text-white px-3 md:px-3 lg:px-4 py-1 rounded-lg text-lg mt-4' type='submit'>Login</button>
      </form>

      <h4 className='pt-2 font-semibold text-lg md:text-xl pb-4'>
        Don't have an Account? <NavLink to={'/signup'} className='underline'>Sign Up</NavLink>
      </h4>
    </div>
  );
};

export default Login;
