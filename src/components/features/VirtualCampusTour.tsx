import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Maximize, Camera, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface VirtualCampusTourProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const VirtualCampusTour: React.FC<VirtualCampusTourProps> = ({ schoolConfig, theme }) => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourLocations = [
    {
      name: 'Main Entrance',
      description: 'Welcome to our beautiful campus entrance with modern security and reception facilities.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Security Gate', 'Reception Area', 'Visitor Parking']
    },
    {
      name: 'Academic Block',
      description: 'State-of-the-art classrooms equipped with modern teaching technology and comfortable learning environments.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Smart Classrooms', 'Interactive Whiteboards', 'Air Conditioning']
    },
    {
      name: 'Science Laboratories',
      description: 'Fully equipped laboratories for Physics, Chemistry, and Biology with modern equipment and safety features.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Modern Equipment', 'Safety Features', 'Research Facilities']
    },
    {
      name: 'Library & Resource Center',
      description: 'Comprehensive library with digital resources, study areas, and computer access for research and learning.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Digital Library', 'Study Rooms', 'Computer Lab']
    },
    {
      name: 'Sports Complex',
      description: 'Multi-purpose sports facilities including football field, basketball court, and indoor gymnasium.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Football Field', 'Basketball Court', 'Swimming Pool']
    },
    {
      name: 'Boarding Facilities',
      description: 'Comfortable dormitories with modern amenities, study areas, and recreational spaces for boarding students.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
      panorama: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1920',
      highlights: ['Dormitories', 'Common Areas', 'Study Halls']
    }
  ];

  const currentTourLocation = tourLocations[currentLocation];

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Camera className="h-8 w-8 text-primary-500 mr-3" />
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Virtual Campus Tour
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            } transition-colors`}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setCurrentLocation(0)}
            className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            } transition-colors`}
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            } transition-colors`}
          >
            <Maximize className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Tour View */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <img
          src={currentTourLocation.panorama}
          alt={currentTourLocation.name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-primary-400 mr-2" />
              <h4 className="text-white font-semibold text-lg">{currentTourLocation.name}</h4>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              {currentTourLocation.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentTourLocation.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2">
            <div className="text-white text-sm">
              {currentLocation + 1} / {tourLocations.length}
            </div>
          </div>
        </div>
      </div>

      {/* Location Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
        {tourLocations.map((location, index) => (
          <button
            key={index}
            onClick={() => setCurrentLocation(index)}
            className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
              currentLocation === index 
                ? 'ring-2 ring-primary-500 scale-105' 
                : 'hover:scale-105'
            }`}
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-16 object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-1 left-1 right-1">
              <div className="text-white text-xs font-medium truncate">
                {location.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Tour Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentLocation(Math.max(0, currentLocation - 1))}
          disabled={currentLocation === 0}
          className={`px-4 py-2 rounded-lg ${
            currentLocation === 0
              ? 'opacity-50 cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white'
              : 'bg-black/10 hover:bg-black/20 text-black'
          } transition-colors`}
        >
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {tourLocations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentLocation(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentLocation === index 
                  ? 'bg-primary-500 w-6' 
                  : theme === 'dark'
                  ? 'bg-white/30 hover:bg-white/50'
                  : 'bg-black/30 hover:bg-black/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentLocation(Math.min(tourLocations.length - 1, currentLocation + 1))}
          disabled={currentLocation === tourLocations.length - 1}
          className={`px-4 py-2 rounded-lg ${
            currentLocation === tourLocations.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white'
              : 'bg-black/10 hover:bg-black/20 text-black'
          } transition-colors`}
        >
          Next
        </button>
      </div>

      {/* Schedule Tour CTA */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="text-center">
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-4`}>
            Want to experience our campus in person?
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium">
            Schedule Physical Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualCampusTour;