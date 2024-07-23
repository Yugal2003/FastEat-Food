import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FireBase/Firebase'; 
import {emptycartIteam} from '../redux/Slice'

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { cart } = useSelector((state) => state.allCart);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function searchProducts() {
    const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    setProducts(results.data.meals);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(emptycartIteam());
    navigate('/');
  };

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      navigate('/signup');
    }
  };

  return (
    <>
      <div className='relative h-80 md:h-96 inline-styles'>
        <div className="h-20 md:h-24 flex flex-row fixed w-[100%] bg-orange-600 justify-between px-1 md:px-4 lg:px-6 xl:px-10 fasteat_with_signin_and_signout">
          <div className='gap-2 flex flex-row text-white font-semibold items-center font-mono fasteat'>
            <NavLink to='/'><GiHotMeal size={"30"} /></NavLink>
            <NavLink to='/'><h2 className='text-3xl md:text-4xl'>FastEat</h2></NavLink>
          </div>

          <div className='flex gap-2 md:gap-4'>
            {user ? (
              <div className='flex items-center'>
                <button 
                  onClick={handleLogout}
                  className='border-2 border-black font-semibold text-white bg-black py-1 px-3 text-base md:text-base rounded-full flex justify-center items-center text-center mt-6 md:mt-10'>
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to='/signup'>
                <button className='border-2 border-black font-semibold text-white bg-black py-1 px-3 text-base md:text-base rounded-full flex justify-center items-center text-center mt-6 md:mt-10'>
                  SignUp
                </button>
              </NavLink>
            )}
            <p className='font-bold absolute text-white ml-28 md:ml-32 lg:ml-22 mt-2 md:mt-5 text-xl md:text-2xl rounded-xl text-center w-8'>{cart.length}</p>
            <button onClick={handleCartClick}>
              <PiShoppingCartSimpleFill className='relative text-5xl items-center h-20 md:h-28 w-12 md:w-14 pr-2' />
            </button>
          </div>
        </div>

        <div className='input_with_search_bar flex flex-col text-white text-center'>
          <div className='pt-32 md:pt-44 input_with_button'>
            <input
              className='text-center rounded-lg px-1 md:px-4 py-2 text-black font-semibold mr-2 md:mr-4 border-none outline-none'
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              type='text'
              placeholder='Search Recipes Here ...'
            />
            <button className='bg-orange-500 pt-2 pb-3 px-2 items-center rounded-lg outline-none' onClick={searchProducts}>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
          </div>

          <h1 className='text-white text-2xl md:text-3xl pt-8' id='h1tag'>What are your favourite cuisines?</h1>
          <h3 className='text-white text-lg md:text-2xl pt-3' id='h3tag'>PERSONALIZE YOUR EXPERIENCE</h3>
        </div>
      </div>

      {products.length > 0 && (
        <div className='meals_parent_elememt'>
          <h1 className='flex flex-row text-center justify-center text-lg md:text-3xl underline font-serif mt-3'>MEALS</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
            {products.map((pro) => (
              <div className='meals_whole_div border-2 rounded-lg bg-slate-300 p-2 mx-2' key={pro.idMeal}>
                <NavLink to={`/product/${pro.idMeal}`}>
                  <div className='meals_div_only'>
                    <img className='h-48 w-[70%] mx-auto rounded-lg hover:scale-105' src={pro.strMealThumb} alt={pro.idMeal} />
                    <div className='flex flex-row gap-3 mx-auto items-center justify-center search_meals_data_name'>
                      <h3 className='border-2 border-black px-2 rounded-md mt-2 hover:scale-105 h3tag_in_meals_page'>{pro.strCategory}</h3>
                      <h3 className='border-2 border-black px-2 rounded-md mt-2 hover:scale-105 h3tag_in_meals_page'>{pro.strArea}</h3>
                      <h3 className='border-2 border-black px-2 rounded-md mt-2 hover:scale-105 h3tag_in_meals_page'>{pro.strMeal}</h3>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
