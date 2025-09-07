// src/app/docs/org/page.tsx
"use client";

// import { useState } from "react";
import Link from 'next/link';
import {
  Building,
  DollarSign,
  FileText,
  Users,
  Lock,
  Zap,
  BarChart3,
  ArrowRight,
  Star,
  Shield,
  Clock,
  ArrowRightLeft,
} from "lucide-react";

export default function OrgDocsPage() {
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);

//   const toggleSection = (section: string) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

  const companySteps = [
    {
      id: "setup",
      title: "Create Company Account",
      icon: <Building className="w-6 h-6" />,
      summary: "Set up your GitHub organization profile",
      details: [
        "Register your company account with GitHub organization integration",
        "Complete your profile with logo, description, and team info",
        "Connect repositories that need contributions",
        "Verify your company domain for credibility",
        "Set up team member access and permissions",
      ],
      tips: [
        "Use a company email for verification",
        "Add detailed info to attract contributors",
        "Connect multiple repositories for visibility",
      ],
    },
    {
      id: "fund",
      title: "Fund Your Wallet",
      icon: <DollarSign className="w-6 h-6" />,
      summary: "Add funds to pay for completed tasks",
      details: [
        "Connect your company Aptos wallet or create one",
        "Transfer tokens to fund bounty campaigns",
        "Set up recurring funding for ongoing projects",
        "Configure spending limits and approval workflows",
        "Monitor balance and spending via dashboard",
      ],
      tips: [
        "Maintain balance to avoid payout delays",
        "Set alerts for low balances",
        "Consider multi-sig wallets for security",
      ],
    },
    {
      id: "create",
      title: "Create Tasks & Bounties",
      icon: <FileText className="w-6 h-6" />,
      summary: "Post work opportunities for developers",
      details: [
        "Navigate to connected repos and create issues",
        "Write clear task descriptions with requirements",
        "Set fair reward amounts based on complexity",
        "Add labels, difficulty, and estimated completion",
        "Funds are locked in smart contracts automatically",
      ],
      tips: [
        "Write detailed tasks to attract quality work",
        "Set competitive rewards",
        "Include acceptance criteria and examples",
      ],
    },
    {
      id: "manage",
      title: "Manage Contributors",
      icon: <Users className="w-6 h-6" />,
      summary: "Review and approve contributions",
      details: [
        "Monitor pull requests from contributors",
        "Review code quality and requirements",
        "Provide feedback or request changes",
        "Approve and merge qualifying contributions",
        "Track performance and build relationships",
      ],
      tips: [
        "Give timely, constructive feedback",
        "Merge promptly to keep contributors engaged",
        "Build long-term contributor relationships",
      ],
    },
    {
      id: "automate",
      title: "Automatic Payments",
      icon: <Lock className="w-6 h-6" />,
      summary: "Smart contracts handle payments",
      details: [
        "Merging PRs triggers automatic reward release",
        "Payments go directly to contributor wallets",
        "All transactions recorded on Aptos blockchain",
        "View payment history and contributor analytics",
        "Automate workflows for common contributions",
      ],
      tips: [
        "Double-check before merging (irreversible payouts)",
        "Review payment history regularly",
        "Use analytics for contributor insights",
      ],
    },
    {
      id: "scale",
      title: "Scale Your Operations",
      icon: <BarChart3 className="w-6 h-6" />,
      summary: "Grow your contributor network",
      details: [
        "Analyze performance and outcomes",
        "Create recurring bounty programs",
        "Build a trusted contributor network",
        "Automate workflows for common tasks",
        "Export data for reporting and analysis",
      ],
      tips: [
        "Track ROI on contribution types",
        "Nurture top contributors",
        "Use templates for recurring bounties",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Instant Results",
      description: "Get issues resolved quickly by global talent",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Risk-Free",
      description: "Pay only when work is merged",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "24/7 Development",
      description: "Worldwide contributors across time zones",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Quality Assured",
      description: "Approve contributions before payment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#051419] text-white">
      <div className="mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600 p-3 rounded-full">
              <Building className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Companies Manual</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Guide for organizations to leverage global developer talent. Pay
            only for completed work with instant, secure transactions.
          </p>
        </div>
        <div className="mb-6">
          <Link
            href="/docs/dev"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
            Switch to Developer Docs
          </Link>
        </div>
        {/* Quick Flow */}
        <div className="bg-white/5 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Building className="w-6 h-6 text-indigo-400" />
            Quick Flow
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-indigo-500/10 rounded-lg">
              <Building className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <div className="font-semibold">Setup</div>
              <div className="text-sm text-gray-300">Company Profile</div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">Fund</div>
              <div className="text-sm text-gray-300">Add Balance</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="font-semibold">Post</div>
              <div className="text-sm text-gray-300">Create Tasks</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="font-semibold">Review</div>
              <div className="text-sm text-gray-300">Manage PRs</div>
            </div>
            <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="font-semibold">Auto-Pay</div>
              <div className="text-sm text-gray-300">Smart Contracts</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-lg text-gray-200 bg-white/10 px-6 py-3 rounded-full">
              <span className="font-semibold">Timeline:</span>
              <span>Setup (30m) → Post Task (5m) → Results (1-7d)</span>
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">{b.icon}</div>
              <h3 className="font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-300">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-white/5 rounded-lg shadow-sm overflow-hidden mb-8">
  <div className="p-6 border-b border-white/10">
    <h2 className="text-2xl font-semibold">Step-by-Step Guide</h2>
    <p className="text-gray-300 mt-2">
      Follow these steps to start leveraging global developer talent
    </p>
  </div>
  <div className="divide-y divide-white/10">
    {companySteps.map((step, index) => (
      <div key={step.id} className="p-6 hover:bg-white/5 transition-colors">
        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-lg flex-shrink-0">
            {step.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-300 mb-4">{step.summary}</p>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-indigo-300">Details</h4>
              <ul className="space-y-2 mb-6">
                {step.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-200">{d}</span>
                  </li>
                ))}
              </ul>
              
              {step.tips && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-yellow-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Pro Tips
                  </h4>
                  <div className="space-y-3">
                    {step.tips.map((tip, i) => (
                      <div
                        key={i}
                        className="text-sm text-green-200 bg-green-600/20 px-4 py-3 rounded-lg border-l-4 border-green-400"
                      >
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale?</h3>
          <p className="text-indigo-100 mb-6 text-lg max-w-2xl mx-auto">
            Join companies leveraging global developer talent. Get projects done
            faster while paying only for results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <Building className="w-5 h-5" />
              Create Company Account
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center gap-2">
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
