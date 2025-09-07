"use client";

import React, { useState } from 'react';
import { 
  User, 
  Edit2, 
  Settings, 
  Trophy, 
  Star, 
  Zap, 
  Calendar, 
  MapPin, 
  Link2, 
  Github, 
  Twitter, 
  Linkedin,
  Award,
  Target,
  TrendingUp,
  BookOpen,
  Camera,
  Save,
  X
} from 'lucide-react';

// Define types for all data structures
interface ProfileData {
  name: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  github: string;
  twitter: string;
  linkedin: string;
}

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Alex Thompson',
    username: '@alexdev',
    email: 'alex@example.com',
    bio: 'Full-stack developer passionate about blockchain technology and web3. Building the future of decentralized applications.',
    location: 'San Francisco, CA',
    website: 'https://alexdev.com',
    joinDate: 'March 2023',
    github: 'alexthompson',
    twitter: 'alexdev',
    linkedin: 'alex-thompson-dev'
  });

  // Sample user stats
  const userStats = {
    rank: 1,
    totalPoints: 12450,
    level: 'Expert',
    streak: 45,
    badges: 12,
    challengesCompleted: 87,
    skillsLearned: 24,
    hoursSpent: 142
  };

  // Recent achievements
  const recentAchievements = [
    { id: 1, title: 'Code Master', description: 'Completed 50 coding challenges', icon: Trophy, color: 'bg-yellow-500', date: '2 days ago' },
    { id: 2, title: 'Streak Legend', description: 'Maintained 30-day streak', icon: Zap, color: 'bg-orange-500', date: '1 week ago' },
    { id: 3, title: 'Web3 Pioneer', description: 'Mastered blockchain basics', icon: Star, color: 'bg-purple-500', date: '2 weeks ago' },
    { id: 4, title: 'Community Helper', description: 'Helped 10 other learners', icon: Award, color: 'bg-blue-500', date: '3 weeks ago' }
  ];

  // Skills data
  const skills = [
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'Blockchain', level: 75, color: 'bg-purple-500' },
    { name: 'Python', level: 70, color: 'bg-indigo-500' }
  ];

  // Activity data
  const activityData = [
    { date: 'Mon', challenges: 5, points: 120 },
    { date: 'Tue', challenges: 3, points: 90 },
    { date: 'Wed', challenges: 7, points: 180 },
    { date: 'Thu', challenges: 4, points: 110 },
    { date: 'Fri', challenges: 6, points: 150 },
    { date: 'Sat', challenges: 2, points: 60 },
    { date: 'Sun', challenges: 8, points: 200 }
  ];

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'bg-blue-500' }: StatCardProps) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  AT
                </div>
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 text-white">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className="text-3xl font-bold">{profileData.name}</h1>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    #{userStats.rank}
                  </span>
                </div>
                <p className="text-white/80 text-lg mb-2">{profileData.username}</p>
                <p className="text-white/90 mb-4 max-w-2xl">{profileData.bio}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {profileData.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Link2 className="w-4 h-4" />
                    <a href={profileData.website} className="hover:underline">{profileData.website}</a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center space-x-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center space-x-2"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
                <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Trophy}
            title="Total Points"
            value={userStats.totalPoints.toLocaleString()}
            subtitle={`Rank #${userStats.rank}`}
            color="bg-yellow-500"
          />
          <StatCard
            icon={Zap}
            title="Current Streak"
            value={`${userStats.streak} days`}
            subtitle="Personal best"
            color="bg-orange-500"
          />
          <StatCard
            icon={Target}
            title="Challenges"
            value={userStats.challengesCompleted}
            subtitle="Completed"
            color="bg-green-500"
          />
          <StatCard
            icon={Star}
            title="Badges Earned"
            value={userStats.badges}
            subtitle={`Level: ${userStats.level}`}
            color="bg-purple-500"
          />
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
            <nav className="flex space-x-2">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'achievements', label: 'Achievements', icon: Trophy },
                { id: 'skills', label: 'Skills', icon: BookOpen },
                { id: 'activity', label: 'Activity', icon: TrendingUp },
              ].map((tab) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {activityData.slice(0, 5).map((activity) => (
                      <div key={activity.date} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">
                            Completed {activity.challenges} challenges on {activity.date}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">+{activity.points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Profile</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileData({...profileData, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                          <input
                            type="text"
                            value={profileData.username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileData({...profileData, username: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                          value={profileData.bio}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProfileData({...profileData, bio: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            type="text"
                            value={profileData.location}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileData({...profileData, location: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                          <input
                            type="url"
                            value={profileData.website}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileData({...profileData, website: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Achievements</h3>
                <div className="grid gap-4">
                  {recentAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`p-3 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Skills & Progress</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Activity</h3>
                <div className="space-y-4">
                  {activityData.map((day) => (
                    <div key={day.date} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="font-medium text-gray-900 w-12">{day.date}</div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{day.challenges} challenges</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-gray-900">{day.points} pts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="space-y-3">
                <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Github className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-900">{profileData.github}</span>
                </a>
                <a href={`https://twitter.com/${profileData.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-900">{profileData.twitter}</span>
                </a>
                <a href={`https://linkedin.com/in/${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-900">{profileData.linkedin}</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Level Progress</h3>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.85)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">85%</span>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">{userStats.level}</p>
                <p className="text-sm text-gray-600">1,550 XP to next level</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Skills Learned</span>
                  <span className="font-semibold text-gray-900">{userStats.skillsLearned}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hours Spent</span>
                  <span className="font-semibold text-gray-900">{userStats.hoursSpent}h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;