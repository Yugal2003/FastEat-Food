import React from 'react';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { addToCart, removeToCart, singleRemoveCart, emptycartIteam } from '../redux/Slice';
import toast from 'react-hot-toast';

const CartDetails = () => {
  const { cart } = useSelector((state) => state.allCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnty, setTotalQnty] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(addToCart(e));
    toast.success("Item Quantity Increment !");
  }

  const handleDecrement = (e) => {
    dispatch(singleRemoveCart(e));
    toast.success("Item Remove Successfully !");
  }

  const handleSingleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item Quantity Decrement !");
  }

  const emptyCart = () => {
    dispatch(emptycartIteam());
    toast.success("Remove All Items Successfully !");
  }

  const calculateTotal = () => {
    let totalPrice = 0;
    let totalQnty = 0;
    cart.forEach((ele) => {
      totalPrice += (ele.qnty * (ele.idMeal - 52000));
      totalQnty += ele.qnty;
    });
    setTotalPrice(totalPrice);
    setTotalQnty(totalQnty);
  }

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <>
      {/* header */}
      <div>
        <div className="h-20 md:h-24 flex flex-row fixed w-[100%] bg-orange-600 justify-between px-2 md:px-8 ">
          <div className='gap-2 flex flex-row text-white font-semibold items-center font-mono'>
            <NavLink to='/'><GiHotMeal size={"30"} /></NavLink>
            <NavLink to='/'><h2 className='text-3xl md:text-4xl'>FastEat</h2></NavLink>
          </div>

          <div className='signin_and_signout'>
        
            <p className='font-bold absolute text-white ml-6 md:ml-8 mt-2 md:mt-5 text-xl md:text-2xl rounded-xl text-center w-8'>{cart.length}</p>
            <NavLink to='/cart'><PiShoppingCartSimpleFill className='relative text-5xl items-center h-20 md:h-28 w-12 md:w-14 pr-2' /></NavLink>
          </div>
        </div>
      </div><br /><br /><br /><br />

      {/* main section */}

      <div className="w-[80%] my-2 mx-auto flex flex-row items-center justify-between">
        <h1 className="my-0 sm:my-4 text-2xl sm:text-3xl font-semibold">Product List</h1>
        <button className="text-white font-semibold text-sm sm:text-md border-none outline-none rounded-lg bg-red-500 px-2 py-1 sm:px-4 sm:py-2" onClick={emptyCart}>Remove All</button>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="w-full sm:w-[95%] md:w-[88%] mx-auto border-4 border-black">
          <thead className="border-4 border-black">
            <tr>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[15%] md:w-[15%]">Product</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[40%] sm:w-[32%] md:w-[32%]">Name</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[12%] md:w-[12%]">Price</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[10%] sm:w-[8%] md:w-[8%]">Qty</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[20%] md:w-[20%]">Amount</th>
            </tr>
          </thead>
          <tbody className="border-4 border-black">
            {cart.length >= 1 ? cart.map((cart) => (
              <tr key={cart.id}>
                <td className="border-4 border-black">
                  <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto" src={cart.strMealThumb} alt={cart.strMeal} />
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">{cart.strMeal}</p>
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">₹ {cart.idMeal - 52000}</p>
                </td>
                <td className="border-4 border-black">
                  <div className="flex justify-center items-center gap-1 sm:gap-8">
                    <button className="border-2 border-gray-400 px-2.5 rounded-lg text-sm sm:text-lg font-bold bg-red-600 outline-none" onClick={cart.qnty <= 1 ? () => handleDecrement(cart.idMeal) : () => handleSingleDecrement(cart)}>-</button>
                    <p className="text-sm sm:text-xl font-bold">{cart.qnty}</p>
                    <button className="border-2 border-gray-400 px-2 rounded-lg text-sm sm:text-lg font-bold bg-green-600 outline-none" onClick={() => handleIncrement(cart)}>+</button>
                  </div>
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">Total Amount: <span className="text-red-600 font-bold">{(cart.idMeal - 52000) * cart.qnty}</span></p>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="border-4 border-black">
                  <div className="flex flex-col justify-center items-center h-52">
                    <MdOutlineLocalGroceryStore className="text-gray-300" size={50} />
                    <p className="text-gray-400 text-xl">Your Cart is Empty!</p>
                  </div>
                </td>
              </tr>
            )}

          </tbody>
          <br />
          <tfoot>
            <tr className="text-end text-sm sm:text-lg border-4 border-black">
              <th>Cart Items: <span className="text-red-600 text-sm sm:text-xl">{totalQnty}</span></th>
              <th colSpan="4">Total Price: <span className="text-red-600 text-sm sm:text-xl ml-8">₹ {totalPrice}</span></th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default CartDetails;
