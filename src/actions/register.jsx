"use client";

import { auth, googleProvider } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// SIGNUP with Email & Password
export const signupWithEmail = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return { user };
  } catch (error) {
    return { error: error.message };
  }
};

// SIGNUP/LOGIN with Google
export const signupWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user };
  } catch (error) {
    return { error: error.message };
  }
};

