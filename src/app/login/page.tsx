"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar2 from "../../../components/Navbar2";
import ButtonFill from "../../../components/Button";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn === "true") router.push("/admin");
  }, [router]);

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin@2025") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar2 />

      <div className="min-h-[100vh] flex items-center justify-center bg-[var(--white)] px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--login)] border border-[var(--primary-color,#1a3b5d)] 
                     rounded-2xl p-8 w-full max-w-sm shadow-xl text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-[var(--primary-color,#00bcd4)]">
            Admin Login
          </h2>

          <div className="space-y-5">
            {/* Username */}
            <div>
              <label className="text-sm font-semibold mb-1 block text-[var(--title)]">
                Username
              </label>
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                <FaUser className="mr-2 opacity-70 text-[var(--primary-color,#00bcd4)]" />
                <input
                  type="email"
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent focus:outline-none w-full text-[var(--text)] placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold mb-1 block text-[var(--title)]">
                Password
              </label>
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2 relative">
                <FaLock className="mr-2 opacity-70 text-[var(--primary-color,#00bcd4)]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent focus:outline-none w-full text-[var(--text)] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 text-[var(--primary-color,#00bcd4)] hover:opacity-80"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-center text-sm mt-2">{error}</p>
            )}

            {/* ✅ Replaced submit with onClick */}
            <div className="mt-4">
              <ButtonFill
                text="Login"
                onClick={handleLogin}
                className="w-full "
              />
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} Admin Panel
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
