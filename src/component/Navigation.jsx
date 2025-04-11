import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";

export default function Navigation() {
  return (
    <div className="h-12 flex container mx-auto px-5 justify-center items-center">
      <div className="lg:w-1/2 w-full">
        <ul className="flex h-full items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li className="hidden lg:block">
            <Categories />
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2 lg:flex justify-end items-center hidden">
        <p>Contact(808)555-0111</p>
      </div>
    </div>
  );
}
