import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHandPointRight } from "react-icons/fa";
import { FaSpoon } from "react-icons/fa6";
import { addToCart } from "../redux/Slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Product = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const params = useParams();

  async function fetchProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`
    );
    console.log(result.data.meals[0]);
    setProduct(result.data.meals[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const send = (e) =>{
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart")
  }

  return (
    <div>
      <Navbar />
      <h1 className="flex justify-center text-xl md:text-2xl m-2 underline font-semibold">MEAL DETAILS</h1>

      <div>

        <div>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-12">
                   <div className="w-[75%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
                       <img className="md:ml-4 xl:ml-8 rounded-lg" src={product.strMealThumb} alt={product.strMeal} />   
                   </div>

              
                   <div className="flex flex-col w-[95%] md:w-[50%] border-t-2 border-black">
                      <button onClick={() => send(product)} className="mt-1 border-b-2 border-black font-semibold outline-none bg-sky-400 w-32 flex justify-center p-1 rounded-lg mb-1 hover:scale-105 mx-auto">Add To Cart</button>
                      <div className="bg-orange-200 rounded-lg p-2 md:p-4">
                          <h2 className="pt-1 md:pt-1 text-orange-500 font-bold text-2xl md:text-3xl flex justify-center">{product.strMeal}</h2>
                          <h4 className="pt-1 md:pt-3"><b>CATEGORY</b> : {product.strCategory}</h4>
                          <h4 className="pt-1 md:pt-3"><b>Source</b> : {product.strSource}</h4>
                          <h4 className="pt-1 md:pt-3 font-bold">Tags : {product.strTags}</h4>
                      </div>


                      <div className="">
                          <h3 className="flex justify-center text-2xl md:text-3xl text-orange-500 font-bold">INGREDIENTS</h3>
                          <div className="bg-orange-200 p-2 grid grid-cols-2 justify-center items-center text-center rounded-lg">

                              <div className="flex flex-row items-center gap-2 pt-2 pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient1}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient2}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient3}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient4}</p>
                              </div>

                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient5}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient6}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient7}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient8}</p>
                              </div>

                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient9}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient10}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient11}</p>
                              </div>
                              <div className="flex flex-row items-center gap-2 pt-2  pl-4">
                                  <FaHandPointRight/>
                                  <p>{product.strIngredient12}</p>
                              </div>

                          </div>
                      </div>

                   </div>
                   
              </div>
        </div>

        {/* Measure */}
        <div className="flex flex-col justify-center items-center">

          <h3 className="text-2xl md:text-3xl text-orange-500 font-bold">Measure</h3>

          <div className="bg-orange-200 p-2 grid grid-cols-2 w-[95%] md:w-[60%] lg:w-[40%] xl-w-[30%] rounded-lg">

            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure1}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure2}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure3}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure4}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure5}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure6}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure7}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure8}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure9}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure10}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure11}</p>
            </div>
            <div className="flex flex-row items-center gap-3 lg:gap-4 pl-4">
              <FaSpoon size={"16"}/>
              <p className="text-lg md:text-xl">{product.strMeasure12}</p>
            </div>

          </div>
        </div>

        {/* Products_Instructions */}
        <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-3xl m-2 text-orange-500 font-bold">Products_Instructions</h2>
              <p className="w-[90%] md:w-[80%] text-sm md:text-base">{product.strInstructions}</p>
          </div>

      </div>
      
      <Footer/>
    </div>
  );
  
};

export default Product;