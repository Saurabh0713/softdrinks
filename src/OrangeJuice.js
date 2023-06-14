import React from "react";
import orangeJuiceImg from "./Images/minute-maid.png";

export default function OrangeJuice() {
  return (
    <div className="box-border h-screen bg-gradient-to-r from-yellow-400 to-orange-500 lg:flex lg:flex-row lg:items-center lg:justify-center flex flex-col items-center justify-center">
      <div className="container rounded-xl w-3/4 h-3/4 bg-lime-600 md:flex md:flex-row md:items-center md:justify-evenly flex flex-col items-center justify-center shadow-xl">
        <img
          src={orangeJuiceImg}
          className=" hover:scale-110 duration-700 h-2/5 lg:h-4/5"
          alt="orange-juice"
        ></img>
        <div className="md:w-1/2 w-4/5 lg:h-3/4 max-h-max text-slate-50 m-4">
          <h3 className="lg:text-4xl md:text-2xl text-xl md:my-4 my-2">ORIGINAL ORANGE JUICE</h3>
          <p className="lg:text-2xl md:text-xl md:my-4 my-2">
            Authentic, timeless and downright deliciously refreshing juice made
            from perfectly ripe, natural oranges. That's what Minute Maid 100%
            Original is all about
          </p>
          <button className="md:text-xl text-center rounded-xl lg:m-4 m-2 px-3 lg:p-2 p-1 bg-orange-500 hover:bg-orange-600 duration-300 text-slate-50">
            Buy Now
          </button>
          <button className="md:text-xl text-center rounded-xl lg:m-4 m-2 px-3 lg:p-2 p-1 bg-orange-500 hover:bg-orange-600 duration-300 text-slate-50">
            Add to Cart
          </button>
          <div className="lg:flex lg:items-center lg:justify-end flex items-center justify-end m-2">
            <button className="md:text-xl text-center rounded-xl lg:p-2 p-1 px-3 bg-orange-600 hover:bg-lime-700 duration-300 text-slate-50">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
