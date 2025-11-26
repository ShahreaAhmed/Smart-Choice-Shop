import React from "react";

import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/about">AboutUs</Link>
      <Link href="/contract">Contract</Link>
    </>
  );
  return (
    // <div className=' border-b border-b-black/20'>
    //    <div className='flex items-center justify-between  gap-3 mt-2 w-11/12 mx-auto'>
    //  <img className='ml-3 w-22' src="/appLogo1.png" alt="" />

    //     <div className='flex gap-6 mx-auto'>
    //   <Link href="/">Home</Link>
    // <Link href="/shop">Shop</Link>
    // <Link href="/about">AboutUs</Link>
    // <Link href="/contract">Contract</Link>
    //     </div>
    //      {/* Login Button - Gradient Primary */}
    //   <Link
    //     href="/login"
    //     className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg rounded-full px-5 py-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    //   >
    //     Login
    //   </Link>

    //   {/* Register Button - Gradient Secondary */}
    //   <Link
    //     href="/register"
    //     className="btn bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    //   >
    //     Register
    //   </Link>
    //    </div>

    // </div>

    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className=" w-11/12 mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <img className="ml-3 w-22" src="/appLogo1.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link href="/login" className="btn">
            Login
          </Link>
          <Link href="/register" className="btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
