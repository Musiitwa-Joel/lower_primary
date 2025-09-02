import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  studentName: string;
  studentGrade: string;
  content: string;
  rating: number;
  image: string;
  videoUrl?: string;
  location: string;
}

interface ParentTestimonialsProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const ParentTestimonials: React.FC<ParentTestimonialsProps> = ({ schoolConfig, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Mrs. Grace Nakato',
      role: 'Parent',
      studentName: 'Sarah Nakato',
      studentGrade: 'S4',
      content: `${schoolConfig.name} has exceeded our expectations in every way. The teachers are dedicated, the facilities are excellent, and most importantly, my daughter Sarah has grown both academically and personally. The school's commitment to holistic education is evident in everything they do.`,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/testimonial-1.mp4',
      location: 'Kampala'
    },
    {
      id: '2',
      name: 'Mr. David Mukasa',
      role: 'Parent & Alumni',
      studentName: 'James Mukasa',
      studentGrade: 'S6',
      content: `As an alumnus myself, I'm proud to see how ${schoolConfig.shortName} has evolved while maintaining its core values. The integration of technology in learning and the focus on character development makes this school truly special. My son James is thriving here.`,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      location: 'Entebbe'
    },
    {
      id: '3',
      name: 'Dr. Mary Namuli',
      role: 'Parent & Medical Professional',
      studentName: 'Peter Namuli',
      studentGrade: 'S2',
      content: `The health and safety measures at ${schoolConfig.name} are outstanding. As a medical professional, I appreciate their attention to student welfare. The counseling services and mental health support have been particularly beneficial for my son Peter.`,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      videoUrl: 'https://example.com/testimonial-3.mp4',
      location: 'Jinja'
    },
    {
      id: '4',
      name: 'Mr. John Okello',
      role: 'Parent & Engineer',
      studentName: 'Grace Okello',
      studentGrade: 'S5',
      content: `The STEM programs at ${schoolConfig.shortName} are exceptional. My daughter Grace has developed a passion for engineering through the school's innovative approach to science and mathematics. The teachers truly inspire students to excel.`,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      location: 'Mukono'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Quote className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Parent Testimonials
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Real stories from satisfied parents
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={prevTestimonial}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Testimonial Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < currentTestimonial.rating 
                      ? 'text-yellow-400 fill-current' 
                      : theme === 'dark' ? 'text-white/20' : 'text-black/20'
                  }`}
                />
              ))}
              <span className={`ml-3 text-sm ${
                theme === 'dark' ? 'text-white/70' : 'text-black/70'
              }`}>
                {currentTestimonial.rating}/5 stars
              </span>
            </div>

            <blockquote className={`text-lg leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-white/90' : 'text-black/90'
            }`}>
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {currentTestimonial.name}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                  {currentTestimonial.role} • Parent of {currentTestimonial.studentName} ({currentTestimonial.studentGrade})
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                  {currentTestimonial.location}
                </div>
              </div>

              {currentTestimonial.videoUrl && (
                <button
                  onClick={() => setPlayingVideo(currentTestimonial.id)}
                  className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-colors"
                >
                  <Play className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Parent Image */}
          <div className="relative">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-64 lg:h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white">
                <div className="font-semibold">{currentTestimonial.name}</div>
                <div className="text-sm opacity-90">{currentTestimonial.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Testimonial Navigation */}
      <div className="flex items-center justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-primary-500 w-8' 
                : theme === 'dark'
                ? 'bg-white/30 hover:bg-white/50'
                : 'bg-black/30 hover:bg-black/50'
            }`}
          />
        ))}
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={testimonials.find(t => t.id === playingVideo)?.videoUrl}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
          Want to share your experience with {schoolConfig.shortName}?
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors font-medium">
          Submit Your Testimonial
        </button>
      </div>
    </div>
  );
};

export default ParentTestimonials;