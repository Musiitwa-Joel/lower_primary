import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'academic' | 'sports' | 'cultural' | 'parent' | 'exam';
  attendees?: number;
  maxAttendees?: number;
  isRegistrationOpen: boolean;
}

interface EventsCalendarProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ schoolConfig, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const events: Event[] = [
    {
      id: '1',
      title: 'Parent-Teacher Conference',
      description: 'Meet with teachers to discuss your child\'s academic progress and development.',
      date: '2024-01-20',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Hall',
      category: 'parent',
      attendees: 45,
      maxAttendees: 100,
      isRegistrationOpen: true
    },
    {
      id: '2',
      title: 'Inter-House Sports Competition',
      description: 'Annual sports competition between school houses featuring various athletic events.',
      date: '2024-01-25',
      time: '8:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'sports',
      attendees: 200,
      maxAttendees: 300,
      isRegistrationOpen: true
    },
    {
      id: '3',
      title: 'Science Fair Exhibition',
      description: 'Students showcase their innovative science projects and experiments.',
      date: '2024-02-01',
      time: '10:00 AM - 3:00 PM',
      location: 'Science Block',
      category: 'academic',
      attendees: 80,
      maxAttendees: 150,
      isRegistrationOpen: true
    },
    {
      id: '4',
      title: 'Cultural Day Celebration',
      description: 'Celebrate Uganda\'s rich cultural heritage with traditional dances, music, and food.',
      date: '2024-02-10',
      time: '2:00 PM - 6:00 PM',
      location: 'School Grounds',
      category: 'cultural',
      attendees: 150,
      maxAttendees: 400,
      isRegistrationOpen: true
    },
    {
      id: '5',
      title: 'Mid-Term Examinations',
      description: 'Mid-term assessment for all grade levels. Please check individual timetables.',
      date: '2024-02-15',
      time: '8:00 AM - 12:00 PM',
      location: 'Various Classrooms',
      category: 'exam',
      isRegistrationOpen: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', color: 'gray' },
    { id: 'academic', name: 'Academic', color: 'blue' },
    { id: 'sports', name: 'Sports', color: 'green' },
    { id: 'cultural', name: 'Cultural', color: 'purple' },
    { id: 'parent', name: 'Parent Events', color: 'orange' },
    { id: 'exam', name: 'Examinations', color: 'red' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      academic: 'bg-blue-500/20 text-blue-500',
      sports: 'bg-green-500/20 text-green-500',
      cultural: 'bg-purple-500/20 text-purple-500',
      parent: 'bg-orange-500/20 text-orange-500',
      exam: 'bg-red-500/20 text-red-500'
    };
    return categoryMap[category] || 'bg-gray-500/20 text-gray-500';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UG', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
              School Events & Calendar
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Stay updated with upcoming school activities
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'calendar' : 'list')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            <Calendar className="h-5 w-5" />
          </button>
          <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
            } transition-colors border ${
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                    getCategoryColor(event.category)
                  }`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <h4 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {event.title}
                  </h4>
                </div>

                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-black/70'
                } leading-relaxed`}>
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {event.location}
                    </span>
                  </div>
                  {event.attendees && event.maxAttendees && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary-500 mr-2" />
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        {event.attendees}/{event.maxAttendees} registered
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row gap-3">
                {event.isRegistrationOpen && (
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                    Register
                  </button>
                )}
                <button className={`${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                } px-6 py-3 rounded-lg transition-colors font-medium`}>
                  Add to Calendar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscribe to Calendar */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="text-center">
          <h4 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Never Miss an Event
          </h4>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-white/70' : 'text-black/70'
          }`}>
            Subscribe to our calendar to get automatic updates about school events
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Subscribe to Calendar
            </button>
            <button className={`${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
            } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
              <Filter className="h-5 w-5 mr-2" />
              Customize Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;