import React, { useState } from 'react';
import { Play, Award, BookOpen, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Teacher {
  id: string;
  name: string;
  title: string;
  subjects: string[];
  qualifications: string[];
  experience: number;
  philosophy: string;
  achievements: string[];
  image: string;
  videoIntro?: string;
  rating: number;
  reviews: number;
}

interface TeacherShowcaseProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const TeacherShowcase: React.FC<TeacherShowcaseProps> = ({ schoolConfig, theme }) => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Sample teacher data - in real implementation, this would come from API/CMS
  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'Dr. Sarah Nakato',
      title: 'Head of Mathematics Department',
      subjects: ['Mathematics', 'Further Mathematics', 'Statistics'],
      qualifications: ['PhD Mathematics - Makerere University', 'MSc Applied Mathematics - Cambridge'],
      experience: 12,
      philosophy: 'I believe mathematics is the language of the universe. My approach focuses on making complex concepts accessible through real-world applications and interactive learning.',
      achievements: [
        'Best Teacher Award 2023',
        'Published 15 research papers',
        'Led students to 3 national mathematics competitions victories'
      ],
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80',
      videoIntro: 'https://example.com/teacher-intro-1.mp4',
      rating: 4.9,
      reviews: 127
    },
    {
      id: '2',
      name: 'Mr. David Mukasa',
      title: 'Senior Physics Teacher',
      subjects: ['Physics', 'Applied Physics', 'Engineering Science'],
      qualifications: ['MSc Physics - University of Edinburgh', 'BSc Physics - Makerere University'],
      experience: 8,
      philosophy: 'Physics is about understanding how the world works. I use hands-on experiments and real-world examples to bring abstract concepts to life.',
      achievements: [
        'Innovation in Teaching Award 2022',
        'Developed 5 new laboratory experiments',
        'Mentored 50+ students into engineering programs'
      ],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      videoIntro: 'https://example.com/teacher-intro-2.mp4',
      rating: 4.8,
      reviews: 98
    },
    {
      id: '3',
      name: 'Ms. Grace Namuli',
      title: 'English Literature Coordinator',
      subjects: ['English Literature', 'Creative Writing', 'Communication Skills'],
      qualifications: ['MA English Literature - Oxford University', 'BA Literature - Makerere University'],
      experience: 10,
      philosophy: 'Literature opens minds and hearts. I help students discover the power of storytelling and develop their own unique voices.',
      achievements: [
        'Published novelist - 3 books',
        'Literary Excellence Award 2023',
        'Coached students to win national essay competitions'
      ],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      videoIntro: 'https://example.com/teacher-intro-3.mp4',
      rating: 4.9,
      reviews: 156
    },
    {
      id: '4',
      name: 'Mr. James Okello',
      title: 'Computer Science Department Head',
      subjects: ['Computer Science', 'Programming', 'Digital Literacy'],
      qualifications: ['MSc Computer Science - MIT', 'BSc Computer Science - Makerere University'],
      experience: 15,
      philosophy: 'Technology is the future, and I prepare students to be creators, not just consumers. We focus on problem-solving and innovation.',
      achievements: [
        'Led school to win National Coding Competition',
        'Developed school\'s coding curriculum',
        'Trained 200+ students in programming'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      videoIntro: 'https://example.com/teacher-intro-4.mp4',
      rating: 4.8,
      reviews: 143
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
      <div className="flex items-center mb-8">
        <Award className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Meet Our Teachers
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Experienced educators dedicated to student success
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {teachers.map((teacher) => (
          <motion.div
            key={teacher.id}
            variants={itemVariants}
            className={`p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border transition-all duration-300 hover:scale-105 cursor-pointer`}
            onClick={() => setSelectedTeacher(teacher)}
          >
            <div className="relative mb-4">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              {teacher.videoIntro && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlayingVideo(teacher.id);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
                >
                  <Play className="h-12 w-12 text-white" />
                </button>
              )}
            </div>

            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-1`}>
              {teacher.name}
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-3`}>
              {teacher.title}
            </p>

            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(teacher.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className={`ml-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                ({teacher.reviews})
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {teacher.subjects.slice(0, 2).map((subject, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                  >
                    {subject}
                  </span>
                ))}
                {teacher.subjects.length > 2 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                    +{teacher.subjects.length - 2}
                  </span>
                )}
              </div>
              
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                {teacher.experience} years experience
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTeacher(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                {selectedTeacher.videoIntro && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Video Introduction
                    </h4>
                    <div className="relative rounded-xl overflow-hidden">
                      <video
                        src={selectedTeacher.videoIntro}
                        controls
                        className="w-full h-48 object-cover"
                        poster={selectedTeacher.image}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
                  {selectedTeacher.name}
                </h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-6`}>
                  {selectedTeacher.title}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Teaching Philosophy
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
                      {selectedTeacher.philosophy}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Subjects Taught
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.subjects.map((subject, index) => (
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
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedTeacher.qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpen className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-sm`}>
                            {qualification}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-3`}>
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedTeacher.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-sm`}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(selectedTeacher.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`ml-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        {selectedTeacher.rating} ({selectedTeacher.reviews} reviews)
                      </span>
                    </div>
                    
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">50+</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Qualified Teachers
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">15:1</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Student-Teacher Ratio
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">95%</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Have Advanced Degrees
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">4.8</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Average Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherShowcase;