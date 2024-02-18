"use client"; // This is a client component 👈🏽

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Replace with the correct path
import { useState } from "react";
import { useRouter } from 'next/navigation';
import "./SignUpComp.css";
import LoginComp from "./LoginComp";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Dashboard from "@/Pages/Dashboard/Dashboard";


export default function SignUpComp({ router, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const { t, i18n } = useTranslation();


  const toggleForm = () => {
    setHasAccount(!hasAccount);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created successfully!", userCredential.user);
      alert("User created successfully!");
      router.push(src\Pages\Dashboard\Dashboard.jsx);
    
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("this email in use ,Choose another email", error);
    }
  };

  return (
    <section className="sign">
      <Container>
        <Row>
          <Col lg={12} md={6}>
            <div className="  max-w-md mx-auto  shadow-md
              backdrop-blur-md bg-opacity-60
               bg-white rounded-md p-8
                absolute top-1/2 left-1/2
                 transform -translate-x-1/2
                  -translate-y-1/2">
                    
              <h2 className="text-2xl text-black font-semibold mb-6">
                {hasAccount ? t("Sign In") : t("Sign Up")}
              </h2>
              {/* Render Sign Up or Login component based on the hasAccount state */}
              {hasAccount ? (
                <LoginComp handleLogin={handleLogin} />
              ) : (
                <>
                  <Form style={{ width: "25rem" }}>
                    <InputGroup className="mb-3">
                      <Form.Label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        {t("Name")}
                      </Form.Label>
                      <Form.Control
                        placeholder={t("Username")}
                        aria-label="Username"
                        id="name"
                        value={name}
                        className="mt-1 p-2 w-full border rounded-md"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label className="block text-sm font-medium text-gray-600">
                        {t("Email address")}
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder={t("Enter email")}
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label className="block text-sm font-medium text-gray-600">
                        {t("Password")}
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t("Password")}
                      />
                    </Form.Group>
                    <Button
                      onClick={handleSignup}
                      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                      {t("Sign Up")}
                    </Button>
                  </Form>
                </>
              )}

              {/* Already have an account */}
              <p className="mt-4 text-sm text-gray-600">
                {hasAccount
                  ? t("Don't have an account?")
                  : t("Already have an account?")}
                <Button onClick={toggleForm}>
                  {hasAccount ? t("Sign Up") : t("Sign In")}
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
