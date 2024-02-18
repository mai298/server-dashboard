"use client"; // This is a client component 👈🏽

import React, { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { t, i18n } = useTranslation();


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
      alert("invalid email or password", error);
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
    </>
  );
};

export default LoginComp;
