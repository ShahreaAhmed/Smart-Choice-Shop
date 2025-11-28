import React from "react";
import { Star, Heart } from "lucide-react";
import dayjs from "dayjs";

export default function BestDeals() {
  const monthName = dayjs().format("MMMM");
  return (
    <div className=" w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="max-w-4xl mx-auto my-10 bg-white border-4 border-red-600 rounded-xl overflow-hidden font-sans shadow-lg">
        {/* 1. Header Bar */}
        <div className="bg-red-600 text-white py-3 px-4 font-bold text-lg tracking-wide">
          Time is running out, don't miss the opportunity.
        </div>

        {/* 2. Main Content Area */}
        <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8">
          {/* Left Side: Product Image & Badge */}
          <div className="relative w-full md:w-5/12 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-bold text-lg z-10 shadow-md">
              32%
            </div>

            {/* Wishlist Icon */}
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-red-600">
              <Heart size={20} />
            </button>

            {/* Static Image */}
            <img
              src="/watchImage.png"
              alt="Luxury Watch"
              className="w-40 h-auto max-h-[200px] object-contain"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <div>
              {/* Star Rating (Static) */}
              <div className="flex items-center text-yellow-400 mb-2">
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star
                  size={18}
                  className="text-gray-300"
                  stroke="currentColor"
                />
                <span className="text-gray-500 ml-2 text-sm font-medium">
                  4 reviews
                </span>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                Luxury Automatic Dive Watch - Black/Silver
              </h2>

              {/* Unit Tag */}
              <span className="inline-block mt-3 bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                1 Unit
              </span>

              {/* Price Section */}
              <div className="flex items-end gap-3 mt-4">
                <span className="text-gray-400 text-lg font-medium line-through">
                  $350.00
                </span>
                <span className="text-red-600 text-3xl font-extrabold">
                  $220.00
                </span>
              </div>
            </div>

            {/* Stock Progress Bar (Static) */}
            <div className="">
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                {/* Change width here to simulate progress (e.g., width: '60%') */}
                <div
                  className="bg-red-600 h-3 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>
                  Available: <span className="text-gray-900 font-bold">15</span>
                </span>
                <span>
                  Sold: <span className="text-gray-900 font-bold">35</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Timer (Static Numbers) */}
        <div className="bg-gray-50 border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-4">
          {/* Footer Text */}
          <div className="text-gray-600 font-medium text-sm">
            Time remaining until the end of the {monthName} offer.
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-10 bg-white border-4 border-red-600 rounded-xl overflow-hidden font-sans shadow-lg w-full">
        {/* 1. Header Bar */}
        <div className="bg-red-600 text-white py-3 px-4 font-bold text-lg tracking-wide">
          Time is running out, don't miss the opportunity.
        </div>

        {/* 2. Main Content Area */}
        <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8">
          {/* Left Side: Product Image & Badge */}
          <div className="relative w-full md:w-5/12 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-bold text-lg z-10 shadow-md">
              23%
            </div>

            {/* Wishlist Icon */}
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-red-600">
              <Heart size={20} />
            </button>

            {/* Static Image */}
            <img
              src="/ps5Image.png"
              alt="Luxury Watch"
              className="w-30 h-auto max-h-[200px] object-contain"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <div>
              {/* Star Rating (Static) */}
              <div className="flex items-center text-yellow-400 mb-2">
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star size={18} fill="currentColor" stroke="currentColor" />
                <Star
                  size={18}
                  className="text-gray-300"
                  stroke="currentColor"
                />
                <span className="text-gray-500 ml-2 text-sm font-medium">
                  4 reviews
                </span>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                Soni PlayStation 5 Slim (PS5)
              </h2>

              {/* Unit Tag */}
              <span className="inline-block mt-3 bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                1 Unit
              </span>

              {/* Price Section */}
              <div className="flex items-end gap-3 mt-4">
                <span className="text-gray-400 text-lg font-medium line-through">
                  $680.00
                </span>
                <span className="text-red-600 text-3xl font-extrabold">
                  $470.00
                </span>
              </div>
            </div>

            {/* Stock Progress Bar */}
            <div className="">
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-red-600 h-3 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>
                  Available: <span className="text-gray-900 font-bold">17</span>
                </span>
                <span>
                  Sold: <span className="text-gray-900 font-bold">43</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-4">
          {/* Footer Text */}
          <div className="text-gray-600 font-medium text-sm">
            Time remaining until the end of the offer.
          </div>
        </div>
      </div>
    </div>
  );
}
