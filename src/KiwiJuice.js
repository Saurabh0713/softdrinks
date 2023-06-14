import React from "react";
import kiwiSlice from "./Images/kiwi-png-1068728.png";
import strawberries from "./Images/strawberries-png-1487322.png";
import minuteMaid from "./Images/Minute-Maid_Lemonades.png";

export default function KiwiJuice() {
  return (
    <div className="w-full h-screen p-4 bg-yellow-800 flex flex-col md:flex md:flex-row sm:flex-col md:items-center items-center md:justify-center justify-center">
      <div className="relative lg:w-1/3 md:w-1/2 w-4/5 md:h-3/4 h-1/2 rounded-l-lg  md:bg-lime-600">
        <img
          className="absolute top-12 left-4 md:h-80 h-56"
          src={kiwiSlice}
        ></img>
        <img
          className="absolute bottom-0 md:-right-20 right-14 h-1/3"
          src={strawberries}
        ></img>
        <img
          className="absolute -bottom-10 md:right-10 hover:scale-110 duration-500 h-3/4"
          src={minuteMaid}
        ></img>
      </div>
      <div className="p-4 lg:w-1/3 md:w-1/2 w-4/5 md:h-3/4 max-h-max rounded-r-lg bg-yellow-700 text-green-900">
        <p className="md:text-4xl text-2xl my-4">KIWI STRAWBERRY</p>
        <p className="md:text-2xl text:xl">
          Minute Maid Kiwi Strawberry blends the tartness of kiwi with sweet
          strawberries into one delicious juice drink. Bring this refreshing
          medley of fruit flavors wherever you go.
        </p>
        <button className="md:text-xl text-center rounded-xl mx-2 md:my-6 my-4 px-3 md:p-2 p-1 bg-rose-600 hover:bg-rose-700 duration-300 text-slate-50">
          Buy Now
        </button>
        <button className="md:text-xl text-center rounded-xl mx-2 md:my-6 my-4 px-3 md:p-2 p-1  bg-rose-600 hover:bg-rose-700 duration-300 text-slate-50">
          Add to Cart
        </button>
        <div className="md:flex md:items-center md:justify-end flex justify-end">
          <button className="md:text-xl text-center rounded-xl md:p-2 p-1 px-3 bg-lime-700 hover:bg-green-900 duration-300 text-slate-50">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
}
