import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"; // ✅ Import Axios

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !fullName)) {
      return handleError("All fields are required.");
    }

    try {
      const url = isLogin
        ? "https://deploy-mern-app-1-api.vercel.app/auth/login"
        : "https://deploy-mern-app-1-api.vercel.app/auth/signup";

      const data = isLogin
        ? { email, password }
        : { name: fullName, email, password };

      const response = await axios.post(url, data); // ✅ Axios POST

      const { success, message, error, jwtToken, name } = response.data;

      if (success) {
        handleSuccess(message);

        if (isLogin) {
          localStorage.setItem("token", jwtToken);
          localStorage.setItem("loggedInUser", name);
          setTimeout(() => navigate("/home"), 1000);
        } else {
          setTimeout(() => setIsLogin(true), 1000);
        }
      } else if (error) {
        const detail = error?.details?.[0]?.message;
        handleError(detail || "Something went wrong");
      } else {
        handleError(message || "Unexpected error");
      }

    } catch (err) {
      const msg = err?.response?.data?.error || err.message || "Network error";
      handleError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4eee9] px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
        {/* Toggle Tabs */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`text-lg font-semibold pb-1 border-b-2 ${
              isLogin
                ? "border-[#5e4636] text-[#5e4636]"
                : "border-transparent text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-lg font-semibold pb-1 border-b-2 ${
              !isLogin
                ? "border-[#5e4636] text-[#5e4636]"
                : "border-transparent text-gray-400"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring focus:ring-[#5e4636]/50"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring focus:ring-[#5e4636]/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring focus:ring-[#5e4636]/50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#5e4636] hover:bg-[#4c392d] text-white font-semibold rounded-md transition duration-200"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Switch Link */}
        <div className="text-center text-sm text-gray-500 mt-4">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#5e4636] hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#5e4636] hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
