import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  teacher?: string;
  subject?: string;
}

interface ParentMeetingBookingProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const ParentMeetingBooking: React.FC<ParentMeetingBookingProps> = ({ schoolConfig, theme }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [bookingForm, setBookingForm] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    purpose: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const teachers = [
    { id: '1', name: 'Dr. Sarah Nakato', subject: 'Mathematics', available: true },
    { id: '2', name: 'Mr. David Mukasa', subject: 'Physics', available: true },
    { id: '3', name: 'Ms. Grace Namuli', subject: 'English', available: false },
    { id: '4', name: 'Mr. James Okello', subject: 'Computer Science', available: true },
    { id: '5', name: 'Mrs. Mary Namusoke', subject: 'Biology', available: true }
  ];

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true, teacher: 'Dr. Sarah Nakato', subject: 'Mathematics' },
    { id: '2', time: '10:00 AM', available: false, teacher: 'Mr. David Mukasa', subject: 'Physics' },
    { id: '3', time: '11:00 AM', available: true, teacher: 'Ms. Grace Namuli', subject: 'English' },
    { id: '4', time: '2:00 PM', available: true, teacher: 'Mr. James Okello', subject: 'Computer Science' },
    { id: '5', time: '3:00 PM', available: true, teacher: 'Mrs. Mary Namusoke', subject: 'Biology' },
    { id: '6', time: '4:00 PM', available: false, teacher: 'Dr. Sarah Nakato', subject: 'Mathematics' }
  ];

  const availableTimeSlots = timeSlots.filter(slot => 
    slot.available && (!selectedTeacher || slot.teacher === selectedTeacher)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      setIsBooked(true);
    }, 1000);
  };

  const getNextAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  };

  if (isBooked) {
    return (
      <div className={`p-8 rounded-3xl ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10' 
          : 'bg-black/5 border-black/10'
      } backdrop-blur-xl border text-center`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Meeting Booked Successfully!
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Your parent-teacher meeting has been scheduled. You'll receive a confirmation email shortly.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          } text-left max-w-md mx-auto`}>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Meeting Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Date:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {selectedDate && new Date(selectedDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Time:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {selectedTimeSlot?.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Teacher:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {selectedTimeSlot?.teacher}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setIsBooked(false);
              setSelectedDate('');
              setSelectedTimeSlot(null);
              setBookingForm({
                parentName: '',
                studentName: '',
                email: '',
                phone: '',
                purpose: '',
                notes: ''
              });
            }}
            className={`${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
            } px-6 py-3 rounded-lg transition-colors font-medium`}
          >
            Book Another Meeting
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center mb-8">
        <Calendar className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Parent-Teacher Meeting Booking
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Schedule a meeting with your child's teachers
          </p>
        </div>
      </div>

      <form onSubmit={handleBooking} className="space-y-6">
        {/* Parent Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Parent Name *
            </label>
            <input
              type="text"
              name="parentName"
              value={booking.parentName}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Student Name *
            </label>
            <input
              type="text"
              name="studentName"
              value={bookingForm.studentName}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="Enter student's name"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={bookingForm.email}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={bookingForm.phone}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              placeholder="+256 700 123 456"
            />
          </div>
        </div>

        {/* Teacher Selection */}
        <div>
          <label className={`block text-sm font-medium mb-3 ${
            theme === 'dark' ? 'text-white/70' : 'text-black/70'
          }`}>
            Select Teacher (Optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSelectedTeacher('')}
              className={`p-3 rounded-lg border text-left transition-colors ${
                selectedTeacher === ''
                  ? 'bg-primary-500 text-white border-primary-500'
                  : theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/20 text-black'
              }`}
            >
              <div className="font-medium">Any Available Teacher</div>
              <div className={`text-sm ${selectedTeacher === '' ? 'text-white/80' : theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                First available slot
              </div>
            </button>
            
            {teachers.filter(t => t.available).map((teacher) => (
              <button
                key={teacher.id}
                type="button"
                onClick={() => setSelectedTeacher(teacher.name)}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  selectedTeacher === teacher.name
                    ? 'bg-primary-500 text-white border-primary-500'
                    : theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                    : 'bg-black/5 hover:bg-black/10 border-black/20 text-black'
                }`}
              >
                <div className="font-medium">{teacher.name}</div>
                <div className={`text-sm ${
                  selectedTeacher === teacher.name 
                    ? 'text-white/80' 
                    : theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>
                  {teacher.subject}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className={`block text-sm font-medium mb-3 ${
            theme === 'dark' ? 'text-white/70' : 'text-black/70'
          }`}>
            Select Date *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {getNextAvailableDates().map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-lg border text-center transition-colors ${
                  selectedDate === date
                    ? 'bg-primary-500 text-white border-primary-500'
                    : theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                    : 'bg-black/5 hover:bg-black/10 border-black/20 text-black'
                }`}
              >
                <div className="font-medium">
                  {new Date(date).toLocaleDateString('en-UG', { day: 'numeric' })}
                </div>
                <div className={`text-xs ${
                  selectedDate === date 
                    ? 'text-white/80' 
                    : theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>
                  {new Date(date).toLocaleDateString('en-UG', { weekday: 'short' })}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slot Selection */}
        {selectedDate && (
          <div>
            <label className={`block text-sm font-medium mb-3 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Select Time Slot *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableTimeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    selectedTimeSlot?.id === slot.id
                      ? 'bg-primary-500 text-white border-primary-500'
                      : theme === 'dark'
                      ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                      : 'bg-black/5 hover:bg-black/10 border-black/20 text-black'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{slot.time}</span>
                  </div>
                  {slot.teacher && (
                    <div className={`text-sm ${
                      selectedTimeSlot?.id === slot.id 
                        ? 'text-white/80' 
                        : theme === 'dark' ? 'text-white/60' : 'text-black/60'
                    }`}>
                      {slot.teacher}
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {availableTimeSlots.length === 0 && (
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-red-500/10 border-red-500/20' : 'bg-red-500/10 border-red-500/20'
              } border flex items-center`}>
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  No available time slots for the selected date and teacher. Please choose a different date.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Meeting Purpose */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-white/70' : 'text-black/70'
          }`}>
            Meeting Purpose *
          </label>
          <select
            name="purpose"
            value={bookingForm.purpose}
            onChange={handleInputChange}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/20 text-white' 
                : 'bg-black/5 border-black/20 text-black'
            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
          >
            <option value="" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              Select meeting purpose
            </option>
            <option value="academic-progress" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              Academic Progress Discussion
            </option>
            <option value="behavioral-concerns" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              Behavioral Concerns
            </option>
            <option value="career-guidance" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              Career Guidance
            </option>
            <option value="special-needs" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              Special Educational Needs
            </option>
            <option value="general-consultation" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
              General Consultation
            </option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-white/70' : 'text-black/70'
          }`}>
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={bookingForm.notes}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                : 'bg-black/5 border-black/20 text-black placeholder-black/50'
            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Any specific topics you'd like to discuss..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedDate || !selectedTimeSlot || !bookingForm.parentName || !bookingForm.email}
          className={`w-full flex items-center justify-center px-6 py-4 rounded-lg transition-colors font-medium ${
            selectedDate && selectedTimeSlot && bookingForm.parentName && bookingForm.email
              ? 'bg-primary-500 hover:bg-primary-600 text-white'
              : theme === 'dark'
              ? 'bg-white/10 text-white/50 cursor-not-allowed'
              : 'bg-black/10 text-black/50 cursor-not-allowed'
          }`}
        >
          <Calendar className="h-5 w-5 mr-2" />
          Book Meeting
        </button>
      </form>

      {/* Booking Guidelines */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Booking Guidelines
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Meetings can be booked up to 2 weeks in advance
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Confirmation email will be sent within 24 hours
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Meetings are typically 30 minutes long
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Cancellations must be made 24 hours in advance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentMeetingBooking;