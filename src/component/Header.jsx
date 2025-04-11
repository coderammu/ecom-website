import React, { useContext } from "react";

import logo from "../assets/images/Logo.png";
// import cart from "../assets/images/bag.png"
// import wishList from "../assets/images/whishlist.png"
// import profile from "../assets/images/profile.png"
import { Link } from "react-router-dom";
import { ProductContext } from "../App";

export default function Header() {
  const contextValues = useContext(ProductContext);

  console.log(contextValues);

  const { products } = contextValues;

  const { cart, wishList } = products;

  return (
    <div className="h-15 bg-neutral-100 ">
      <div className="container mx-auto px-5 flex h-full">
        <div className="lg:w-1/3 w-1/2 flex items-center">
          <Link to="/" className="inline-block">
            <img src={logo} alt="logo" className="w-[80%] h-auto" />
          </Link>
        </div>
        <div className="lg:w-1/3  items-center hidden lg:flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here..."
            className="w-[90%] px-5 py-2 bg-white rounded-md"
          />
        </div>
        <div className="lg:w-1/3 w-1/2 flex justify-end items-center lg:gap-4 gap-2">
          {/* <img src={cart} alt="cart" className='w-5 h-auto'/>
                <img src={wishList} alt="wishList" />
                <img src={profile} alt="profile" /> */}
          <Link to="cart">
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </Link>
          ({cart.length})
          <Link to="wish-list">
            <i className="fa-solid fa-heart fa-lg"></i>
          </Link>
          ({wishList.length})
          <i className="fa-solid fa-user fa-lg !hidden lg:!inline-block"></i>
        </div>
      </div>
    </div>
  );
}
