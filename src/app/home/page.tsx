"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("✅ User logged in → redirecting to /dashboard");
      router.push("/dashboard");
    } else {
      console.log("❌ Not logged in → staying on /home");
    }
  }, [isLoggedIn, router]);

  const handleLogin = () => {
    const confirmed = confirm("Do you want to log in?");
    if (confirmed) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#051419] text-white">
      <h1 className="text-4xl font-bold text-center pt-20">
        Welcome to Altruist
      </h1>
      <p className="text-center text-gray-300 mt-4">
        Build. Deploy. Collaborate.
      </p>
      <div className="text-center mt-8">
        <button 
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
}