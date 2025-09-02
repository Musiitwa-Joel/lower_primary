import React, { useState } from 'react';
import { User, BookOpen, Calendar, Award, Bell, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudentPortalProps {
  theme: string;
}

const StudentPortal: React.FC<StudentPortalProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ studentId: '', password: '' });

  const studentData = {
    name: "Sarah Nakato",
    studentId: "STU2024001",
    grade: "S4",
    class: "S4A",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80"
  };

  const upcomingAssignments = [
    { subject: "Mathematics", title: "Algebra Test", dueDate: "2024-01-15", status: "pending" },
    { subject: "Physics", title: "Lab Report", dueDate: "2024-01-18", status: "submitted" },
    { subject: "English", title: "Essay Writing", dueDate: "2024-01-20", status: "pending" }
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Trigonometry Quiz", grade: "A", date: "2024-01-10" },
    { subject: "Physics", assignment: "Motion Laws Test", grade: "B+", date: "2024-01-08" },
    { subject: "Chemistry", assignment: "Organic Chemistry", grade: "A-", date: "2024-01-05" }
  ];

  const timetable = [
    { time: "8:00 AM", monday: "Mathematics", tuesday: "Physics", wednesday: "Chemistry", thursday: "Biology", friday: "English" },
    { time: "9:00 AM", monday: "English", tuesday: "Mathematics", wednesday: "Physics", thursday: "Chemistry", friday: "Biology" },
    { time: "10:00 AM", monday: "Physics", tuesday: "English", wednesday: "Mathematics", thursday: "Physics", friday: "Chemistry" },
    { time: "11:00 AM", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "11:30 AM", monday: "Chemistry", tuesday: "Biology", wednesday: "English", thursday: "Mathematics", friday: "Physics" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <User className="h-4 w-4" /> },
    { id: 'grades', name: 'Grades', icon: <Award className="h-4 w-4" /> },
    { id: 'timetable', name: 'Timetable', icon: <Calendar className="h-4 w-4" /> },
    { id: 'assignments', name: 'Assignments', icon: <BookOpen className="h-4 w-4" /> }
  ];

  if (!isLoggedIn) {
    return (
      <div className={`p-8 rounded-3xl ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10' 
          : 'bg-black/5 border-black/10'
      } backdrop-blur-xl border`}>
        <div className="flex items-center mb-6">
          <User className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Student Portal
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Access your grades, assignments, and timetable
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
            className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Sign In
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
            Demo credentials: Student ID: <code>STU2024001</code>, Password: <code>demo123</code>
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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src={studentData.profileImage}
            alt={studentData.name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Welcome back, {studentData.name}
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              {studentData.grade} • {studentData.class} • ID: {studentData.studentId}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className={`p-2 rounded-lg transition-colors ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
          }`}>
            <Bell className="h-5 w-5" />
          </button>
          <button className={`p-2 rounded-lg transition-colors ${
            theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
          }`}>
            <Settings className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white'
                : theme === 'dark'
                ? 'bg-white/5 hover:bg-white/10 text-white'
                : 'bg-black/5 hover:bg-black/10 text-black'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Quick Stats
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Overall Grade
                  </span>
                  <span className="text-primary-500 font-semibold">A-</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Attendance
                  </span>
                  <span className="text-green-500 font-semibold">96%</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Pending Assignments
                  </span>
                  <span className="text-yellow-500 font-semibold">2</span>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Recent Activity
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-green-500 mr-3" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Received A in Mathematics
                  </span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-blue-500 mr-3" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Submitted Physics Lab Report
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-purple-500 mr-3" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Upcoming: Chemistry Test
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="space-y-4">
            <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Recent Grades
            </h4>
            {recentGrades.map((grade, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              } flex items-center justify-between`}>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {grade.subject}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    {grade.assignment}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    grade.grade.startsWith('A') ? 'text-green-500' :
                    grade.grade.startsWith('B') ? 'text-blue-500' :
                    'text-yellow-500'
                  }`}>
                    {grade.grade}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    {grade.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'timetable' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Time</th>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Monday</th>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Tuesday</th>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Wednesday</th>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Thursday</th>
                  <th className={`text-left p-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Friday</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, index) => (
                  <tr key={index} className={`border-b ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
                    <td className={`p-3 font-medium ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                      {row.time}
                    </td>
                    <td className={`p-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {row.monday}
                    </td>
                    <td className={`p-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {row.tuesday}
                    </td>
                    <td className={`p-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {row.wednesday}
                    </td>
                    <td className={`p-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {row.thursday}
                    </td>
                    <td className={`p-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {row.friday}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'assignments' && (
          <div className="space-y-4">
            <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Upcoming Assignments
            </h4>
            {upcomingAssignments.map((assignment, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              } flex items-center justify-between`}>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {assignment.title}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    {assignment.subject} • Due: {assignment.dueDate}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  assignment.status === 'submitted' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {assignment.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StudentPortal;