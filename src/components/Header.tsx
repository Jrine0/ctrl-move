"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WalletSelector } from "./WalletSelector";
import { useState, useEffect } from "react";

// 🔑 Replace with your actual auth hook (JWT, wallet connect, etc.)
function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Example check
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  return { loggedIn, setLoggedIn };
}

export function Header() {
  const { loggedIn } = useAuth();
  const pathname = usePathname();

  const navLinks = [
    { name: "Leaderboards", href: "/leaderboards" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "/docs" },
    { name: "Add Challenge", href: "/add-challenge" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 flex-wrap">
        {/* Logo (home or dashboard depending on auth) */}
        <Link
          href={loggedIn ? "/dashboard" : "/home"}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png" // put your logo inside /public/logo.png
            alt="Logo"
            width={32}
            height={32}
          />
          <h1 className="font-bold text-lg">Trust</h1>
        </Link>

        {/* Nav + Wallet */}
        <div className="flex items-center gap-4 flex-wrap">
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-indigo-400 transition-colors ${
                  pathname === link.href ? "text-indigo-500 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Wallet Selector (from your boilerplate) */}
          <WalletSelector />
        </div>
      </div>
    </header>
  );
}
