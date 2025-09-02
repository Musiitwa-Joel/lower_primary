import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  DollarSign, 
  Award, 
  BookOpen, 
  Calendar, 
  Users, 
  FileText, 
  Phone,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface QuickLinksProps {
  theme: string;
}

const QuickLinksPanel: React.FC<QuickLinksProps> = ({ theme }) => {
  const schoolConfig = getCurrentSchoolConfig();

  const quickLinks = [
    {
      title: 'Admissions',
      description: `Apply to ${schoolConfig.shortName}`,
      icon: <UserPlus className="h-6 w-6" />,
      path: '/admissions/apply',
      color: 'bg-blue-500',
      urgent: true
    },
    {
      title: 'Fee Structure',
      description: 'View tuition fees',
      icon: <DollarSign className="h-6 w-6" />,
      path: '/admissions/fees',
      color: 'bg-green-500'
    },
    {
      title: 'Results',
      description: 'Check exam results',
      icon: <Award className="h-6 w-6" />,
      path: '/portal/results',
      color: 'bg-purple-500'
    },
    {
      title: 'Online Courses',
      description: 'Access e-learning',
      icon: <BookOpen className="h-6 w-6" />,
      path: '/academics/online',
      color: 'bg-orange-500'
    },
    {
      title: 'Events',
      description: 'Upcoming events',
      icon: <Calendar className="h-6 w-6" />,
      path: '/events',
      color: 'bg-pink-500'
    },
    {
      title: 'Student Portal',
      description: 'Login to portal',
      icon: <Users className="h-6 w-6" />,
      path: '/portal',
      color: 'bg-indigo-500'
    },
    {
      title: 'Prospectus',
      description: 'Download PDF',
      icon: <FileText className="h-6 w-6" />,
      path: '/prospectus.pdf',
      color: 'bg-teal-500'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch',
      icon: <Phone className="h-6 w-6" />,
      path: '/contact',
      color: 'bg-red-500'
    }
  ];

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
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
          Quick Access
        </h3>
        <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
          Essential school services at your fingertips
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {quickLinks.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link
              to={link.path}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 block ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border`}
            >
              {link.urgent && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
              )}
              
              <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              
              <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {link.title}
              </h4>
              
              <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-3`}>
                {link.description}
              </p>
              
              <div className="flex items-center text-primary-500 text-sm font-medium">
                Access
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QuickLinksPanel;