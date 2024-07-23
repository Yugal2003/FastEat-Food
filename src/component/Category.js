import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Category = () => {
    const [category , setCategory] = useState([]);

    async function fetchCategory(){
        const result = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(result.data.categories);
        setCategory(result.data.categories);
    }

    useEffect(() => {
        fetchCategory();
    },[]);

    return (
        <div className='whole_category_page'>
          <h1 className='underline text-2xl md:text-3xl m-2 font-serif flex justify-center'>Category</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              category.map((subCategory) => {
                return (
                  <div className='border-2 rounded-lg border-gray-400 subcategory_flex mx-2' key={subCategory.idCategory}>
                    <NavLink to={`/subcategory/${subCategory.strCategory}`}>
                      <div className='subcategory_img_with_name'>
                        <img className='h-48 w-[70%] mx-auto rounded-lg hover:scale-105' src={subCategory.strCategoryThumb} alt={subCategory.strCategory}/>
                        <h2 className='text-center text-lg md:text-2xl'>{subCategory.strCategory}</h2>
                      </div>
                    </NavLink>
                  </div>
                );
              })
            }
          </div>
        </div>
      )
      
}

export default Category