// src/app/docs/dev/page.tsx
"use client";

import { useState } from "react";
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Users,
  Github,
  Wallet,
  Search,
  FileText,
  CheckCircle,
  Zap,
  ArrowRight,
  Star,
  DollarSign,
  ArrowRightLeft 
} from "lucide-react";

export default function DevDocsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const contributorSteps = [
    {
      id: "signup",
      title: "Sign Up / Login",
      icon: <Github className="w-6 h-6" />,
      summary: "Connect with GitHub to get started",
      details: [
        'Click "Login with GitHub" on the platform',
        "Authorize the app to read your public repositories",
        "This links your GitHub identity to your account",
        "Your profile will be used to showcase contributions",
      ],
      tips: [
        "Make sure your GitHub profile is public",
        "Add a professional README to your profile repo",
      ],
    },
    {
      id: "wallet",
      title: "Connect Your Wallet",
      icon: <Wallet className="w-6 h-6" />,
      summary: "Link your Aptos wallet for instant payments",
      details: [
        'Click "Connect Wallet" on the dashboard',
        "Choose an Aptos wallet (Petra, Martian, Pontem)",
        "Approve the connection for reward distribution",
        "Your wallet address will be securely linked",
      ],
      tips: [
        "Never share your private keys",
        "You can change wallets in settings",
        "Use a hardware wallet for extra security",
      ],
    },
    {
      id: "browse",
      title: "Browse Available Tasks",
      icon: <Search className="w-6 h-6" />,
      summary: "Explore opportunities that match your skills",
      details: [
        "Navigate to the Task Marketplace after login",
        "Filter tasks by tech stack, difficulty, or reward",
        "Each task shows repo, description, reward, deadline",
        "Read the full issue description carefully",
      ],
      tips: [
        "Use filters for faster matching",
        "Check repo contribution guidelines",
        "Start with small tasks to build reputation",
      ],
    },
    {
      id: "submit",
      title: "Submit Your Work",
      icon: <CheckCircle className="w-6 h-6" />,
      summary: "Create and submit your pull request",
      details: [
        "Follow repository coding standards",
        "Write tests for your code",
        "Create a clear pull request",
        "Update docs if user-facing features change",
      ],
      tips: [
        "Follow PR templates if available",
        "Test thoroughly before submission",
        "Write clear commit messages",
      ],
    },
    {
      id: "payment",
      title: "Get Paid Instantly",
      icon: <Zap className="w-6 h-6" />,
      summary: "Rewards are automatic on merge",
      details: [
        "Smart contract releases rewards after merge",
        "Tokens go directly to your Aptos wallet",
        "No manual steps required",
        "Transaction hash is recorded",
      ],
      tips: [
        "Check your wallet balance after merge",
        "Track earnings in the dashboard",
        "Gas fees are covered by the platform",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#051419] text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Developer Docs</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Step-by-step guide for contributors. Connect GitHub + Wallet, start
            coding, and earn instantly.
          </p>
        </div>
        <div className="mb-6">
          <Link
            href="/docs/org"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
            Switch to Organization Docs
          </Link>
        </div>

        {/* Quick Summary */}
        <div className="bg-white/5 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            Quick Flow
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="font-semibold">Connect</div>
              <div className="text-sm text-gray-300">GitHub + Wallet</div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-lg">
              <Search className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">Find</div>
              <div className="text-sm text-gray-300">Browse Tasks</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="font-semibold">Code</div>
              <div className="text-sm text-gray-300">Submit PR</div>
            </div>
            <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
              <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="font-semibold">Earn</div>
              <div className="text-sm text-gray-300">Get Paid</div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white/5 rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold">Step-by-Step Guide</h2>
          </div>
          <div className="divide-y divide-white/10">
            {contributorSteps.map((step, index) => (
              <div key={step.id}>
                <button
                  onClick={() => toggleSection(step.id)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-300">{step.summary}</p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {expandedSection === step.id ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>
                {expandedSection === step.id && (
                  <div className="px-6 pb-6 bg-white/5">
                    <div className="pt-4">
                      <h4 className="font-semibold mb-3">
                        Detailed Instructions
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                            <span className="text-gray-200">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {step.tips && (
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            Pro Tips
                          </h4>
                          <div className="space-y-2">
                            {step.tips.map((tip, i) => (
                              <div
                                key={i}
                                className="text-sm text-green-200 bg-green-600/20 px-4 py-2 rounded-lg border-l-4 border-green-400"
                              >
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Join developers earning rewards for open source contributions. Build
            reputation while getting paid instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              Login with GitHub
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              Browse Tasks
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
