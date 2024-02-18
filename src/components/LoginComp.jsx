"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const auth = getAuth();

  // Function to handle regular email/password login
  const handleLogin = async () => {
    console.log("Login button clicked");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login successful", userCredential);
      router.replace("/Dashboard/Dashboard");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Invalid email or password", error);
    }
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Handle the signed-in user (result.user)
      console.log("Google Sign-In successful", result.user);
      router.replace("/Dashboard/Dashboard");
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
      // Handle the error
    }
  };

  return (
    <>
      <TextField
        label={t("Email")}
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        type="password"
        label={t("Password")}
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        {t("Login")}
      </Button>

      <Button
        onClick={handleGoogleSignIn}
        className="bg-red-500 ms-3 text-white p-2 rounded-md hover:bg-red-600 transition "
      >
        Sign In with Google
      </Button>
    </>
  );
};

export default LoginComp;
