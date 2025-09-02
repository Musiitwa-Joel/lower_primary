import React, { useState } from 'react';
import { Award, DollarSign, Calendar, FileText, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Scholarship {
  id: string;
  name: string;
  description: string;
  amount: number;
  percentage?: number;
  eligibility: string[];
  requirements: string[];
  deadline: string;
  applicationUrl: string;
  category: 'academic' | 'sports' | 'need-based' | 'leadership';
  available_slots: number;
  current_applications: number;
}

interface ScholarshipHighlightsProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const ScholarshipHighlights: React.FC<ScholarshipHighlightsProps> = ({ schoolConfig, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const scholarships: Scholarship[] = [
    {
      id: '1',
      name: 'Academic Excellence Scholarship',
      description: 'Full tuition scholarship for students with outstanding academic performance',
      amount: 1200000,
      percentage: 100,
      eligibility: [
        'Minimum aggregate of 8 points in PLE',
        'Excellent conduct record',
        'Demonstrated leadership potential'
      ],
      requirements: [
        'Completed application form',
        'Academic transcripts',
        'Two recommendation letters',
        'Personal statement essay'
      ],
      deadline: '2024-03-15',
      applicationUrl: '/scholarships/academic-excellence/apply',
      category: 'academic',
      available_slots: 10,
      current_applications: 45
    },
    {
      id: '2',
      name: 'Sports Excellence Bursary',
      description: 'Partial scholarship for students with exceptional sporting abilities',
      amount: 600000,
      percentage: 50,
      eligibility: [
        'Proven sports achievements',
        'Good academic standing',
        'Commitment to school sports programs'
      ],
      requirements: [
        'Sports achievement certificates',
        'Coach recommendation',
        'Medical fitness certificate',
        'Academic transcripts'
      ],
      deadline: '2024-02-28',
      applicationUrl: '/scholarships/sports-excellence/apply',
      category: 'sports',
      available_slots: 15,
      current_applications: 28
    },
    {
      id: '3',
      name: 'Need-Based Financial Aid',
      description: 'Financial assistance for deserving students from low-income families',
      amount: 800000,
      percentage: 75,
      eligibility: [
        'Family income below UGX 2M annually',
        'Good academic performance',
        'Demonstrated financial need'
      ],
      requirements: [
        'Financial need assessment',
        'Family income documentation',
        'Academic records',
        'Community leader recommendation'
      ],
      deadline: '2024-04-01',
      applicationUrl: '/scholarships/need-based/apply',
      category: 'need-based',
      available_slots: 25,
      current_applications: 67
    },
    {
      id: '4',
      name: 'Leadership Development Grant',
      description: 'Scholarship for students showing exceptional leadership qualities',
      amount: 400000,
      percentage: 35,
      eligibility: [
        'Demonstrated leadership experience',
        'Community service involvement',
        'Good academic standing'
      ],
      requirements: [
        'Leadership portfolio',
        'Community service records',
        'Interview assessment',
        'Peer recommendations'
      ],
      deadline: '2024-03-30',
      applicationUrl: '/scholarships/leadership/apply',
      category: 'leadership',
      available_slots: 20,
      current_applications: 32
    }
  ];

  const categories = [
    { id: 'all', name: 'All Scholarships', color: 'gray' },
    { id: 'academic', name: 'Academic', color: 'blue' },
    { id: 'sports', name: 'Sports', color: 'green' },
    { id: 'need-based', name: 'Need-Based', color: 'orange' },
    { id: 'leadership', name: 'Leadership', color: 'purple' }
  ];

  const filteredScholarships = selectedCategory === 'all' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      academic: 'bg-blue-500/20 text-blue-500',
      sports: 'bg-green-500/20 text-green-500',
      'need-based': 'bg-orange-500/20 text-orange-500',
      leadership: 'bg-purple-500/20 text-purple-500'
    };
    return colorMap[category] || 'bg-gray-500/20 text-gray-500';
  };

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Deadline passed';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    return `${diffDays} days remaining`;
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Award className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Scholarships & Bursaries
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Financial support for deserving students
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-primary-500">
            UGX {scholarships.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Total available annually
          </div>
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

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredScholarships.map((scholarship, index) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border hover:scale-105`}
            onClick={() => setSelectedScholarship(scholarship)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    getCategoryColor(scholarship.category)
                  }`}>
                    {scholarship.category.charAt(0).toUpperCase() + scholarship.category.slice(1)}
                  </span>
                  <span className={`ml-3 text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-black/60'
                  }`}>
                    {scholarship.available_slots} slots available
                  </span>
                </div>
                <h4 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {scholarship.name}
                </h4>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary-500">
                  {scholarship.percentage}%
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Coverage
                </div>
              </div>
            </div>

            <p className={`mb-4 ${
              theme === 'dark' ? 'text-white/80' : 'text-black/80'
            } leading-relaxed`}>
              {scholarship.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Value
                </span>
                <span className="font-semibold text-primary-500">
                  UGX {scholarship.amount.toLocaleString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Deadline
                </span>
                <span className={`text-sm font-medium ${
                  formatDeadline(scholarship.deadline).includes('remaining') 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {formatDeadline(scholarship.deadline)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Applications
                </span>
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {scholarship.current_applications}/{scholarship.available_slots * 3} received
                </span>
              </div>

              {/* Progress Bar */}
              <div className={`w-full bg-gray-200 rounded-full h-2 ${
                theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
              }`}>
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${Math.min(100, (scholarship.current_applications / (scholarship.available_slots * 3)) * 100)}%` 
                  }}
                />
              </div>
            </div>

            <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Scholarship Detail Modal */}
      {selectedScholarship && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedScholarship(null)}
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
                {selectedScholarship.name}
              </h3>
              <button
                onClick={() => setSelectedScholarship(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {selectedScholarship.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          {criteria}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Application Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedScholarship.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-500/10'
                }`}>
                  <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Scholarship Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Coverage
                      </span>
                      <span className="font-semibold text-primary-500">
                        {selectedScholarship.percentage}% of tuition
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Annual Value
                      </span>
                      <span className="font-semibold text-primary-500">
                        UGX {selectedScholarship.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Available Slots
                      </span>
                      <span className="font-semibold text-primary-500">
                        {selectedScholarship.available_slots}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Application Deadline
                      </span>
                      <span className="font-semibold text-red-500">
                        {new Date(selectedScholarship.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => window.open(selectedScholarship.applicationUrl, '_blank')}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors font-medium flex items-center justify-center"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Start Application
                  </button>
                  <button className={`w-full ${
                    theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                  } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                    <Calendar className="h-5 w-5 mr-2" />
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Summary Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              {scholarships.length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Available Programs
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              {scholarships.reduce((sum, s) => sum + s.available_slots, 0)}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Total Slots
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              UGX {(scholarships.reduce((sum, s) => sum + s.amount, 0) / 1000000).toFixed(1)}M
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Total Value
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              {Math.round(scholarships.reduce((sum, s) => sum + s.percentage, 0) / scholarships.length)}%
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Avg. Coverage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipHighlights;