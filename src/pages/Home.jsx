import React from "react";

import box from "../assets/images/box.png";
import van from "../assets/images/delivery-truck.png";
import clock from "../assets/images/24-hours.png";
import payment from "../assets/images/shield.png";
import chair from "../assets/images/chair.png";

import bedRoom from "../assets/images/home-bedroom-dept.avif";
import dinningRomm from "../assets/images/home-dining-room-dept.avif";
import livingRoom from "../assets/images/home-living-room-dept.avif";
import entertainment from "../assets/images/home-entertainment-dept.avif";
import homeOffice from "../assets/images/home-office-dept.avif";
import mattresses from "../assets/images/home-mattress-dept.avif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-100">
        <div className="flex lg:flex-row flex-col container mx-auto px-5 lg:h-120 ">
          <div className="lg:w-1/2 w-full flex flex-col  justify-center gap-3">
            <p className="text-sm">Welcome to chairy</p>
            <h1 className="text-5xl font-bold">
              Best furniture collection for your interior.
            </h1>
            <Link to="/products" className="text-center py-2 bg-cyan-600 w-27 font-bold text-sm text-white ">
              Show Now
            </Link>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-stone-300 w-90 h-90 rounded-full relative lg:bottom-18 z-0 max-lg:flex max-lg:justify-center">
              <img
                src={chair}
                alt="chair"
                className="w-60 relative lg:top-35 lg:left-16"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="lg:h-23 container mx-auto px-5 max-lg:mt-8">
        <div className="flex max-lg:flex-col justify-center items-center gap-10 h-full relative lg:bottom-12 shadow-2xl rounded-xl bg-white max-lg:py-4">
          <div className="flex">
            <img src={box} alt="box" className="h-10 w-auto item-center" />
            <div className="ml-3">
              <p className="text-sm font-bold">Discount</p>
              <p className="text-xs text-slate-500">Every week new sales</p>
            </div>
          </div>
          <div className="flex">
            <img src={van} alt="van" className="h-10 w-auto item-center" />
            <div className="ml-3">
              <p className="text-sm font-bold">Free Delivery</p>
              <p className="text-xs text-slate-500">100% Free for all orders</p>
            </div>
          </div>
          <div className="flex">
            <img src={clock} alt="clock" className="h-10 w-auto item-center" />
            <div className="ml-3">
              <p className="text-sm font-bold">Great Support 24/7</p>
              <p className="text-xs text-slate-500">We care your experiences</p>
            </div>
          </div>
          <div className="flex">
            <img
              src={payment}
              alt="payment"
              className="h-10 w-auto item-center"
            />
            <div className="ml-3">
              <p className="text-sm font-bold">secure Payment</p>
              <p className="text-xs text-slate-500">
                100% Secure Payment Method
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 max-lg:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Link to="/living-room">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40  ">
              <img
                src={livingRoom}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Living Room
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
          <Link to="/bed-room">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 ">
              <img
                src={bedRoom}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Bed Room
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
          <Link to="/dining-room">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 ">
              <img
                src={dinningRomm}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Dinning Room
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
          <Link to="/entertainment">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 ">
              <img
                src={entertainment}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Entertainment
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
          <Link to="/home-office">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 ">
              <img
                src={homeOffice}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Home Offices
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
          <Link to="/matress">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 ">
              <img
                src={mattresses}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Mattresses
              </h3>
              <p className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 text-xl text-center">
                Shop Now
              </p>
            </article>
          </Link>
        </div>
      </section>
    </>
  );
}
