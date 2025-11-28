"use client";

import { auth, googleProvider } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Email/Password login
export const loginWithEmail = async (email, password) => {
  let result = {};
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential && userCredential.user) {
      result.user = userCredential.user;
    } else {
      result.error = "Unknown error occurred during login.";
    }
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      result.error = "User not found. Please register first.";
    } else if (error.code === "auth/wrong-password") {
      result.error = "Incorrect password. Try again.";
    } else if (error.code === "auth/invalid-email") {
      result.error = "Invalid email format.";
    } else {
      result.error = error.message;
    }
  }
  return result;
};

// Google login
export const loginWithGoogle = async () => {
  let result = {};
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    if (userCredential && userCredential.user) {
      result.user = userCredential.user;
    } else {
      result.error = "Google login failed. Try again.";
    }
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      result.error = "Login popup closed. Try again.";
    } else {
      result.error = error.message;
    }
  }
  return result;
};
