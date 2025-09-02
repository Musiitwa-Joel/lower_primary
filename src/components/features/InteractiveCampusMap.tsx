import React, { useState } from 'react';
import { MapPin, Navigation, Search, Layers, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface MapLocation {
  id: string;
  name: string;
  type: 'academic' | 'sports' | 'residential' | 'administrative' | 'recreational';
  coordinates: { x: number; y: number };
  description: string;
  image: string;
  capacity?: string;
  features: string[];
}

interface InteractiveCampusMapProps {
  theme: string;
}

const InteractiveCampusMap: React.FC<InteractiveCampusMapProps> = ({ theme }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLayers, setShowLayers] = useState(true);
  const schoolConfig = getCurrentSchoolConfig();

  const mapLocations: MapLocation[] = [
    {
      id: '1',
      name: 'Main Academic Block',
      type: 'academic',
      coordinates: { x: 30, y: 25 },
      description: 'Primary academic building housing classrooms for S1-S6',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80',
      capacity: '1200 students',
      features: ['Smart Classrooms', 'Computer Labs', 'Staff Rooms', 'Principal\'s Office']
    },
    {
      id: '2',
      name: 'Science Laboratories',
      type: 'academic',
      coordinates: { x: 60, y: 30 },
      description: 'Dedicated science block with Physics, Chemistry, and Biology labs',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80',
      capacity: '30 students per lab',
      features: ['Modern Equipment', 'Safety Systems', 'Prep Rooms', 'Storage']
    },
    {
      id: '3',
      name: 'Library & Resource Center',
      type: 'academic',
      coordinates: { x: 45, y: 15 },
      description: 'Digital library with extensive collection and study areas',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
      capacity: '200 students',
      features: ['Digital Resources', 'Study Rooms', 'Computer Access', 'Reading Areas']
    },
    {
      id: '4',
      name: 'Sports Complex',
      type: 'sports',
      coordinates: { x: 75, y: 60 },
      description: 'Multi-purpose sports facilities and gymnasium',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
      capacity: '500 spectators',
      features: ['Football Field', 'Basketball Court', 'Swimming Pool', 'Gymnasium']
    },
    {
      id: '5',
      name: 'Boarding Houses',
      type: 'residential',
      coordinates: { x: 15, y: 70 },
      description: 'Comfortable residential facilities for boarding students',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
      capacity: '400 students',
      features: ['Dormitories', 'Study Halls', 'Common Rooms', 'Laundry']
    },
    {
      id: '6',
      name: 'Auditorium',
      type: 'recreational',
      coordinates: { x: 50, y: 45 },
      description: 'Main auditorium for assemblies and cultural events',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      capacity: '800 seats',
      features: ['Stage', 'Sound System', 'Lighting', 'Air Conditioning']
    },
    {
      id: '7',
      name: 'Administration Block',
      type: 'administrative',
      coordinates: { x: 20, y: 35 },
      description: 'Administrative offices and student services',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      features: ['Admissions Office', 'Accounts', 'Student Services', 'Reception']
    },
    {
      id: '8',
      name: 'Cafeteria',
      type: 'recreational',
      coordinates: { x: 65, y: 45 },
      description: 'Dining facility serving nutritious meals',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80',
      capacity: '600 students',
      features: ['Multiple Counters', 'Seating Area', 'Kitchen', 'Storage']
    }
  ];

  const locationTypes = [
    { id: 'academic', name: 'Academic', color: '#3b82f6', icon: '🏫' },
    { id: 'sports', name: 'Sports', color: '#22c55e', icon: '⚽' },
    { id: 'residential', name: 'Residential', color: '#8b5cf6', icon: '🏠' },
    { id: 'administrative', name: 'Administrative', color: '#f59e0b', icon: '🏢' },
    { id: 'recreational', name: 'Recreational', color: '#ec4899', icon: '🎭' }
  ];

  const filteredLocations = searchTerm 
    ? mapLocations.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mapLocations;

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Interactive Campus Map
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Explore our campus facilities and locations
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500" />
            <input
              type="text"
              placeholder="Search locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-lg border text-sm ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            />
          </div>
          <button
            onClick={() => setShowLayers(!showLayers)}
            className={`p-2 rounded-lg transition-colors ${
              showLayers 
                ? 'bg-primary-500 text-white' 
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            <Layers className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <div className={`relative rounded-2xl overflow-hidden ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          } h-96 lg:h-[500px]`}>
            {/* Campus Background */}
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
              alt="Campus Overview"
              className="w-full h-full object-cover opacity-30"
            />

            {/* Interactive Markers */}
            {filteredLocations.map((location) => {
              const typeInfo = locationTypes.find(t => t.id === location.type);
              return (
                <motion.button
                  key={location.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 group-hover:w-10 group-hover:h-10"
                    style={{ backgroundColor: typeInfo?.color }}
                  >
                    {typeInfo?.icon}
                  </div>
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                    theme === 'dark' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                  }`}>
                    {location.name}
                  </div>
                </motion.button>
              );
            })}

            {/* Compass */}
            <div className="absolute top-4 right-4">
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-black/50' : 'bg-white/50'
              } backdrop-blur-sm`}>
                <Navigation className="h-6 w-6 text-primary-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Location Details & Legend */}
        <div className="space-y-6">
          {/* Legend */}
          {showLayers && (
            <div className={`p-4 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                Map Legend
              </h4>
              <div className="space-y-2">
                {locationTypes.map((type) => (
                  <div key={type.id} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: type.color }}
                    />
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Location Details */}
          {selectedLocation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              } border`}
            >
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
                {selectedLocation.name}
              </h4>
              
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                {selectedLocation.description}
              </p>

              {selectedLocation.capacity && (
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Capacity
                  </span>
                  <span className="text-sm font-semibold text-primary-500">
                    {selectedLocation.capacity}
                  </span>
                </div>
              )}

              <div className="space-y-2">
                <h5 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Features:
                </h5>
                {selectedLocation.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                Get Directions
              </button>
            </motion.div>
          ) : (
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            } text-center`}>
              <Info className={`h-12 w-12 mx-auto mb-4 ${
                theme === 'dark' ? 'text-white/50' : 'text-black/50'
              }`} />
              <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Click on any location marker to view details
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className={`p-4 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Campus Stats
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Total Area
                </span>
                <span className="text-sm font-semibold text-primary-500">
                  25 Acres
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Buildings
                </span>
                <span className="text-sm font-semibold text-primary-500">
                  {mapLocations.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Classrooms
                </span>
                <span className="text-sm font-semibold text-primary-500">
                  45
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Laboratories
                </span>
                <span className="text-sm font-semibold text-primary-500">
                  8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCampusMap;