"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Update profile fields
      if (displayName || photoURL) {
        await updateProfile(user, {
          displayName,
          photoURL,
        });
      }

      // Generate token
      const token = await getIdToken(user);

      // Save token inside cookie
      document.cookie = `token=${token}; path=/; max-age=3600`;

      alert("Signup successful!");
      router.push("/"); 
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  
  const handleGoogleSignup = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // Generate token
      const token = await getIdToken(user);

      // Save token in cookies
      document.cookie = `token=${token}; path=/; max-age=3600`;

      alert("Google login successful!");
      router.push("/manageProduct");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="md:in-h-screen py-15 flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold mb-4">Register now</h1>

          <form onSubmit={handleSignup}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input mb-3"
              placeholder="Your Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input mb-3"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn btn-neutral w-full mb-3"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="btn w-full bg-white text-black border-[#e5e5e5] hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            disabled={loading}
          >
            <img
              className="w-4 h-4"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          {/* Login link */}
          <div className="text-center mt-3">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:text-[#ed0585] font-medium underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
