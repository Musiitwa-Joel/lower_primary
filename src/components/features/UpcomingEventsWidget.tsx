import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sports' | 'cultural' | 'exam' | 'meeting';
  attendees?: number;
  description: string;
}

interface UpcomingEventsWidgetProps {
  theme: string;
}

const UpcomingEventsWidget: React.FC<UpcomingEventsWidgetProps> = ({ theme }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const schoolConfig = getCurrentSchoolConfig();

  const events: Event[] = [
    {
      id: '1',
      title: 'Parent-Teacher Conference',
      date: '2024-01-20',
      time: '9:00 AM',
      location: 'Main Hall',
      type: 'meeting',
      attendees: 150,
      description: 'Quarterly parent-teacher meetings to discuss student progress'
    },
    {
      id: '2',
      title: 'Inter-House Sports Competition',
      date: '2024-01-25',
      time: '8:00 AM',
      location: 'Sports Complex',
      type: 'sports',
      attendees: 300,
      description: 'Annual sports competition between school houses'
    },
    {
      id: '3',
      title: 'Science Fair Exhibition',
      date: '2024-02-01',
      time: '10:00 AM',
      location: 'Science Block',
      type: 'academic',
      attendees: 200,
      description: 'Students showcase innovative science projects'
    },
    {
      id: '4',
      title: 'Cultural Day Celebration',
      date: '2024-02-10',
      time: '2:00 PM',
      location: 'School Grounds',
      type: 'cultural',
      attendees: 400,
      description: 'Celebrating Uganda\'s rich cultural heritage'
    },
    {
      id: '5',
      title: 'Mid-Term Examinations',
      date: '2024-02-15',
      time: '8:00 AM',
      location: 'Various Classrooms',
      type: 'exam',
      description: 'Mid-term assessments for all grade levels'
    }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Events', color: 'gray' },
    { id: 'academic', name: 'Academic', color: 'blue' },
    { id: 'sports', name: 'Sports', color: 'green' },
    { id: 'cultural', name: 'Cultural', color: 'purple' },
    { id: 'exam', name: 'Exams', color: 'red' },
    { id: 'meeting', name: 'Meetings', color: 'orange' }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      academic: 'bg-blue-500/20 text-blue-500',
      sports: 'bg-green-500/20 text-green-500',
      cultural: 'bg-purple-500/20 text-purple-500',
      exam: 'bg-red-500/20 text-red-500',
      meeting: 'bg-orange-500/20 text-orange-500'
    };
    return colorMap[type] || 'bg-gray-500/20 text-gray-500';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-UG', { month: 'short' }),
      weekday: date.toLocaleDateString('en-UG', { weekday: 'short' })
    };
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Upcoming Events
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Stay updated with school activities
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className={`p-2 rounded-lg transition-colors ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
          }`}>
            <Filter className="h-5 w-5" />
          </button>
          <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Event Type Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {eventTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedFilter(type.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === type.id
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {type.name}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredEvents.map((event, index) => {
          const dateInfo = formatDate(event.date);
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border cursor-pointer`}
            >
              <div className="flex items-start space-x-4">
                {/* Date Card */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-lg ${
                  theme === 'dark' ? 'bg-primary-500/20' : 'bg-primary-500/20'
                } flex flex-col items-center justify-center`}>
                  <div className="text-xs text-primary-500 font-medium">
                    {dateInfo.month}
                  </div>
                  <div className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {dateInfo.day}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getTypeColor(event.type)
                    }`}>
                      {event.type}
                    </span>
                    <span className={`text-xs ${
                      theme === 'dark' ? 'text-white/60' : 'text-black/60'
                    }`}>
                      {dateInfo.weekday}
                    </span>
                  </div>
                  
                  <h4 className={`font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {event.title}
                  </h4>
                  
                  <p className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  } line-clamp-2`}>
                    {event.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 text-primary-500 mr-1" />
                      <span className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-primary-500 mr-1" />
                      <span className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                        {event.location}
                      </span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center">
                        <Users className="h-3 w-3 text-primary-500 mr-1" />
                        <span className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                          {event.attendees}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Events */}
      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <button className={`${
          theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
        } px-6 py-3 rounded-full transition-colors font-medium flex items-center justify-center mx-auto`}>
          View All Events
          <Calendar className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsWidget;