import React, { useState } from 'react';
import { Heart, Shield, Utensils, Bus, Activity, Brain, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface WelfareHubProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const WelfareHub: React.FC<WelfareHubProps> = ({ schoolConfig, theme }) => {
  const [activeService, setActiveService] = useState('health');

  const welfareServices = {
    health: {
      title: 'Health Services',
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: 'Comprehensive healthcare services to keep students healthy and safe',
      features: [
        'On-site medical clinic with qualified nurse',
        '24/7 emergency medical response',
        'Regular health screenings and check-ups',
        'Vaccination programs and health education',
        'Mental health first aid training',
        'Partnerships with local hospitals'
      ],
      contact: {
        phone: '+256 414 123 457',
        email: 'health@school.ug',
        hours: '24/7 Emergency, 8AM-5PM Regular'
      },
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80'
    },
    counseling: {
      title: 'Counseling Services',
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      description: 'Professional counseling and mental wellness support for students',
      features: [
        'Individual counseling sessions',
        'Group therapy and support groups',
        'Academic guidance and career counseling',
        'Peer counseling programs',
        'Crisis intervention services',
        'Parent and family counseling'
      ],
      contact: {
        phone: '+256 414 123 458',
        email: 'counseling@school.ug',
        hours: 'Mon-Fri: 8AM-5PM, Emergency: 24/7'
      },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    },
    dining: {
      title: 'Dining Services',
      icon: <Utensils className="h-8 w-8 text-green-500" />,
      description: 'Nutritious and delicious meals prepared with care and attention to dietary needs',
      features: [
        'Balanced nutritional meals',
        'Halal and vegetarian options',
        'Special dietary accommodations',
        'Fresh local ingredients',
        'Hygiene and food safety standards',
        'Student feedback integration'
      ],
      contact: {
        phone: '+256 414 123 459',
        email: 'dining@school.ug',
        hours: 'Breakfast: 7AM-8AM, Lunch: 12PM-1PM, Dinner: 6PM-7PM'
      },
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80'
    },
    transport: {
      title: 'Transportation',
      icon: <Bus className="h-8 w-8 text-yellow-500" />,
      description: 'Safe and reliable transportation services for students across the region',
      features: [
        'GPS-tracked school buses',
        'Qualified and trained drivers',
        'Multiple routes across the city',
        'Real-time tracking for parents',
        'Safety protocols and emergency procedures',
        'Comfortable and well-maintained vehicles'
      ],
      contact: {
        phone: '+256 414 123 460',
        email: 'transport@school.ug',
        hours: 'Mon-Fri: 6AM-7PM, Sat: 7AM-3PM'
      },
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80'
    },
    security: {
      title: 'Security & Safety',
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      description: 'Comprehensive security measures ensuring a safe learning environment',
      features: [
        '24/7 security personnel on campus',
        'CCTV monitoring systems',
        'Controlled access points',
        'Emergency response protocols',
        'Fire safety systems and drills',
        'Student safety education programs'
      ],
      contact: {
        phone: '+256 414 123 461',
        email: 'security@school.ug',
        hours: '24/7 Security Desk'
      },
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80'
    },
    activities: {
      title: 'Extracurricular Activities',
      icon: <Activity className="h-8 w-8 text-indigo-500" />,
      description: 'Diverse activities and clubs to develop talents and interests',
      features: [
        'Sports teams and competitions',
        'Music and drama clubs',
        'Debate and public speaking',
        'Science and technology clubs',
        'Community service programs',
        'Leadership development opportunities'
      ],
      contact: {
        phone: '+256 414 123 462',
        email: 'activities@school.ug',
        hours: 'Mon-Fri: 3PM-6PM, Sat: 9AM-12PM'
      },
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
    }
  };

  const currentService = welfareServices[activeService as keyof typeof welfareServices];

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center mb-8">
        <Heart className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Student Welfare & Support
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Comprehensive care for our students' wellbeing
          </p>
        </div>
      </div>

      {/* Service Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {Object.entries(welfareServices).map(([key, service]) => (
          <button
            key={key}
            onClick={() => setActiveService(key)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              activeService === key
                ? 'bg-primary-500 text-white scale-105'
                : theme === 'dark'
                ? 'bg-white/5 hover:bg-white/10 text-white'
                : 'bg-black/5 hover:bg-black/10 text-black'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <span className="text-sm font-medium mt-2">{service.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Service Details */}
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <div className="flex items-center mb-4">
            {currentService.icon}
            <h4 className={`text-xl font-bold ml-3 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {currentService.title}
            </h4>
          </div>

          <p className={`mb-6 leading-relaxed ${
            theme === 'dark' ? 'text-white/80' : 'text-black/80'
          }`}>
            {currentService.description}
          </p>

          <div className="space-y-3">
            <h5 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Our Services Include:
            </h5>
            <ul className="space-y-2">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className={`mt-6 p-4 rounded-lg ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h5 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Contact Information
            </h5>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-500 mr-3" />
                <a 
                  href={`tel:${currentService.contact.phone.replace(/\D/g, '')}`}
                  className={`hover:text-primary-500 transition-colors ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {currentService.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-500 mr-3" />
                <a 
                  href={`mailto:${currentService.contact.email}`}
                  className={`hover:text-primary-500 transition-colors ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {currentService.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary-500 mr-3" />
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {currentService.contact.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          {/* Emergency Contacts */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-red-500/10 border-red-500/20' : 'bg-red-500/10 border-red-500/20'
          } border`}>
            <h5 className="text-red-500 font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Emergency Contacts
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  School Emergency
                </span>
                <a 
                  href="tel:+256414123456"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  +256 414 123 456
                </a>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Medical Emergency
                </span>
                <a 
                  href="tel:999"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  999
                </a>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Police Emergency
                </span>
                <a 
                  href="tel:999"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  999
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Access Buttons */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-lg transition-colors text-center">
            <Heart className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Book Health Appointment</div>
          </button>
          <button className={`p-4 rounded-lg transition-colors text-center ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}>
            <Brain className="h-6 w-6 mx-auto mb-2 text-primary-500" />
            <div className="font-medium">Counseling Request</div>
          </button>
          <button className={`p-4 rounded-lg transition-colors text-center ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}>
            <Utensils className="h-6 w-6 mx-auto mb-2 text-primary-500" />
            <div className="font-medium">Meal Plans</div>
          </button>
          <button className={`p-4 rounded-lg transition-colors text-center ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}>
            <Bus className="h-6 w-6 mx-auto mb-2 text-primary-500" />
            <div className="font-medium">Transport Routes</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelfareHub;