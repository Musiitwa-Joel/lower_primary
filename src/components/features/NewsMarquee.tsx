import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Award, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface NewsItem {
  id: string;
  text: string;
  type: 'announcement' | 'exam' | 'event' | 'achievement';
  urgent?: boolean;
  date: string;
}

interface NewsMarqueeProps {
  theme: string;
}

const NewsMarquee: React.FC<NewsMarqueeProps> = ({ theme }) => {
  const [isPaused, setIsPaused] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const newsItems: NewsItem[] = [
    {
      id: '1',
      text: `Admissions Open for 2025-26 Academic Year at ${schoolConfig.name} - Apply Now!`,
      type: 'announcement',
      urgent: true,
      date: '2024-01-15'
    },
    {
      id: '2',
      text: `${schoolConfig.curriculum[0]} Term-1 Results Declared - Check Your Results Online`,
      type: 'exam',
      date: '2024-01-14'
    },
    {
      id: '3',
      text: `Annual Sports Day at ${schoolConfig.shortName} on September 15th - Registration Open`,
      type: 'event',
      date: '2024-01-13'
    },
    {
      id: '4',
      text: `${schoolConfig.shortName} student wins National Mathematics Olympiad - Congratulations!`,
      type: 'achievement',
      date: '2024-01-12'
    },
    {
      id: '5',
      text: `Parent-Teacher Conference at ${schoolConfig.name} scheduled for January 20th`,
      type: 'event',
      date: '2024-01-11'
    },
    {
      id: '6',
      text: `New Computer Lab inaugurated at ${schoolConfig.shortName} with latest technology`,
      type: 'announcement',
      date: '2024-01-10'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return <Bell className="h-4 w-4" />;
      case 'exam':
        return <AlertCircle className="h-4 w-4" />;
      case 'event':
        return <Calendar className="h-4 w-4" />;
      case 'achievement':
        return <Award className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string, urgent?: boolean) => {
    if (urgent) return 'text-red-500';
    
    switch (type) {
      case 'announcement':
        return 'text-blue-500';
      case 'exam':
        return 'text-orange-500';
      case 'event':
        return 'text-green-500';
      case 'achievement':
        return 'text-purple-500';
      default:
        return 'text-primary-500';
    }
  };

  return (
    <div className={`relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-black/95 border-white/10' 
        : 'bg-white/95 border-black/10'
    } backdrop-blur-xl border-b`}>
      <div className="flex items-center px-6 py-4">
        <div className="flex items-center mr-6 flex-shrink-0">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3" />
          <span className={`font-semibold text-sm ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            🔔 LATEST NEWS
          </span>
        </div>

        <div 
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-12"
            animate={{
              x: isPaused ? 0 : [-1000, 0]
            }}
            transition={{
              duration: isPaused ? 0 : 30,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear"
            }}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center space-x-3 whitespace-nowrap"
              >
                <div className={getTypeColor(item.type, item.urgent)}>
                  {getIcon(item.type)}
                </div>
                <span className={`text-sm ${
                  item.urgent 
                    ? 'font-semibold text-red-500' 
                    : theme === 'dark' 
                    ? 'text-white/90' 
                    : 'text-black/90'
                }`}>
                  {item.text}
                </span>
                {item.urgent && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                    URGENT
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;