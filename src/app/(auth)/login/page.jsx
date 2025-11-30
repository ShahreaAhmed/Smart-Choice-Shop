"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = await getIdToken(user);

    
      document.cookie = `token=${token}; path=/; max-age=3600`;

      router.push("/");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  // -------------------- GOOGLE LOGIN --------------------
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const token = await getIdToken(user);

      // Save token in cookies (1 hour)
      document.cookie = `token=${token}; path=/; max-age=3600`;

      router.push("/");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="md:min-h-screen py-15 flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold mb-4">Login now</h1>

          <form onSubmit={handleLogin}>
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

            <div className="mb-3">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-neutral w-full mb-3"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          {/* Google login */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
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

          {/* Register link */}
          <div className="text-center mt-3">
            <p className="text-sm">
              Do not have an account?{" "}
              <Link
                href="/register"
                className="hover:text-[#ed0585] font-medium underline"
              >
                Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}


