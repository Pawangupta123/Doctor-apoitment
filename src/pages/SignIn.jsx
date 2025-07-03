import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Input from "./Input";

import { FcGoogle } from "react-icons/fc";
import { login, logout } from "../authentication/auth"; 
import { SigninGoogle } from "../authentication/auth";

import Button from "../components/Button";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await login(formData);
      if (user) {
        navigate("/"); // redirect after login
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogle = async (e)=>{
    e.preventDefault();
    setError('');
    try {
      const user = await SigninGoogle();
      console.log("login with google ", user);
      navigate("/");
      
    } catch (error) {
      setError(err.message);
      
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className=" bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <br/>
          <Button onClick ={handleGoogle} className="w-full bg-blue-300 border border-gray-500
           text-black flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-300">        
          <FcGoogle className=" text-xl " />
          Sign in with Google
          </Button>

          <Button type="submit" className="w-full border-gray-500 hover:bg-gray-300">Login</Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/SignUp" className=" hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;