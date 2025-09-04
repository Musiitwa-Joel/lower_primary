import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Bell,
  Download,
  Filter,
  Plus,
  ArrowRight,
  Users,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface ImportantDate {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  category: "application" | "exam" | "interview" | "decision" | "enrollment" | "orientation";
  priority: "high" | "medium" | "low";
  status: "upcoming" | "ongoing" | "completed";
  requirements?: string[];
  location?: string;
  targetGrades: string[];
}

interface ImportantDatesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ImportantDatesPage: React.FC<ImportantDatesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<ImportantDate | null>(null);
  const [reminderEmail, setReminderEmail] = useState("");
  const [reminderSet, setReminderSet] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const importantDates: ImportantDate[] = [
    {
      id: "1",
      title: "Application Period Opens",
      description: "Online and offline applications begin for the 2025-26 academic year",
      date: "2024-01-15",
      category: "application",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      requirements: [
        "Completed application form",
        "Required documents ready",
        "Application fee payment"
      ]
    },
    {
      id: "2",
      title: "Early Decision Deadline",
      description: "Deadline for early decision applications with priority consideration",
      date: "2024-03-15",
      category: "application",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S5"],
      requirements: [
        "All documents submitted",
        "Application fee paid",
        "Interview completed"
      ]
    },
    {
      id: "3",
      title: "Scholarship Application Deadline",
      description: "Final date to submit scholarship and bursary applications",
      date: "2024-03-30",
      category: "application",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      requirements: [
        "Scholarship application form",
        "Supporting documents",
        "Recommendation letters"
      ]
    },
    {
      id: "4",
      title: "Regular Application Deadline",
      description: "Final deadline for regular admission applications",
      date: "2024-05-15",
      category: "application",
      priority: "medium",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"]
    },
    {
      id: "5",
      title: "Entrance Examinations",
      description: "Entrance exams for all applicants across multiple sessions",
      date: "2024-06-01",
      endDate: "2024-06-15",
      category: "exam",
      priority: "high",
      status: "upcoming",
      location: "Main Campus - Various Venues",
      targetGrades: ["S1", "S2", "S3", "S4", "S5"],
      requirements: [
        "Exam admission ticket",
        "Valid identification",
        "Required stationery"
      ]
    },
    {
      id: "6",
      title: "Admission Interviews",
      description: "Personal interviews for shortlisted candidates",
      date: "2024-06-20",
      endDate: "2024-06-30",
      category: "interview",
      priority: "high",
      status: "upcoming",
      location: "Admissions Office",
      targetGrades: ["S1", "S5"],
      requirements: [
        "Interview invitation letter",
        "Academic portfolio",
        "Parent/guardian attendance"
      ]
    },
    {
      id: "7",
      title: "Admission Results Released",
      description: "Admission decisions communicated to all applicants",
      date: "2024-07-15",
      category: "decision",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"]
    },
    {
      id: "8",
      title: "Enrollment Confirmation Deadline",
      description: "Deadline to confirm enrollment and pay confirmation fee",
      date: "2024-07-30",
      category: "enrollment",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      requirements: [
        "Enrollment confirmation form",
        "Confirmation fee payment",
        "Medical examination"
      ]
    },
    {
      id: "9",
      title: "New Student Orientation",
      description: "Orientation program for all new students and parents",
      date: "2024-08-15",
      endDate: "2024-08-17",
      category: "orientation",
      priority: "medium",
      status: "upcoming",
      location: "Main Campus",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      requirements: [
        "Enrollment confirmation",
        "Student handbook review",
        "Parent attendance encouraged"
      ]
    },
    {
      id: "10",
      title: "Academic Year Begins",
      description: "First day of classes for the 2025-26 academic year",
      date: "2024-09-02",
      category: "enrollment",
      priority: "high",
      status: "upcoming",
      targetGrades: ["S1", "S2", "S3", "S4", "S5", "S6"]
    }
  ];

  const categories = [
    { id: "all", name: "All Dates", color: "gray", icon: <Calendar className="h-4 w-4" /> },
    { id: "application", name: "Applications", color: "blue", icon: <FileText className="h-4 w-4" /> },
    { id: "exam", name: "Examinations", color: "red", icon: <AlertCircle className="h-4 w-4" /> },
    { id: "interview", name: "Interviews", color: "purple", icon: <Users className="h-4 w-4" /> },
    { id: "decision", name: "Decisions", color: "green", icon: <CheckCircle className="h-4 w-4" /> },
    { id: "enrollment", name: "Enrollment", color: "orange", icon: <Calendar className="h-4 w-4" /> },
    { id: "orientation", name: "Orientation", color: "pink", icon: <Users className="h-4 w-4" /> }
  ];

  const filteredDates = selectedCategory === "all" 
    ? importantDates 
    : importantDates.filter(date => date.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      application: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      exam: "bg-red-500/20 text-red-500 border-red-500/30",
      interview: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      decision: "bg-green-500/20 text-green-500 border-green-500/30",
      enrollment: "bg-orange-500/20 text-orange-500 border-orange-500/30",
      orientation: "bg-pink-500/20 text-pink-500 border-pink-500/30"
    };
    return colorMap[category] || "bg-gray-500/20 text-gray-500 border-gray-500/30";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-yellow-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const formatDateRange = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;
    
    if (end) {
      return `${start.toLocaleDateString('en-UG', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-UG', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    }
    
    return start.toLocaleDateString('en-UG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getDaysUntil = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Past";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days`;
  };

  const handleReminderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReminderSet(true);
    setReminderEmail("");
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Important Dates | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Important admission dates and deadlines for ${schoolConfig.name}. Application deadlines, exam dates, interview schedules, and enrollment timelines.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} admission dates, application deadlines, exam schedule, enrollment dates, ${schoolConfig.address.city} school calendar`}
        />
        <meta property="og:title" content={`Important Dates | ${schoolConfig.name}`} />
        <meta property="og:description" content={`Stay updated with important admission dates and deadlines at ${schoolConfig.name}. Never miss a crucial deadline.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/admissions/dates" />
        <link rel="canonical" href="https://tredumo.com/admissions/dates" />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
            alt="Important Dates"
            className="w-full h-full object-cover opacity-10"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-r from-black/90 to-black/70" : "bg-gradient-to-r from-white/90 to-white/70"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Stay Informed
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Important <span className="text-primary-500">Dates</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Stay on track with all crucial admission deadlines, examination dates, and enrollment milestones. Never miss an important date in your journey to {schoolConfig.name}.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {importantDates.filter(d => d.status === "upcoming").length}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Upcoming Events
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {importantDates.filter(d => d.priority === "high").length}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                High Priority
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {Math.min(...importantDates.filter(d => d.status === "upcoming").map(d => {
                  const days = Math.ceil((new Date(d.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                  return days > 0 ? days : Infinity;
                }))}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Days to Next Event
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">6</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Months Process
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Timeline View */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`} />

            <div className="space-y-8">
              {filteredDates.map((date, index) => (
                <motion.div
                  key={date.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${
                    date.priority === "high" ? "bg-red-500" :
                    date.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                  } border-4 ${theme === "dark" ? "border-black" : "border-white"}`} />

                  <div className="ml-16">
                    <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                      theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                    } border`}
                    onClick={() => setSelectedDate(date)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(date.category)}`}>
                              {date.category.charAt(0).toUpperCase() + date.category.slice(1)}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              date.priority === "high" ? "bg-red-500/20 text-red-500" :
                              date.priority === "medium" ? "bg-yellow-500/20 text-yellow-500" :
                              "bg-green-500/20 text-green-500"
                            }`}>
                              {date.priority.toUpperCase()}
                            </span>
                            <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                              {getDaysUntil(date.date)} {getDaysUntil(date.date) !== "Past" && getDaysUntil(date.date) !== "Today" && getDaysUntil(date.date) !== "Tomorrow" ? "away" : ""}
                            </span>
                          </div>

                          <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                            {date.title}
                          </h3>
                          
                          <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                            {date.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-primary-500 mr-2" />
                              <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {formatDateRange(date.date, date.endDate)}
                              </span>
                            </div>
                            
                            {date.location && (
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-primary-500 mr-2" />
                                <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                  {date.location}
                                </span>
                              </div>
                            )}

                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-primary-500 mr-2" />
                              <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {date.targetGrades.join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-3">
                          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                            <Bell className="h-4 w-4 mr-2" />
                            Set Reminder
                          </button>
                          <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}>
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Date Detail Modal */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedDate.title}
              </h3>
              <button
                onClick={() => setSelectedDate(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Event Details
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedDate.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Date</span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {formatDateRange(selectedDate.date, selectedDate.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Priority</span>
                    <span className={`font-medium ${getPriorityColor(selectedDate.priority)}`}>
                      {selectedDate.priority.charAt(0).toUpperCase() + selectedDate.priority.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Target Grades</span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedDate.targetGrades.join(", ")}
                    </span>
                  </div>
                  {selectedDate.location && (
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Location</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedDate.location}
                      </span>
                    </div>
                  )}
                </div>

                {selectedDate.requirements && (
                  <div>
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {selectedDate.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {requirement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Countdown
                  </h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-500 mb-2">
                      {getDaysUntil(selectedDate.date)}
                    </div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {getDaysUntil(selectedDate.date) === "Past" ? "This event has passed" :
                       getDaysUntil(selectedDate.date) === "Today" ? "Event is today!" :
                       getDaysUntil(selectedDate.date) === "Tomorrow" ? "Event is tomorrow" :
                       "until this event"}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Set Reminder
                  </button>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                    <Plus className="h-5 w-5 mr-2" />
                    Add to Calendar
                  </button>
                </div>

                {!reminderSet ? (
                  <form onSubmit={handleReminderSubmit} className="space-y-3">
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Email Reminders
                    </h4>
                    <input
                      type="email"
                      value={reminderEmail}
                      onChange={(e) => setReminderEmail(e.target.value)}
                      placeholder="Enter email for reminders"
                      className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      Subscribe to Reminders
                    </button>
                  </form>
                ) : (
                  <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border text-center`}>
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      Reminder set! You'll receive email notifications.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Download Calendar */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${theme === "dark" ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20" : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"}`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Never Miss a Deadline
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Download our complete admissions calendar or subscribe to email reminders to stay on track with all important dates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Calendar
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}>
                  <Bell className="mr-2 h-5 w-5" />
                  Subscribe to Alerts
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default ImportantDatesPage;