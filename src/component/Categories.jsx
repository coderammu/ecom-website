import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="group relative cursor-pointer py-2">
      <div className="flex items-center justify-between space-x-5 bg-white">
        <span className="menu-hover my-2  text-base font-medium text-black lg:mx-4">
          Category
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-gray-800 shadow-xl group-hover:visible">
        <Link
          to="/living-room"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Living Room{" "}
        </Link>

        <Link
          to="bed-room"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Bed Room{" "}
        </Link>

        <Link
          to="dining-room"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Dining Room{" "}
        </Link>

        <Link
          to="/entertainment"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Entertainment{" "}
        </Link>

        <Link
          to="/home-office"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Home Office{" "}
        </Link>

        <Link
          to="/matress"
          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Mattress{" "}
        </Link>
      </div>
    </div>
  );
}
