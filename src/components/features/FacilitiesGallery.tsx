import React, { useState } from 'react';
import { Camera, Play, Maximize, Grid, List, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface Facility {
  id: string;
  name: string;
  category: 'academic' | 'sports' | 'residential' | 'recreational' | 'support';
  description: string;
  images: string[];
  videoUrl?: string;
  features: string[];
  capacity?: string;
  location: string;
}

interface FacilitiesGalleryProps {
  theme: string;
}

const FacilitiesGallery: React.FC<FacilitiesGalleryProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const facilities: Facility[] = [
    {
      id: '1',
      name: 'Science Laboratories',
      category: 'academic',
      description: 'State-of-the-art laboratories for Physics, Chemistry, and Biology with modern equipment and safety features.',
      images: [
        'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80'
      ],
      videoUrl: 'https://example.com/science-lab-tour.mp4',
      features: ['Modern Equipment', 'Safety Systems', 'Digital Microscopes', 'Fume Hoods'],
      capacity: '30 students per lab',
      location: 'Science Block, Ground Floor'
    },
    {
      id: '2',
      name: 'Digital Library',
      category: 'academic',
      description: 'Comprehensive library with digital resources, study areas, and computer access for research and learning.',
      images: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80'
      ],
      features: ['50,000+ Books', 'Digital Resources', 'Study Rooms', 'Computer Lab'],
      capacity: '200 students',
      location: 'Academic Block, First Floor'
    },
    {
      id: '3',
      name: 'Sports Complex',
      category: 'sports',
      description: 'Multi-purpose sports facilities including football field, basketball court, and indoor gymnasium.',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
      ],
      videoUrl: 'https://example.com/sports-complex-tour.mp4',
      features: ['Football Field', 'Basketball Court', 'Swimming Pool', 'Gymnasium'],
      capacity: '500 spectators',
      location: 'Sports Complex'
    },
    {
      id: '4',
      name: 'Boarding Houses',
      category: 'residential',
      description: 'Comfortable dormitories with modern amenities, study areas, and recreational spaces for boarding students.',
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80'
      ],
      features: ['Modern Dormitories', 'Study Halls', 'Common Areas', 'Laundry Facilities'],
      capacity: '400 boarding students',
      location: 'Residential Area'
    },
    {
      id: '5',
      name: 'Auditorium',
      category: 'recreational',
      description: 'Modern auditorium for assemblies, cultural events, and performances with advanced audio-visual systems.',
      images: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
      ],
      features: ['Seating for 800', 'Advanced AV System', 'Stage Lighting', 'Air Conditioning'],
      capacity: '800 seats',
      location: 'Main Building'
    },
    {
      id: '6',
      name: 'Cafeteria',
      category: 'support',
      description: 'Spacious dining facility serving nutritious meals with options for various dietary requirements.',
      images: [
        'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80'
      ],
      features: ['Nutritious Meals', 'Halal Options', 'Vegetarian Menu', 'Modern Kitchen'],
      capacity: '600 students',
      location: 'Central Building'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Facilities', color: 'gray' },
    { id: 'academic', name: 'Academic', color: 'blue' },
    { id: 'sports', name: 'Sports', color: 'green' },
    { id: 'residential', name: 'Residential', color: 'purple' },
    { id: 'recreational', name: 'Recreational', color: 'pink' },
    { id: 'support', name: 'Support', color: 'orange' }
  ];

  const filteredFacilities = selectedCategory === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.category === selectedCategory);

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Camera className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Campus Facilities
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Explore our world-class facilities
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            {viewMode === 'grid' ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Facilities Display */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
        {filteredFacilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border`}
            onClick={() => setSelectedFacility(facility)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={facility.images[0]}
                alt={facility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {facility.videoUrl && (
                <div className="absolute top-3 right-3">
                  <div className="bg-black/70 text-white p-2 rounded-lg">
                    <Play className="h-4 w-4" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-white font-semibold text-lg">
                  {facility.name}
                </h4>
                <div className="flex items-center mt-1">
                  <MapPin className="h-3 w-3 text-white/80 mr-1" />
                  <span className="text-white/80 text-sm">{facility.location}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-4 leading-relaxed`}>
                {facility.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {facility.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {facility.features.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                    +{facility.features.length - 3} more
                  </span>
                )}
              </div>

              {facility.capacity && (
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  Capacity: {facility.capacity}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFacility(null)}
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
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {selectedFacility.name}
              </h3>
              <button
                onClick={() => setSelectedFacility(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedFacility.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedFacility.name} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setLightboxImage(image)}
                    />
                  ))}
                </div>

                {selectedFacility.videoUrl && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Virtual Tour
                    </h4>
                    <div className="relative rounded-lg overflow-hidden">
                      <video
                        src={selectedFacility.videoUrl}
                        controls
                        className="w-full h-48 object-cover"
                        poster={selectedFacility.images[0]}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    About This Facility
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                    {selectedFacility.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    Features & Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedFacility.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {selectedFacility.capacity && (
                    <div className="flex items-center justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Capacity
                      </span>
                      <span className="font-semibold text-primary-500">
                        {selectedFacility.capacity}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Location
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {selectedFacility.location}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Schedule Facility Tour
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-60 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={lightboxImage}
            alt="Facility"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default FacilitiesGallery;