"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleRememberMeChange = (e: any) => {
    setRememberMe(e.target.checked);
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response);

      if (response) {
        console.log("Login success", response.data);
        toast.success("Login success");
        // Set the user email in the cookie
        if (rememberMe) {
          Cookies.set("user-email", user.email);
        } else {
          Cookies.remove("user-email");
        }
        router.push("/profile");
      }
    } catch (error: any) {
      console.log("Login Failed: " + error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-full py-2  ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-start items-start "
      >
        <h1 className=" text-white text-2xl font-bold mb-4">
          {" "}
          {loading ? "Loading..." : "Log In"}
        </h1>
        <hr />

        <input
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black placeholder:text-sm"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <input
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black placeholder:text-sm"
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <div className="flex gap-1 mb-2 w-full text-left items-center ">
          <input
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 "
            onChange={handleRememberMeChange}
            // defaultChecked={rememberMe}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <button
          type="button"
          onClick={onLogin}
          className="w-full p-2 bg-gradient-to-bl  from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-white transition-all duration-500 ease-in-out"
        >
          {buttonDisabled ? "Login disabled" : "Login"}
        </button>
        <p>
          Don&apos;t have an account yet?{" "}
          <Link
            href="/signup"
            className="text-pink-500 hover:underline hover:text-pink-300 transition-shadow duration-500 ease-in-out delay-150"
          >
            Sign up!
          </Link>
        </p>
      </form>
    </div>
  );
}
