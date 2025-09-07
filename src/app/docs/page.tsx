// src/app/docs/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // if you’re using shadcn/ui
import { Github, Wallet } from "lucide-react";

export default function DocsPage() {
  const [isGithubLoggedIn, setIsGithubLoggedIn] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Dummy handlers – replace with your real GitHub OAuth + wallet connect logic
  const handleGithubLogin = () => {
    setIsGithubLoggedIn(true);
    console.log("✅ Logged in with GitHub");
  };

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
    console.log("✅ Web3 wallet connected");
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
      <p className="text-gray-300 mb-10">
        Follow the steps below to set up your account and start building.
      </p>

      {/* Step 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Log in with GitHub</h2>
        <p className="text-gray-400 mb-4">
          Authenticate using your GitHub account to enable developer features.
        </p>
        <Button
          onClick={handleGithubLogin}
          className="flex items-center gap-2 bg-black hover:bg-gray-800"
        >
          <Github size={18} />
          {isGithubLoggedIn ? "✅ Logged In" : "Login with GitHub"}
        </Button>
      </div>

      {/* Step 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Connect your Web3 Wallet</h2>
        <p className="text-gray-400 mb-4">
          Connect your Aptos wallet to interact with challenges and on-chain features.
        </p>
        <Button
          onClick={handleWalletConnect}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
        >
          <Wallet size={18} />
          {isWalletConnected ? "✅ Wallet Connected" : "Connect Wallet"}
        </Button>
      </div>

      {/* Step 3 */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">3. Explore the Docs</h2>
        <p className="text-gray-400 mb-4">
          Once authenticated, you can access{" "}
          <a href="/docs/dev" className="text-indigo-400 underline">
            Developer Docs
          </a>{" "}
          and{" "}
          <a href="/docs/org" className="text-indigo-400 underline">
            Organization Docs
          </a>.
        </p>
      </div>
    </div>
  );
}