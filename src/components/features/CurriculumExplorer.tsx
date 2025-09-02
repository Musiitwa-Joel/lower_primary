import React, { useState } from 'react';
import { BookOpen, Eye, Download, Play, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Subject {
  name: string;
  code: string;
  description: string;
  objectives: string[];
  topics: string[];
  assessment: string;
  prerequisites?: string;
  career_paths: string[];
}

interface Grade {
  level: string;
  subjects: Subject[];
  core_subjects: string[];
  elective_subjects: string[];
}

interface CurriculumExplorerProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ schoolConfig, theme }) => {
  const [selectedGrade, setSelectedGrade] = useState('S1');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');

  const curriculumData: Grade[] = [
    {
      level: 'S1',
      core_subjects: ['Mathematics', 'English', 'Science', 'Social Studies'],
      elective_subjects: ['French', 'Computer Studies', 'Art', 'Music'],
      subjects: [
        {
          name: 'Mathematics',
          code: 'MATH-S1',
          description: 'Foundation mathematics covering basic arithmetic, algebra, and geometry',
          objectives: [
            'Develop number sense and computational skills',
            'Understand basic algebraic concepts',
            'Apply geometric principles to solve problems',
            'Develop logical reasoning and problem-solving skills'
          ],
          topics: [
            'Number Systems and Operations',
            'Basic Algebra and Equations',
            'Geometry and Measurement',
            'Data Handling and Statistics',
            'Fractions and Decimals'
          ],
          assessment: 'Continuous assessment (40%) + Final exam (60%)',
          career_paths: ['Engineering', 'Finance', 'Computer Science', 'Architecture']
        },
        {
          name: 'English Language',
          code: 'ENG-S1',
          description: 'Comprehensive English language skills development',
          objectives: [
            'Develop reading comprehension skills',
            'Improve written communication',
            'Enhance speaking and listening abilities',
            'Build vocabulary and grammar foundation'
          ],
          topics: [
            'Reading Comprehension',
            'Creative Writing',
            'Grammar and Vocabulary',
            'Oral Communication',
            'Literature Introduction'
          ],
          assessment: 'Coursework (50%) + Final exam (50%)',
          career_paths: ['Journalism', 'Law', 'Teaching', 'Communications']
        }
      ]
    },
    {
      level: 'S4',
      core_subjects: ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology'],
      elective_subjects: ['Economics', 'Geography', 'History', 'Art', 'Computer Science'],
      subjects: [
        {
          name: 'Physics',
          code: 'PHY-S4',
          description: 'Advanced physics concepts preparing students for A-level studies',
          objectives: [
            'Understand fundamental physics principles',
            'Develop experimental and analytical skills',
            'Apply physics concepts to real-world problems',
            'Prepare for advanced physics studies'
          ],
          topics: [
            'Mechanics and Motion',
            'Waves and Sound',
            'Electricity and Magnetism',
            'Heat and Thermodynamics',
            'Light and Optics'
          ],
          assessment: 'Practical work (30%) + Theory exam (70%)',
          prerequisites: 'Mathematics, Basic Science',
          career_paths: ['Engineering', 'Medicine', 'Research', 'Technology']
        }
      ]
    }
  ];

  const currentGrade = curriculumData.find(grade => grade.level === selectedGrade) || curriculumData[0];

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setViewMode('detailed');
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Curriculum Explorer
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Explore our comprehensive academic programs
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'overview' ? 'detailed' : 'overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === 'detailed'
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {viewMode === 'overview' ? 'Detailed View' : 'Overview'}
          </button>
        </div>
      </div>

      {/* Grade Selection */}
      <div className="flex flex-wrap gap-2 mb-8">
        {schoolConfig.grades.map((grade) => (
          <button
            key={grade}
            onClick={() => {
              setSelectedGrade(grade);
              setSelectedSubject(null);
              setViewMode('overview');
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedGrade === grade
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      {viewMode === 'overview' ? (
        <div className="space-y-8">
          {/* Core Subjects */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Core Subjects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentGrade.core_subjects.map((subjectName) => {
                const subject = currentGrade.subjects.find(s => s.name === subjectName);
                return (
                  <motion.button
                    key={subjectName}
                    onClick={() => subject && handleSubjectClick(subject)}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                        : 'bg-black/5 hover:bg-black/10 border-black/10'
                    } border`}
                  >
                    <div className={`font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {subjectName}
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      {subject ? subject.code : 'Core subject'}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Elective Subjects */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Elective Subjects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentGrade.elective_subjects.map((subjectName) => (
                <motion.div
                  key={subjectName}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                      : 'bg-black/5 hover:bg-black/10 border-black/10'
                  } border`}
                >
                  <div className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {subjectName}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>
                    Optional subject
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Curriculum Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl text-center ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <Award className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Accredited Programs
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                All programs are accredited by Uganda's Ministry of Education
              </div>
            </div>

            <div className={`p-6 rounded-xl text-center ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <Users className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Small Class Sizes
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Maximum 25 students per class for personalized attention
              </div>
            </div>

            <div className={`p-6 rounded-xl text-center ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <Clock className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Flexible Schedule
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Balanced timetable with time for activities and rest
              </div>
            </div>
          </div>
        </div>
      ) : selectedSubject ? (
        /* Detailed Subject View */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {selectedSubject.name}
              </h4>
              <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                {selectedSubject.code} • {selectedGrade}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedSubject(null);
                setViewMode('overview');
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
              }`}
            >
              Back to Overview
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h5 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Subject Description
                </h5>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-black/80'
                }`}>
                  {selectedSubject.description}
                </p>
              </div>

              <div>
                <h5 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Learning Objectives
                </h5>
                <ul className="space-y-2">
                  {selectedSubject.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Assessment Method
                </h5>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  {selectedSubject.assessment}
                </p>
              </div>

              {selectedSubject.prerequisites && (
                <div>
                  <h5 className={`text-lg font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    Prerequisites
                  </h5>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    {selectedSubject.prerequisites}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h5 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Topics Covered
                </h5>
                <div className="space-y-2">
                  {selectedSubject.topics.map((topic, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                      }`}
                    >
                      <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {topic}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Career Pathways
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedSubject.career_paths.map((career, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Preview Syllabus
                </button>
                <button className={`w-full ${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                  <Download className="h-5 w-5 mr-2" />
                  Download Curriculum Guide
                </button>
                <button className={`w-full ${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                  <Play className="h-5 w-5 mr-2" />
                  Watch Subject Introduction
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className={`h-16 w-16 mx-auto mb-4 ${
            theme === 'dark' ? 'text-white/50' : 'text-black/50'
          }`} />
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Select a subject to view detailed information
          </p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              {currentGrade.core_subjects.length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Core Subjects
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">
              {currentGrade.elective_subjects.length}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Elective Options
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">25</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Max Class Size
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">98%</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Pass Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumExplorer;