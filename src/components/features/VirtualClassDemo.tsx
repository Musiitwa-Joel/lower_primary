import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Users, BookOpen, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface VirtualClassDemoProps {
  theme: string;
}

const VirtualClassDemo: React.FC<VirtualClassDemoProps> = ({ theme }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const schoolConfig = getCurrentSchoolConfig();

  const demoClasses = {
    mathematics: {
      title: 'Advanced Algebra - Quadratic Equations',
      teacher: 'Dr. Sarah Nakato',
      grade: 'S4',
      duration: '45 minutes',
      description: 'Interactive lesson on solving quadratic equations using multiple methods',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/math-demo.mp4',
      features: [
        'Interactive whiteboard',
        'Real-time problem solving',
        'Student participation',
        'Visual demonstrations'
      ]
    },
    physics: {
      title: 'Laws of Motion - Practical Applications',
      teacher: 'Mr. David Mukasa',
      grade: 'S5',
      duration: '50 minutes',
      description: 'Hands-on experiments demonstrating Newton\'s laws of motion',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/physics-demo.mp4',
      features: [
        'Laboratory experiments',
        'Real-world examples',
        'Interactive simulations',
        'Group discussions'
      ]
    },
    english: {
      title: 'Creative Writing Workshop',
      teacher: 'Ms. Grace Namuli',
      grade: 'S3',
      duration: '40 minutes',
      description: 'Developing creative writing skills through storytelling techniques',
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/english-demo.mp4',
      features: [
        'Creative exercises',
        'Peer feedback',
        'Writing techniques',
        'Story development'
      ]
    },
    computer: {
      title: 'Introduction to Programming',
      teacher: 'Mr. James Okello',
      grade: 'S6',
      duration: '60 minutes',
      description: 'Basic programming concepts using Python for beginners',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/computer-demo.mp4',
      features: [
        'Hands-on coding',
        'Interactive IDE',
        'Project-based learning',
        'Collaborative coding'
      ]
    }
  };

  const currentClass = demoClasses[selectedSubject as keyof typeof demoClasses];

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Play className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Virtual Class Demo
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Experience our interactive online learning platform
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="flex items-center text-sm text-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Live Demo
          </span>
        </div>
      </div>

      {/* Subject Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(demoClasses).map(([key, classInfo]) => (
          <button
            key={key}
            onClick={() => setSelectedSubject(key)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedSubject === key
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {classInfo.title.split(' - ')[0]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden mb-4">
            <img
              src={currentClass.thumbnail}
              alt={currentClass.title}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group"
              >
                {isPlaying ? (
                  <Pause className="h-10 w-10 text-black" />
                ) : (
                  <Play className="h-10 w-10 text-black ml-1" />
                )}
              </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <div className="text-white text-sm">
                  {isPlaying ? 'Playing' : 'Paused'} • 12:34 / 45:00
                </div>
              </div>

              <button className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors">
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Class Info */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h4 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
              {currentClass.title}
            </h4>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary-500 mr-2" />
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {currentClass.teacher}
                </span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 text-primary-500 mr-2" />
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {currentClass.grade}
                </span>
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                {currentClass.duration}
              </div>
            </div>
            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
              {currentClass.description}
            </p>
          </div>
        </div>

        {/* Class Features & Chat */}
        <div className="space-y-6">
          {/* Features */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Class Features
            </h4>
            <div className="space-y-3">
              {currentClass.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Chat Simulation */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <div className="flex items-center mb-4">
              <MessageCircle className="h-5 w-5 text-primary-500 mr-2" />
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Live Chat
              </h4>
              <span className="ml-auto text-xs text-green-500">24 students online</span>
            </div>

            <div className="space-y-3 max-h-48 overflow-y-auto">
              {[
                { name: 'John M.', message: 'Can you explain the discriminant again?', time: '2 min ago' },
                { name: 'Teacher', message: 'Sure! The discriminant helps us determine the nature of roots...', time: '1 min ago', isTeacher: true },
                { name: 'Mary K.', message: 'This is so helpful! Thank you', time: '30s ago' },
                { name: 'Peter S.', message: 'What about complex roots?', time: 'Just now' }
              ].map((chat, index) => (
                <div key={index} className={`p-3 rounded-lg ${
                  chat.isTeacher 
                    ? 'bg-primary-500/20 border-l-4 border-primary-500' 
                    : theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-medium ${
                      chat.isTeacher ? 'text-primary-500' : theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {chat.name}
                    </span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                      {chat.time}
                    </span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    {chat.message}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                      : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Join Class CTA */}
          <div className="text-center">
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors font-medium">
              Join Live Class
            </button>
            <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              Experience our interactive learning platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualClassDemo;