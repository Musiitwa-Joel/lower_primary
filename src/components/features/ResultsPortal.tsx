import React, { useState } from 'react';
import { Award, Eye, Download, Lock, User, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface StudentResult {
  subject: string;
  marks: number;
  grade: string;
  remarks: string;
  teacher: string;
}

interface ExamResult {
  examName: string;
  term: string;
  year: string;
  totalMarks: number;
  percentage: number;
  grade: string;
  position: number;
  totalStudents: number;
  subjects: StudentResult[];
}

interface ResultsPortalProps {
  theme: string;
}

const ResultsPortal: React.FC<ResultsPortalProps> = ({ theme }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ studentId: '', password: '' });
  const [selectedExam, setSelectedExam] = useState<ExamResult | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const sampleResults: ExamResult[] = [
    {
      examName: 'Mid-Term Examination',
      term: 'Term 1',
      year: '2024',
      totalMarks: 850,
      percentage: 85,
      grade: 'A',
      position: 3,
      totalStudents: 45,
      subjects: [
        { subject: 'Mathematics', marks: 92, grade: 'A', remarks: 'Excellent', teacher: 'Dr. Sarah Nakato' },
        { subject: 'Physics', marks: 88, grade: 'A', remarks: 'Very Good', teacher: 'Mr. David Mukasa' },
        { subject: 'Chemistry', marks: 85, grade: 'A', remarks: 'Good', teacher: 'Ms. Grace Namuli' },
        { subject: 'Biology', marks: 90, grade: 'A', remarks: 'Excellent', teacher: 'Mrs. Mary Namusoke' },
        { subject: 'English', marks: 82, grade: 'B+', remarks: 'Good', teacher: 'Mr. James Okello' }
      ]
    },
    {
      examName: 'Final Examination',
      term: 'Term 3',
      year: '2023',
      totalMarks: 820,
      percentage: 82,
      grade: 'A',
      position: 5,
      totalStudents: 45,
      subjects: [
        { subject: 'Mathematics', marks: 89, grade: 'A', remarks: 'Very Good', teacher: 'Dr. Sarah Nakato' },
        { subject: 'Physics', marks: 85, grade: 'A', remarks: 'Good', teacher: 'Mr. David Mukasa' },
        { subject: 'Chemistry', marks: 80, grade: 'B+', remarks: 'Good', teacher: 'Ms. Grace Namuli' },
        { subject: 'Biology', marks: 87, grade: 'A', remarks: 'Very Good', teacher: 'Mrs. Mary Namusoke' },
        { subject: 'English', marks: 79, grade: 'B+', remarks: 'Satisfactory', teacher: 'Mr. James Okello' }
      ]
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setSelectedExam(sampleResults[0]);
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'text-green-500';
    if (grade === 'B+' || grade === 'B') return 'text-blue-500';
    if (grade === 'C+' || grade === 'C') return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isLoggedIn) {
    return (
      <div className={`p-8 rounded-3xl ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10' 
          : 'bg-black/5 border-black/10'
      } backdrop-blur-xl border`}>
        <div className="flex items-center mb-6">
          <Award className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Exam Results Portal
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Check your examination results securely
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 max-w-md">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Student ID
            </label>
            <input
              type="text"
              value={loginForm.studentId}
              onChange={(e) => setLoginForm(prev => ({ ...prev, studentId: e.target.value }))}
              placeholder="Enter your student ID"
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Password
            </label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
          >
            <Lock className="h-5 w-5 mr-2" />
            Access Results
          </button>

          <div className="text-center">
            <a 
              href="/forgot-password" 
              className="text-primary-500 hover:text-primary-600 text-sm"
            >
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Demo credentials: Student ID: <code>STU2024001</code>, Password: <code>results123</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Award className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Your Exam Results
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Student ID: STU2024001 • Sarah Nakato • S4A
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
        >
          Logout
        </button>
      </div>

      {/* Exam Selection */}
      <div className="flex space-x-3 mb-6">
        {sampleResults.map((result, index) => (
          <button
            key={index}
            onClick={() => setSelectedExam(result)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedExam === result
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
            }`}
          >
            {result.examName} - {result.term} {result.year}
          </button>
        ))}
      </div>

      {selectedExam && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Overall Performance */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
          } border`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">
                  {selectedExam.percentage}%
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Overall Score
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getGradeColor(selectedExam.grade)}`}>
                  {selectedExam.grade}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Grade
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">
                  #{selectedExam.position}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Class Position
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">
                  {selectedExam.totalStudents}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  Total Students
                </div>
              </div>
            </div>
          </div>

          {/* Subject-wise Results */}
          <div>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Subject-wise Performance
            </h4>
            <div className="space-y-3">
              {selectedExam.subjects.map((subject, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                } flex items-center justify-between`}>
                  <div className="flex-1">
                    <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {subject.subject}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Teacher: {subject.teacher}
                    </div>
                  </div>
                  <div className="text-center mx-4">
                    <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {subject.marks}/100
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Marks
                    </div>
                  </div>
                  <div className="text-center mx-4">
                    <div className={`text-lg font-bold ${getGradeColor(subject.grade)}`}>
                      {subject.grade}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Grade
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${
                      subject.remarks === 'Excellent' ? 'text-green-500' :
                      subject.remarks === 'Very Good' ? 'text-blue-500' :
                      subject.remarks === 'Good' ? 'text-yellow-500' :
                      'text-orange-500'
                    }`}>
                      {subject.remarks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              Download Report Card
            </button>
            <button className={`flex-1 ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
            } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
              <Eye className="h-5 w-5 mr-2" />
              View Analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResultsPortal;