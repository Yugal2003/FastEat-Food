import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Subcategory = () => {

  const [subCategoryProduct, setSubCategoryProduct] = useState([]);

  const params = useParams();

  async function fetchSubCategoryProduct(){
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.subcategory}`);
    console.log(result);
    setSubCategoryProduct(result.data.meals);
  }

  useEffect(() =>{
    fetchSubCategoryProduct();
  },[]);


  return (
    <div>
      <Navbar/>
      <h1 className='flex justify-center text-lg md:text-2xl underline p-2'>MEALS</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {subCategoryProduct &&
          subCategoryProduct.map((product) => {
            return (
              <div className='rounded-lg border-2 border-gray-300 flex justify-center items-center mx-4 img_with_name_box' key={product.idMeal}>
                <NavLink to={`/product/${product.idMeal}`}>
                  <img
                    className='h-52 w-[100%] mx-auto rounded-xl hover:scale-105 img pt-2 md:pt-0'
                    src={product.strMealThumb}
                    alt={product.strMeal}
                  />
                  <h6 className='border-2 border-black hover:scale-105 rounded-lg mt-2 mb-1 text-center text-lg md:text-xl'>{product.strMeal}</h6>
                </NavLink>
              </div>
            );
          })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Subcategory