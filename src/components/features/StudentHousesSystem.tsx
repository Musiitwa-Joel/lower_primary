import React, { useState } from 'react';
import { Home, Trophy, Users, Star, Crown, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface House {
  id: string;
  name: string;
  color: string;
  motto: string;
  description: string;
  captain: {
    name: string;
    grade: string;
    image: string;
  };
  viceCaptain: {
    name: string;
    grade: string;
    image: string;
  };
  houseTeacher: {
    name: string;
    subject: string;
    image: string;
  };
  achievements: string[];
  currentPoints: number;
  members: number;
  established: number;
}

interface Competition {
  id: string;
  name: string;
  type: 'sports' | 'academic' | 'cultural' | 'community';
  date: string;
  results: {
    [houseId: string]: {
      position: number;
      points: number;
    };
  };
}

interface StudentHousesSystemProps {
  theme: string;
}

const StudentHousesSystem: React.FC<StudentHousesSystemProps> = ({ theme }) => {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'competitions' | 'rankings'>('overview');
  const schoolConfig = getCurrentSchoolConfig();

  const houses: House[] = [
    {
      id: 'red',
      name: 'Phoenix House',
      color: '#ef4444',
      motto: 'Rise from Ashes, Soar to Heights',
      description: 'Phoenix House embodies resilience, determination, and the spirit of rising above challenges. Our members are known for their perseverance and leadership qualities.',
      captain: {
        name: 'Sarah Nakato',
        grade: 'S6',
        image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80'
      },
      viceCaptain: {
        name: 'David Mukasa',
        grade: 'S5',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
      },
      houseTeacher: {
        name: 'Dr. Margaret Ssebunya',
        subject: 'Mathematics',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80'
      },
      achievements: [
        'Inter-House Sports Champions 2023',
        'Academic Excellence Award 2023',
        'Community Service Leaders 2022'
      ],
      currentPoints: 2450,
      members: 180,
      established: 2015
    },
    {
      id: 'blue',
      name: 'Eagle House',
      color: '#3b82f6',
      motto: 'Soar High, Achieve Excellence',
      description: 'Eagle House represents vision, excellence, and the pursuit of greatness. Our members are encouraged to reach new heights in all their endeavors.',
      captain: {
        name: 'Grace Namuli',
        grade: 'S6',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
      },
      viceCaptain: {
        name: 'James Okello',
        grade: 'S5',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
      },
      houseTeacher: {
        name: 'Mr. Peter Lubega',
        subject: 'Physics',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
      },
      achievements: [
        'Debate Competition Winners 2023',
        'Science Fair Champions 2023',
        'Cultural Festival Winners 2022'
      ],
      currentPoints: 2380,
      members: 175,
      established: 2015
    },
    {
      id: 'green',
      name: 'Lion House',
      color: '#22c55e',
      motto: 'Courage, Strength, Unity',
      description: 'Lion House stands for courage, strength, and unity. Our members demonstrate bravery in facing challenges and show solidarity in supporting each other.',
      captain: {
        name: 'Mary Namusoke',
        grade: 'S6',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
      },
      viceCaptain: {
        name: 'John Ssemakula',
        grade: 'S5',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
      },
      houseTeacher: {
        name: 'Ms. Alice Nakimuli',
        subject: 'Biology',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80'
      },
      achievements: [
        'Environmental Conservation Award 2023',
        'Community Outreach Champions 2023',
        'Leadership Excellence 2022'
      ],
      currentPoints: 2320,
      members: 185,
      established: 2015
    },
    {
      id: 'yellow',
      name: 'Falcon House',
      color: '#eab308',
      motto: 'Swift, Sharp, Successful',
      description: 'Falcon House represents speed, precision, and success. Our members are known for their quick thinking, sharp intellect, and successful outcomes.',
      captain: {
        name: 'Robert Kiggundu',
        grade: 'S6',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
      },
      viceCaptain: {
        name: 'Patricia Nalwoga',
        grade: 'S5',
        image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80'
      },
      houseTeacher: {
        name: 'Mr. Samuel Hakim',
        subject: 'Chemistry',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
      },
      achievements: [
        'Innovation Challenge Winners 2023',
        'Technology Fair Champions 2023',
        'Entrepreneurship Award 2022'
      ],
      currentPoints: 2290,
      members: 170,
      established: 2015
    }
  ];

  const competitions: Competition[] = [
    {
      id: '1',
      name: 'Inter-House Sports Day',
      type: 'sports',
      date: '2024-01-15',
      results: {
        'red': { position: 1, points: 100 },
        'blue': { position: 2, points: 80 },
        'green': { position: 3, points: 60 },
        'yellow': { position: 4, points: 40 }
      }
    },
    {
      id: '2',
      name: 'Academic Quiz Competition',
      type: 'academic',
      date: '2024-01-10',
      results: {
        'blue': { position: 1, points: 100 },
        'red': { position: 2, points: 80 },
        'yellow': { position: 3, points: 60 },
        'green': { position: 4, points: 40 }
      }
    }
  ];

  const sortedHouses = [...houses].sort((a, b) => b.currentPoints - a.currentPoints);

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Home className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Student Houses & Competition
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              House system fostering leadership and healthy competition
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          {['overview', 'competitions', 'rankings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'
                  : theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-black/10 hover:bg-black/20 text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, index) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border`}
              style={{ borderTopColor: house.color, borderTopWidth: '4px' }}
              onClick={() => setSelectedHouse(house)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {house.name}
                  </h4>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: house.color }}>
                      {house.currentPoints}
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                      points
                    </div>
                  </div>
                </div>

                <p className={`text-sm italic mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  "{house.motto}"
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Members
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {house.members}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Captain
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {house.captain.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      House Teacher
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {house.houseTeacher.name}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {house.achievements.slice(0, 2).map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: `${house.color}20`, color: house.color }}
                      >
                        {achievement.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'rankings' && (
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
          } border`}>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Current House Rankings - Academic Year 2024
            </h4>
            <div className="space-y-4">
              {sortedHouses.map((house, index) => (
                <div key={house.id} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${house.color}20` }}>
                    {index === 0 ? (
                      <Crown className="h-6 w-6" style={{ color: house.color }} />
                    ) : index === 1 ? (
                      <Trophy className="h-6 w-6" style={{ color: house.color }} />
                    ) : index === 2 ? (
                      <Award className="h-6 w-6" style={{ color: house.color }} />
                    ) : (
                      <Star className="h-6 w-6" style={{ color: house.color }} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {house.name}
                        </h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                          {house.members} members
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold" style={{ color: house.color }}>
                          {house.currentPoints}
                        </div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                          points
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary-500">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points Distribution Chart */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Points Distribution
            </h4>
            <div className="space-y-3">
              {sortedHouses.map((house) => (
                <div key={house.id} className="flex items-center space-x-4">
                  <div className={`w-20 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {house.name}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: house.color,
                        width: `${(house.currentPoints / Math.max(...houses.map(h => h.currentPoints))) * 100}%`
                      }}
                    />
                  </div>
                  <div className="w-16 text-right text-sm font-semibold" style={{ color: house.color }}>
                    {house.currentPoints}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'competitions' && (
        <div className="space-y-6">
          <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Recent Competitions
          </h4>
          {competitions.map((competition, index) => (
            <div key={competition.id} className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h5 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {competition.name}
                </h5>
                <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {new Date(competition.date).toLocaleDateString()}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Object.entries(competition.results)
                  .sort(([,a], [,b]) => a.position - b.position)
                  .map(([houseId, result]) => {
                    const house = houses.find(h => h.id === houseId);
                    if (!house) return null;
                    
                    return (
                      <div key={houseId} className={`p-4 rounded-lg text-center ${
                        result.position === 1 ? 'bg-yellow-500/20 border-yellow-500/30' :
                        result.position === 2 ? 'bg-gray-400/20 border-gray-400/30' :
                        result.position === 3 ? 'bg-orange-500/20 border-orange-500/30' :
                        theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                      } border`}>
                        <div className="text-2xl font-bold mb-2">
                          {result.position === 1 ? '🥇' : result.position === 2 ? '🥈' : result.position === 3 ? '🥉' : '🏅'}
                        </div>
                        <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {house.name}
                        </div>
                        <div className="text-sm" style={{ color: house.color }}>
                          {result.points} points
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* House Detail Modal */}
      {selectedHouse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedHouse(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {selectedHouse.name}
              </h3>
              <button
                onClick={() => setSelectedHouse(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    House Leadership
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedHouse.captain.image}
                        alt={selectedHouse.captain.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {selectedHouse.captain.name}
                        </div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                          House Captain • {selectedHouse.captain.grade}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedHouse.houseTeacher.image}
                        alt={selectedHouse.houseTeacher.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {selectedHouse.houseTeacher.name}
                        </div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                          House Teacher • {selectedHouse.houseTeacher.subject}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    Recent Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedHouse.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Trophy className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: selectedHouse.color }} />
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    About {selectedHouse.name}
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                    {selectedHouse.description}
                  </p>
                </div>

                <div className={`p-4 rounded-lg`} style={{ backgroundColor: `${selectedHouse.color}10` }}>
                  <h5 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    House Statistics
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold" style={{ color: selectedHouse.color }}>
                        {selectedHouse.currentPoints}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Total Points
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: selectedHouse.color }}>
                        {selectedHouse.members}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Members
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: selectedHouse.color }}>
                        {selectedHouse.achievements.length}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Awards
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: selectedHouse.color }}>
                        {new Date().getFullYear() - selectedHouse.established}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default StudentHousesSystem;