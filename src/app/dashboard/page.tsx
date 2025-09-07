"use client";

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  DollarSign,
  Settings,
  Bell,
  BarChart2,
  User,
  ListChecks,
} from 'lucide-react';

// Define the types for the StatCard props
interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  change?: string; // Optional prop
  color: string;
}

// A reusable Stat Card component
const StatCard = ({ icon: Icon, title, value, change, color }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {change && (
        <span className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      )}
    </div>
    <div className="mt-4">
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  </div>
);


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentActivity = [
    { id: 1, user: 'Sarah Chen', action: 'completed a challenge', time: '2m ago' },
    { id: 2, user: 'Mike Rodriguez', action: 'achieved a new badge', time: '15m ago' },
    { id: 3, user: 'Alex Thompson', action: 'started a new course', time: '1h ago' },
    { id: 4, user: 'Emma Wilson', action: 'reached Level 5', time: '3h ago' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'users', label: 'Users', icon: Users },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Alex!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <Settings className="w-6 h-6" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                AT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={Users} title="Total Users" value="1,428" change="+12.5%" color="bg-blue-500" />
          <StatCard icon={TrendingUp} title="Weekly Active Users" value="972" change="+5.2%" color="bg-green-500" />
          <StatCard icon={DollarSign} title="Revenue" value="$12,345" change="-1.8%" color="bg-purple-500" />
          <StatCard icon={ListChecks} title="Courses Completed" value="56" change="+3" color="bg-orange-500" />
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
            <nav className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BarChart2 className="w-12 h-12 text-gray-400" />
                  <p className="ml-4 text-gray-500">Chart Data Would Be Displayed Here</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-500"/>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">
                          <span className="font-semibold">{activity.user}</span> {activity.action}.
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'analytics' && (
             <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-500">Detailed analytics and reporting components would go here.</p>
             </div>
          )}
           {activeTab === 'users' && (
             <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
                <p className="text-gray-500">A table or list of users with management options would go here.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;