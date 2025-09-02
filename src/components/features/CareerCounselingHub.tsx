import React, { useState } from 'react';
import { Compass, Target, BookOpen, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface CareerPath {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  universities: string[];
  careers: string[];
  averageSalary: string;
  growthRate: string;
  image: string;
}

interface CareerCounselingHubProps {
  theme: string;
}

const CareerCounselingHub: React.FC<CareerCounselingHubProps> = ({ theme }) => {
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [activeTab, setActiveTab] = useState<'explore' | 'assessment' | 'guidance'>('explore');
  const schoolConfig = getCurrentSchoolConfig();

  const careerPaths: CareerPath[] = [
    {
      id: '1',
      title: 'Engineering & Technology',
      description: 'Build the future with engineering and technology careers',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
      universities: ['Makerere University', 'Kyambogo University', 'MUBS'],
      careers: ['Software Engineer', 'Civil Engineer', 'Electrical Engineer', 'Data Scientist'],
      averageSalary: 'UGX 3-8M annually',
      growthRate: '15% annually',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Medicine & Healthcare',
      description: 'Heal and care for others in the medical field',
      subjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
      universities: ['Makerere University', 'Mbarara University', 'Kampala International University'],
      careers: ['Doctor', 'Nurse', 'Pharmacist', 'Medical Researcher'],
      averageSalary: 'UGX 4-12M annually',
      growthRate: '12% annually',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'Business & Finance',
      description: 'Lead organizations and manage financial resources',
      subjects: ['Mathematics', 'Economics', 'Entrepreneurship', 'Accounting'],
      universities: ['MUBS', 'UCU', 'Nkumba University'],
      careers: ['Business Manager', 'Financial Analyst', 'Entrepreneur', 'Accountant'],
      averageSalary: 'UGX 2-6M annually',
      growthRate: '10% annually',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      id: '4',
      title: 'Arts & Communication',
      description: 'Express creativity and communicate effectively',
      subjects: ['English', 'Literature', 'Art', 'Music', 'Drama'],
      universities: ['Makerere University', 'UCU', 'Kyambogo University'],
      careers: ['Journalist', 'Graphic Designer', 'Teacher', 'Marketing Specialist'],
      averageSalary: 'UGX 1.5-4M annually',
      growthRate: '8% annually',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80'
    }
  ];

  const assessmentQuestions = [
    {
      question: 'What type of activities do you enjoy most?',
      options: [
        'Solving complex problems and puzzles',
        'Helping and caring for others',
        'Leading teams and making decisions',
        'Creating and expressing ideas'
      ]
    },
    {
      question: 'Which subjects do you find most interesting?',
      options: [
        'Mathematics and Sciences',
        'Biology and Chemistry',
        'Economics and Business Studies',
        'Languages and Arts'
      ]
    },
    {
      question: 'What work environment appeals to you?',
      options: [
        'Technology companies and labs',
        'Hospitals and clinics',
        'Offices and boardrooms',
        'Studios and creative spaces'
      ]
    }
  ];

  const [assessmentAnswers, setAssessmentAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAssessmentAnswer = (answerIndex: number) => {
    const newAnswers = [...assessmentAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setAssessmentAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getRecommendedPath = () => {
    if (assessmentAnswers.length < assessmentQuestions.length) return null;
    
    const pathScores = [0, 0, 0, 0]; // Engineering, Medicine, Business, Arts
    assessmentAnswers.forEach(answer => {
      pathScores[answer]++;
    });
    
    const maxScore = Math.max(...pathScores);
    const recommendedIndex = pathScores.indexOf(maxScore);
    return careerPaths[recommendedIndex];
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Compass className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Career Counseling Hub
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Discover your future career path
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          {['explore', 'assessment', 'guidance'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'
                  : theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-black/10 hover:bg-black/20 text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'explore' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border-black/10'
              } border`}
              onClick={() => setSelectedPath(path)}
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-32 object-cover"
              />
              
              <div className="p-6">
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
                  {path.title}
                </h4>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                  {path.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Avg. Salary
                    </span>
                    <span className="text-sm font-semibold text-green-500">
                      {path.averageSalary}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Growth Rate
                    </span>
                    <span className="text-sm font-semibold text-blue-500">
                      {path.growthRate}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {path.subjects.slice(0, 3).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                    {path.subjects.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                        +{path.subjects.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'assessment' && (
        <div className="max-w-2xl mx-auto">
          {assessmentAnswers.length < assessmentQuestions.length ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mb-2`}>
                  Question {currentQuestion + 1} of {assessmentQuestions.length}
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2 ${
                  theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
                }`}>
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h4 className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-black'} mb-8`}>
                {assessmentQuestions[currentQuestion].question}
              </h4>

              <div className="space-y-3">
                {assessmentQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAssessmentAnswer(index)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                        : 'bg-black/5 hover:bg-black/10 border-black/10'
                    } border`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 border-primary-500 mr-4 flex items-center justify-center`}>
                        <div className="w-3 h-3 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-green-500" />
              </div>
              
              <div>
                <h4 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                  Assessment Complete!
                </h4>
                
                {getRecommendedPath() && (
                  <div className={`p-6 rounded-xl ${
                    theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
                  } border text-left`}>
                    <h5 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Recommended Career Path:
                    </h5>
                    <div className={`text-xl font-bold text-primary-500 mb-2`}>
                      {getRecommendedPath()?.title}
                    </div>
                    <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-4`}>
                      {getRecommendedPath()?.description}
                    </p>
                    <button
                      onClick={() => setSelectedPath(getRecommendedPath())}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      Explore This Path
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setAssessmentAnswers([]);
                  setCurrentQuestion(0);
                }}
                className={`${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                } px-6 py-3 rounded-lg transition-colors font-medium`}
              >
                Retake Assessment
              </button>
            </motion.div>
          )}
        </div>
      )}

      {activeTab === 'guidance' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Planning',
                description: 'Plan your subject combinations for optimal career preparation',
                icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                features: ['Subject selection guidance', 'Grade requirements', 'Study schedules']
              },
              {
                title: 'University Preparation',
                description: 'Get ready for university applications and entrance exams',
                icon: <Award className="h-8 w-8 text-green-500" />,
                features: ['Application assistance', 'Scholarship guidance', 'Interview prep']
              },
              {
                title: 'Skill Development',
                description: 'Build essential skills for your chosen career path',
                icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
                features: ['Soft skills training', 'Technical workshops', 'Leadership programs']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                    : 'bg-black/5 hover:bg-black/10 border-black/10'
                } border transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                  {service.title}
                </h4>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      <span className={`text-xs ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Counselor Contact */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
          } border text-center`}>
            <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
              Need Personal Guidance?
            </h4>
            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} mb-6`}>
              Schedule a one-on-one session with our career counselors
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center mx-auto">
              Book Counseling Session
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      )}

      {/* Career Path Detail Modal */}
      {selectedPath && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPath(null)}
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
                {selectedPath.title}
              </h3>
              <button
                onClick={() => setSelectedPath(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedPath.image}
                  alt={selectedPath.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Required Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Recommended Universities
                    </h4>
                    <ul className="space-y-2">
                      {selectedPath.universities.map((university, index) => (
                        <li key={index} className="flex items-center">
                          <Award className="h-4 w-4 text-primary-500 mr-2" />
                          <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                            {university}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                    Career Opportunities
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedPath.careers.map((career, index) => (
                      <div key={index} className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                      }`}>
                        <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-green-500/10 border-green-500/20' : 'bg-green-500/10 border-green-500/20'
                } border`}>
                  <h5 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Career Outlook
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Average Salary
                      </span>
                      <span className="text-sm font-semibold text-green-500">
                        {selectedPath.averageSalary}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Growth Rate
                      </span>
                      <span className="text-sm font-semibold text-blue-500">
                        {selectedPath.growthRate}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Get Detailed Career Guide
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CareerCounselingHub;