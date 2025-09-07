"use client";

import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp, 
  Search,
  Calendar,
  Users,
  Target,
  Zap,
  Award,
  MoreHorizontal
} from 'lucide-react';

// Define a type for a user object to ensure data consistency
interface User {
  rank: number;
  name: string;
  username: string;
  points: number;
  avatar: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  streak: number;
  badges: number;
  change: number;
}

const Leaderboards = () => {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [timeFilter, setTimeFilter] = useState('all-time');
  const [searchQuery, setSearchQuery] = useState('');

  // Expanded sample data for all categories
  const leaderboardData: { [key: string]: User[] } = useMemo(() => ({
    overall: [
      { rank: 1, name: 'Alex Thompson', username: '@alexdev', points: 12450, avatar: 'AT', level: 'Expert', streak: 45, badges: 12, change: 0 },
      { rank: 2, name: 'Sarah Chen', username: '@sarahc', points: 11230, avatar: 'SC', level: 'Expert', streak: 38, badges: 10, change: 1 },
      { rank: 3, name: 'Mike Rodriguez', username: '@mikerod', points: 10890, avatar: 'MR', level: 'Advanced', streak: 29, badges: 9, change: -1 },
      { rank: 4, name: 'Emma Wilson', username: '@emmaw', points: 9540, avatar: 'EW', level: 'Advanced', streak: 22, badges: 8, change: 2 },
      { rank: 5, name: 'David Kim', username: '@davidk', points: 8920, avatar: 'DK', level: 'Advanced', streak: 15, badges: 7, change: -1 },
      { rank: 6, name: 'Lisa Johnson', username: '@lisaj', points: 8456, avatar: 'LJ', level: 'Intermediate', streak: 18, badges: 6, change: 0 },
      { rank: 7, name: 'Ryan Parker', username: '@ryanp', points: 7890, avatar: 'RP', level: 'Intermediate', streak: 12, badges: 5, change: 3 },
      { rank: 8, name: 'Anna Martinez', username: '@annam', points: 7234, avatar: 'AM', level: 'Intermediate', streak: 8, badges: 4, change: -2 },
      { rank: 9, name: 'Chris Taylor', username: '@christ', points: 6890, avatar: 'CT', level: 'Intermediate', streak: 6, badges: 4, change: 1 },
      { rank: 10, name: 'Mia Brown', username: '@miab', points: 6456, avatar: 'MB', level: 'Beginner', streak: 4, badges: 3, change: -1 }
    ],
    weekly: [
        { rank: 1, name: 'Sarah Chen', username: '@sarahc', points: 1520, avatar: 'SC', level: 'Expert', streak: 38, badges: 10, change: 2 },
        { rank: 2, name: 'Ryan Parker', username: '@ryanp', points: 1340, avatar: 'RP', level: 'Intermediate', streak: 12, badges: 5, change: 5 },
        { rank: 3, name: 'Alex Thompson', username: '@alexdev', points: 1280, avatar: 'AT', level: 'Expert', streak: 45, badges: 12, change: -1 },
        { rank: 4, name: 'Mia Brown', username: '@miab', points: 1100, avatar: 'MB', level: 'Beginner', streak: 4, badges: 3, change: 3 },
        { rank: 5, name: 'Mike Rodriguez', username: '@mikerod', points: 950, avatar: 'MR', level: 'Advanced', streak: 29, badges: 9, change: -2 },
    ],
    monthly: [
        { rank: 1, name: 'Alex Thompson', username: '@alexdev', points: 5400, avatar: 'AT', level: 'Expert', streak: 45, badges: 12, change: 0 },
        { rank: 2, name: 'Sarah Chen', username: '@sarahc', points: 5100, avatar: 'SC', level: 'Expert', streak: 38, badges: 10, change: 0 },
        { rank: 3, name: 'Emma Wilson', username: '@emmaw', points: 4800, avatar: 'EW', level: 'Advanced', streak: 22, badges: 8, change: 1 },
        { rank: 4, name: 'David Kim', username: '@davidk', points: 4500, avatar: 'DK', level: 'Advanced', streak: 15, badges: 7, change: -1 },
        { rank: 5, name: 'Mike Rodriguez', username: '@mikerod', points: 4250, avatar: 'MR', level: 'Advanced', streak: 29, badges: 9, change: 0 },
    ],
    challenges: [
        { rank: 1, name: 'David Kim', username: '@davidk', points: 95, avatar: 'DK', level: 'Advanced', streak: 15, badges: 7, change: 3 },
        { rank: 2, name: 'Mike Rodriguez', username: '@mikerod', points: 92, avatar: 'MR', level: 'Advanced', streak: 29, badges: 9, change: 1 },
        { rank: 3, name: 'Alex Thompson', username: '@alexdev', points: 88, avatar: 'AT', level: 'Expert', streak: 45, badges: 12, change: -1 },
        { rank: 4, name: 'Lisa Johnson', username: '@lisaj', points: 85, avatar: 'LJ', level: 'Intermediate', streak: 18, badges: 6, change: 2 },
    ],
    streaks: [
        { rank: 1, name: 'Alex Thompson', username: '@alexdev', points: 45, avatar: 'AT', level: 'Expert', streak: 45, badges: 12, change: 0 },
        { rank: 2, name: 'Sarah Chen', username: '@sarahc', points: 38, avatar: 'SC', level: 'Expert', streak: 38, badges: 10, change: 0 },
        { rank: 3, name: 'Mike Rodriguez', username: '@mikerod', points: 29, avatar: 'MR', level: 'Advanced', streak: 29, badges: 9, change: 0 },
    ]
  }), []);

  const categories = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'weekly', label: 'Weekly', icon: Calendar },
    { id: 'monthly', label: 'Monthly', icon: TrendingUp },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'streaks', label: 'Streaks', icon: Zap }
  ];

  const timeFilters = [
    { value: 'all-time', label: 'All Time' },
    { value: 'this-year', label: 'This Year' },
    { value: 'this-month', label: 'This Month' },
    { value: 'this-week', label: 'This Week' }
  ];

  const filteredData = useMemo(() => {
    let data = leaderboardData[activeCategory] || [];
    if (searchQuery) {
      return data.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return data;
  }, [searchQuery, activeCategory, leaderboardData]);

  const summaryStats = useMemo(() => {
    const data = leaderboardData[activeCategory] || [];
    if (data.length === 0) {
      return { avgPoints: '0', topStreak: '0 days', totalParticipants: '0' };
    }
    const avgPoints = Math.round(data.reduce((sum: number, user: User) => sum + user.points, 0) / data.length);
    const topStreak = Math.max(...data.map((user: User) => user.streak));
    return {
      avgPoints: avgPoints.toLocaleString(),
      topStreak: `${topStreak} days`,
      totalParticipants: data.length.toLocaleString()
    };
  }, [activeCategory, leaderboardData]);

  const getLevelColor = (level: User['level']) => {
    switch (level) {
      case 'Expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beginner': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getChangeIndicator = (change: number) => {
    if (change > 0) {
      return <span className="text-green-500 text-xs">↑{change}</span>;
    } else if (change < 0) {
      return <span className="text-red-500 text-xs">↓{Math.abs(change)}</span>;
    }
    return <span className="text-gray-400 text-xs">-</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Leaderboards</h1>
                <p className="text-gray-600 mt-2">Compete with others and climb the rankings</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
                <select 
                  value={timeFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimeFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {timeFilters.map(filter => (
                    <option key={filter.value} value={filter.value}>{filter.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
            <nav className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Performers</h2>
            <div className="flex items-end justify-center space-x-8">
              {filteredData.length > 1 && (
                 <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                            {filteredData[1]?.avatar}
                        </div>
                        <Medal className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                        <h3 className="font-semibold text-lg">{filteredData[1]?.name}</h3>
                        <p className="text-white/80 text-sm">{filteredData[1]?.username}</p>
                        <p className="text-xl font-bold mt-2">{filteredData[1]?.points.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/10 h-24 rounded-t-lg"></div>
                </div>
              )}
              {filteredData.length > 0 && (
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                        {filteredData[0]?.avatar}
                        </div>
                        <Crown className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                        <h3 className="font-semibold text-xl">{filteredData[0]?.name}</h3>
                        <p className="text-white/80">{filteredData[0]?.username}</p>
                        <p className="text-2xl font-bold mt-2">{filteredData[0]?.points.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/10 h-32 rounded-t-lg"></div>
                </div>
              )}
              {filteredData.length > 2 && (
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                        {filteredData[2]?.avatar}
                        </div>
                        <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-lg">{filteredData[2]?.name}</h3>
                        <p className="text-white/80 text-sm">{filteredData[2]?.username}</p>
                        <p className="text-xl font-bold mt-2">{filteredData[2]?.points.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/10 h-20 rounded-t-lg"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Full Rankings</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{filteredData.length} participants</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streak</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badges</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((user: User) => (
                  <tr key={user.username} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">{getRankIcon(user.rank)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(user.level)}`}>
                        {user.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{user.points.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-900">{user.streak}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900">{user.badges}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getChangeIndicator(user.change)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg"><Trophy className="w-6 h-6 text-blue-600" /></div>
              <div>
                <p className="text-sm text-gray-600">Average Points</p>
                <p className="text-2xl font-bold text-gray-900">{summaryStats.avgPoints}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg"><TrendingUp className="w-6 h-6 text-green-600" /></div>
              <div>
                <p className="text-sm text-gray-600">Top Streak</p>
                <p className="text-2xl font-bold text-gray-900">{summaryStats.topStreak}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg"><Users className="w-6 h-6 text-purple-600" /></div>
              <div>
                <p className="text-sm text-gray-600">Total Participants</p>
                <p className="text-2xl font-bold text-gray-900">{summaryStats.totalParticipants}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;