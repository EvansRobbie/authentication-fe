"use client";
import { useCustomToast } from "@/hooks/useToast";
import { postRequest } from "@/utils/axiosUtility";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { showErrorToast, showSuccessToast } = useCustomToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showErrorToast("Passwords do not match");
      return;
    }
    const data = {
      name,
      email,
      password,
      re_password: confirmPassword,
    };
    try {
      const res = await axios.post("/api/auth/register", data);
      //   console.log(res);
      showSuccessToast(res.data.res.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5 text-2xl font-semibold">Register Account</h2>
        <div className="mb-4">
          <label className="block mb-1"> Full name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Type your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Type your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="password"
            placeholder="Type your password"
            minLength={6}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirm Password </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="password"
            placeholder="Type your password"
            minLength={6}
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        <hr className="mt-4" />

        <p className="text-center mt-5">
          Already have an account?
          <Link href="/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
