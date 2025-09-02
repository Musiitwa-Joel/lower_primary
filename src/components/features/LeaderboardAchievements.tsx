import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Users, Award, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Achievement {
  id: string;
  studentName: string;
  grade: string;
  category: 'academic' | 'sports' | 'leadership' | 'arts' | 'community';
  achievement: string;
  description: string;
  date: string;
  points: number;
  image?: string;
}

interface LeaderboardAchievementsProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const LeaderboardAchievements: React.FC<LeaderboardAchievementsProps> = ({ schoolConfig, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'leaderboard' | 'achievements'>('leaderboard');

  const achievements: Achievement[] = [
    {
      id: '1',
      studentName: 'Sarah Nakato',
      grade: 'S6',
      category: 'academic',
      achievement: 'National Mathematics Olympiad Winner',
      description: 'First place in the Uganda National Mathematics Olympiad 2024',
      date: '2024-01-15',
      points: 100,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      studentName: 'David Mukasa',
      grade: 'S5',
      category: 'sports',
      achievement: 'Regional Football Champion',
      description: 'Led school team to victory in the Central Region Football Championship',
      date: '2024-01-10',
      points: 85,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      studentName: 'Grace Namuli',
      grade: 'S4',
      category: 'leadership',
      achievement: 'Student Council President',
      description: 'Elected as Student Council President with innovative leadership initiatives',
      date: '2024-01-05',
      points: 75,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    },
    {
      id: '4',
      studentName: 'James Okello',
      grade: 'S6',
      category: 'arts',
      achievement: 'National Art Competition Winner',
      description: 'First place in the Uganda National Schools Art Competition',
      date: '2024-01-01',
      points: 90,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      id: '5',
      studentName: 'Mary Namusoke',
      grade: 'S5',
      category: 'community',
      achievement: 'Community Service Excellence',
      description: 'Outstanding contribution to local community development projects',
      date: '2023-12-20',
      points: 70,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Star className="h-4 w-4" /> },
    { id: 'academic', name: 'Academic', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'sports', name: 'Sports', icon: <Trophy className="h-4 w-4" /> },
    { id: 'leadership', name: 'Leadership', icon: <Crown className="h-4 w-4" /> },
    { id: 'arts', name: 'Arts', icon: <Award className="h-4 w-4" /> },
    { id: 'community', name: 'Community', icon: <Users className="h-4 w-4" /> }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const sortedAchievements = [...filteredAchievements].sort((a, b) => b.points - a.points);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 2:
        return <Award className="h-6 w-6 text-orange-500" />;
      default:
        return <Star className="h-6 w-6 text-primary-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      academic: 'bg-blue-500/20 text-blue-500',
      sports: 'bg-green-500/20 text-green-500',
      leadership: 'bg-purple-500/20 text-purple-500',
      arts: 'bg-pink-500/20 text-pink-500',
      community: 'bg-orange-500/20 text-orange-500'
    };
    return colorMap[category] || 'bg-gray-500/20 text-gray-500';
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Trophy className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Student Achievements
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Celebrating excellence and recognizing outstanding students
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'leaderboard' ? 'achievements' : 'leaderboard')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === 'leaderboard'
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {viewMode === 'leaderboard' ? 'View Achievements' : 'View Leaderboard'}
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {viewMode === 'leaderboard' ? (
        /* Leaderboard View */
        <div className="space-y-4">
          {sortedAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-xl transition-all duration-300 ${
                index < 3 
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30'
                    : 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30'
                  : theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 border-white/10'
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border hover:scale-105`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20">
                  {getRankIcon(index)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {achievement.studentName}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getCategoryColor(achievement.category)
                    }`}>
                      {achievement.category}
                    </span>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-black/60'
                    }`}>
                      {achievement.grade}
                    </span>
                  </div>
                  <p className={`font-medium mb-1 ${
                    theme === 'dark' ? 'text-white/90' : 'text-black/90'
                  }`}>
                    {achievement.achievement}
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-500">
                    {achievement.points}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    points
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                    #{index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Achievements Gallery View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border`}
            >
              {achievement.image && (
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={achievement.image}
                    alt={achievement.studentName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getCategoryColor(achievement.category)
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {achievement.studentName}
                  </h4>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-black/60'
                  }`}>
                    {achievement.grade}
                  </span>
                </div>
                
                <p className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/90' : 'text-black/90'
                }`}>
                  {achievement.achievement}
                </p>
                
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-black/70'
                } leading-relaxed`}>
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    theme === 'dark' ? 'text-white/50' : 'text-black/50'
                  }`}>
                    {new Date(achievement.date).toLocaleDateString()}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold">
                      {achievement.points} pts
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Achievement Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {achievements.filter(a => a.category === 'academic').length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Academic Awards
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">
              {achievements.filter(a => a.category === 'sports').length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Sports Trophies
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500">
              {achievements.filter(a => a.category === 'leadership').length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Leadership Awards
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-500">
              {achievements.filter(a => a.category === 'arts').length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Arts Recognition
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">
              {achievements.filter(a => a.category === 'community').length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Community Impact
            </div>
          </div>
        </div>
      </div>

      {/* Nomination CTA */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <h4 className={`text-lg font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          Nominate a Student
        </h4>
        <p className={`mb-6 ${
          theme === 'dark' ? 'text-white/70' : 'text-black/70'
        }`}>
          Know a student who deserves recognition? Submit a nomination for our achievements board.
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center justify-center mx-auto">
          <Award className="h-5 w-5 mr-2" />
          Submit Nomination
        </button>
      </div>
    </div>
  );
};

export default LeaderboardAchievements;