"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // USER LOGGED IN → TOKEN SET TO COOKIE
        const token = await currentUser.getIdToken();
        document.cookie = `token=${token}; path=/;`;
      } else {
        // USER LOGGED OUT → TOKEN REMOVE
        document.cookie =
          "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      }
    });

    return () => unsubscribe();
  }, []);

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);

      // REMOVING COOKIE ON LOGOUT
      document.cookie =
        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      <Link href="/about">AboutUs</Link>
      <Link href="/contract">Contract</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <img className="ml-3 w-22" src="/appLogo1.png" alt="Logo" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className="pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName || "User"}</li>
                  <li className="text-xs">{user.email}</li>
                </div>

                <li className="mt-3">
                  <Link href="/addProduct">Add Product</Link>
                </li>

                <li>
                  <Link href="/manageProduct">Manage Products</Link>
                </li>

                <li>
                  <button
                    onClick={signOutUser}
                    className="btn btn-xs text-left bg-gradient-to-r from-pink-500 to-red-500 text-white"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex">
              <Link
                href="/login"
                className="btn rounded-full border-gray-300 btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn rounded-full border-gray-300 btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
