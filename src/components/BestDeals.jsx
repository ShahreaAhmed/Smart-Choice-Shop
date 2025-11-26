import React from "react";
import { Star, Heart } from 'lucide-react';
import dayjs from "dayjs";

export default function BestDeals() {

  const monthName = dayjs().format("MMMM");
  return (
    // <div className="flex w-11/12 mx-auto gap-3 mt-4">
    //   <div className="flex bg-[#f7f7f7] items-center w-full justify-between rounded-sm">
    //     <div className="pl-10">
    //       <p className="text-[#8c8e8f] text-[10px] font-semibold">
    //         Electronics, Minimal
    //       </p>
    //       <h1 className="font-bold text-2xl mt-0.5">
    //         Get Holiday <br /> Deals
    //       </h1>
    //       <button className="bg-yellow-400 text-[14px] font-bold px-4 py-2 rounded-xs mt-3 cursor-pointer text-gray-900 shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.05]">
    //         View Collection
    //       </button>
    //     </div>
    //     <img src="/watchImage.png" className="w-38 mr-6 drop-shadow-xl" alt="" />
    //   </div>
    //   <div className="flex bg-[#f7f7f7] items-center w-full justify-between rounded-sm">
    //     <div className="pl-10">
    //       <p className="text-[#8c8e8f] text-[12px] font-semibold">
    //         Ultra-Speed
    //       </p>
    //       <h1 className="font-bold text-2xl mt-0.5">
    //         Enter the new world of <br />{" "}
    //         <span className="font-bold">gaming with PS5</span>
    //       </h1>
    //       <button className="bg-yellow-400 text-[14px] font-bold px-4 py-2 rounded-xs mt-3 cursor-pointer text-gray-900 shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.05]">
    //         Buy Now
    //       </button>

    //       {/* className="px-8 py-3.5 text-lg font-bold bg-yellow-400 rounded-lg text-gray-900 shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.05]" */}
    //     </div>
    //     <img src="/ps5Image.png" className="w-38 mr-6 drop-shadow-xl" alt="" />
    //   </div>
    // </div>


    <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              <Star size={18} className="text-gray-300" stroke="currentColor" />
              <span className="text-gray-500 ml-2 text-sm font-medium">4 reviews</span>
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
              <div className="bg-red-600 h-3 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 font-medium">
              <span>Available: <span className="text-gray-900 font-bold">15</span></span>
              <span>Sold: <span className="text-gray-900 font-bold">35</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Timer (Static Numbers) */}
      <div className="bg-gray-50 border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-4">
        
        {/* Timer Boxes */}
        {/* <div className="flex gap-2 text-white font-bold text-lg">
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">14</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">10</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">06</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">24</div>
        </div> */}

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
              <Star size={18} className="text-gray-300" stroke="currentColor" />
              <span className="text-gray-500 ml-2 text-sm font-medium">4 reviews</span>
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

          {/* Stock Progress Bar (Static) */}
          <div className="">
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              {/* Change width here to simulate progress (e.g., width: '60%') */}
              <div className="bg-red-600 h-3 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 font-medium">
              <span>Available: <span className="text-gray-900 font-bold">17</span></span>
              <span>Sold: <span className="text-gray-900 font-bold">43</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Timer (Static Numbers) */}
      <div className="bg-gray-50 border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-4">
        
        {/* Timer Boxes */}
        {/* <div className="flex gap-2 text-white font-bold text-lg">
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">14</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">10</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">06</div>
          <span className="text-red-600 text-2xl py-1">:</span>
          <div className="bg-red-600 rounded px-3 py-2 min-w-[45px] text-center">24</div>
        </div> */}

        {/* Footer Text */}
        <div className="text-gray-600 font-medium text-sm">
          Time remaining until the end of the offer.
        </div>
      </div>

    </div>
    </div>
  );
}

// import React from 'react';

// /**
//  * A minimalist, high-impact Hero Banner component for displaying best deals.
//  * Design is based on the previously requested style (bold text, yellow CTA).
//  */
// export default function BestDeals() {
//   return (
//     // Outer Container (Ensure padding and centering for full page use)
//     <div className="max-w-7xl mx-auto my-12 md:my-16 px-4">

//       {/* Banner Card */}
//       <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">

//         <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">

//           {/* Left Side: Text and CTA */}
//           <div className="flex-1 space-y-6 md:space-y-8 max-w-lg text-center md:text-left">

//             {/* Muted Subtitle: Limited Time Offer */}
//             <p className="text-lg font-medium tracking-widest text-gray-500 uppercase">
//               Limited Time Offer
//             </p>

//             {/* Bold Headline (Two Lines) */}
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
//               Grab The
//               <br/>
//               Best Deals Now
//             </h2>

//             {/* Primary CTA Button (Yellow/Gold color palette) */}
//             <button className="px-8 py-3.5 text-lg font-bold text-gray-900 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.05]">
//               Shop Flash Sale
//             </button>
//           </div>

//           {/* Right Side: img Placeholder (Flex-1 ensures responsive sizing) */}
//           <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
//             {/* Note: Use the Next.js <img /> component for production,
//               but using <img> here for simple copy-paste functionality.
//               Replace the src with your actual Best Deals banner img.
//             */}
//             <img
//               src="https://imgs.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop"
//               alt="Exclusive Deals Product"
//               className="max-w-full h-auto w-[400px] object-contain"
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
