import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="flex flex-col-reverse container mx-auto md:justify-evenly  justify-end  mt-16 items-center md:flex-row gap-y-10">
      <div className="flex flex-col md:w-1/2 gap-y-14 w-screen  md:justify-start justify-center items-center md:items-baseline  ">
        <div className="text-black md:text-6xl text-3xl font-semibold">
          Şansınızı yoxlayın!
        </div>
        <div className="flex flex-row gap-x-28">
          <div>
            <div className="md:text-7xl text-4xl font-medium text-black">500+</div>
            <div className="md:text-4xl text-2xl font-med text-black">Müştəri</div>
          </div>
          <div>
            <div className="md:text-7xl text-4xl font-medium text-black">1000+</div>
            <div className="md:text-4xl text-2xl font-med text-black">Məhsul</div>
          </div>
        </div>
        <div>
          <button className="p-2 rounded-lg w-48 bg-[#ED5C01] text-center  text-white hover:text-[#ed5c01] hover:border hover:border-solid hover:border-[#ed5c01] hover:bg-transparent">
            <Link to="/catgories">Bilet al</Link>
          </button>
        </div>
      </div>
      <div>
        <img src="Assets/Home/Banner.png" className="md:w-[598px] w-[336px]" />
      </div>
    </div>
  );
}

export default Banner;
