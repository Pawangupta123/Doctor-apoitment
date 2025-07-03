// src/pages/Signup.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createAccount } from "../authentication/auth";
import { useNavigate } from "react-router-dom";
import Input from './Input'
import Button from "../components/Button";
import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError("");
    try {
      const user = await createAccount({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (user) {

        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-gray-200 shadow">
        <h2 className="text-center text-2xl font-bold">Create an Account</h2>
        <p className="mt-2 text-center text-gray-500">
          Already have an account?{" "}
          <Link to='/login' className=" text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input
            label="Name"
            placeholder="Enter your name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
