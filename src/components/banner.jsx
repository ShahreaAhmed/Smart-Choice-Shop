import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#fcf0e6] mt-6 rounded-lg w-11/12 mx-auto flex items-center justify-around">
      <div>
        <h2 className="font-bold text-2xl text-[#02066b]">
          Grab Upto 50% Off On <br /> Selected Headphone
        </h2>
        <button className="bg-[#ed0585] text-white text-[12px] py-1.5 rounded-sm px-3 font-semibold mt-2 cursor-pointer">
          Shop Now
        </button>
      </div>
      <img src="headphoneOffer.png" className="w-60" alt="" />
    </div>
  );
}
