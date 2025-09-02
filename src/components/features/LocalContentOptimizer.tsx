import React from 'react';
import { MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface LocalContentOptimizerProps {
  schoolConfig: SchoolConfig;
  theme: string;
  pageType: 'home' | 'about' | 'admissions' | 'contact' | 'academics';
}

const LocalContentOptimizer: React.FC<LocalContentOptimizerProps> = ({ 
  schoolConfig, 
  theme, 
  pageType 
}) => {
  // Generate location-specific content based on school config
  const getLocalContent = () => {
    const city = schoolConfig.address.city;
    const country = schoolConfig.address.country;
    const type = schoolConfig.type;
    
    const localStats = {
      home: {
        title: `Leading ${type} school in ${city}, ${country}`,
        description: `Serving families across ${city} and surrounding areas with excellence in education since ${schoolConfig.established}.`,
        stats: [
          { label: `Students from ${city}`, value: '85%' },
          { label: 'Years in Community', value: `${new Date().getFullYear() - schoolConfig.established}+` },
          { label: 'Local Partnerships', value: '25+' },
          { label: 'Community Events', value: '50+/year' }
        ]
      },
      about: {
        title: `Proudly serving ${city} since ${schoolConfig.established}`,
        description: `Our deep roots in ${city} allow us to understand and serve our local community's educational needs.`,
        stats: [
          { label: 'Local Families Served', value: '500+' },
          { label: 'Community Partnerships', value: '30+' },
          { label: 'Local Teacher Graduates', value: '75%' },
          { label: `Alumni in ${city}`, value: '1,200+' }
        ]
      },
      admissions: {
        title: `Welcoming ${city} families to our community`,
        description: `We understand the unique needs of families in ${city} and provide flexible admission processes.`,
        stats: [
          { label: 'Application Success Rate', value: '92%' },
          { label: 'Local Student Retention', value: '96%' },
          { label: 'Scholarship Recipients', value: '15%' },
          { label: 'Average Class Size', value: '18' }
        ]
      },
      contact: {
        title: `Easy to reach in ${city}`,
        description: `Multiple ways to connect with us, whether you're in ${city} center or surrounding areas.`,
        stats: [
          { label: 'Response Time', value: '<2 hours' },
          { label: 'Campus Visits/Month', value: '150+' },
          { label: 'Parent Satisfaction', value: '98%' },
          { label: 'Languages Supported', value: '3' }
        ]
      },
      academics: {
        title: `Academic excellence recognized across ${city}`,
        description: `Our curriculum is designed to meet both international standards and local ${country} requirements.`,
        stats: [
          { label: 'Pass Rate', value: '98%' },
          { label: 'University Acceptance', value: '95%' },
          { label: 'Local University Placements', value: '60%' },
          { label: 'International Placements', value: '40%' }
        ]
      }
    };

    return localStats[pageType] || localStats.home;
  };

  const localContent = getLocalContent();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 rounded-3xl ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10' 
          : 'bg-black/5 border-black/10'
      } backdrop-blur-xl border`}
    >
      <div className="flex items-center mb-6">
        <MapPin className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {localContent.title}
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            {localContent.description}
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {localContent.stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`text-center p-4 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}
          >
            <div className="text-2xl font-bold text-primary-500 mb-2">
              {stat.value}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Local Keywords Integration */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
          Why Choose Us in {schoolConfig.address.city}?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <Users className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Local Community Focus
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Deep understanding of {schoolConfig.address.city}'s educational needs and cultural values
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Recognized Excellence
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Award-winning institution recognized by {country}'s Ministry of Education
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <TrendingUp className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Growing Impact
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Expanding our positive influence across {schoolConfig.address.state} region
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Convenient Location
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Easily accessible from all parts of {schoolConfig.address.city} with transport services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocalContentOptimizer;