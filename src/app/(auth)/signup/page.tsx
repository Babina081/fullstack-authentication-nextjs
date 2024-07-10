"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <form action="" className="flex flex-col justify-start items-start ">
        <h1 className=" text-white text-2xl font-bold mb-4">
          {loading ? "Loading...." : "Sign Up"}
        </h1>
        <hr />

        <input
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black  placeholder:text-sm
 "
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />

        <input
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black  placeholder:text-sm
 "
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <input
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black  placeholder:text-sm
 "
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <label htmlFor="forgot-password" className="mb-2 w-full text-right">
          <Link href="/forgot-password">Forgot password?</Link>
        </label>

        <button
          onClick={onSignup}
          className="w-full p-2 bg-gradient-to-bl  from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-white transition-all duration-500 ease-in-out  "
        >
          {buttonDisabled ? "Signup Disabled" : "Signup"}
        </button>
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-pink-500 hover:underline hover:text-pink-300 transition-shadow duration-500 ease-in-out delay-150"
          >
            Login Now!
          </Link>
        </p>
      </form>
    </div>
  );
}
