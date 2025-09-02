import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, User, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface PrincipalMessageProps {
  theme: string;
}

const PrincipalMessage: React.FC<PrincipalMessageProps> = ({ theme }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const principalData = {
    name: 'Dr. Margaret Ssebunya',
    title: 'Principal',
    qualifications: 'PhD Education Leadership, MEd Curriculum Development',
    experience: '15 years in educational leadership',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/principal-message.mp4',
    message: {
      short: `Welcome to ${schoolConfig.name}! As Principal, I am proud to lead an institution that has been shaping young minds and building character since ${schoolConfig.established}. Our commitment to academic excellence, moral values, and holistic development ensures that every student who walks through our doors is prepared for success in life.`,
      full: `Dear Parents, Students, and Visitors,

Welcome to ${schoolConfig.name}, where excellence meets opportunity and dreams take flight. As the Principal of this esteemed institution, I am honored to share our vision and commitment to transforming education in ${schoolConfig.address.city} and beyond.

Since our establishment in ${schoolConfig.established}, we have been dedicated to providing world-class education that combines academic rigor with character development. Our mission is not just to impart knowledge, but to nurture confident, compassionate, and capable individuals who will become tomorrow's leaders.

At ${schoolConfig.shortName}, we believe that every child is unique and possesses unlimited potential. Our experienced faculty, state-of-the-art facilities, and innovative teaching methodologies create an environment where students can explore, discover, and excel in their chosen fields.

We are proud of our achievements - from our outstanding academic results to our students' success in various competitions and their admission to prestigious universities. But more importantly, we are proud of the values we instill and the character we help build.

Our commitment extends beyond the classroom. We actively engage with the ${schoolConfig.address.city} community, participate in social initiatives, and ensure that our students understand their responsibility as global citizens.

I invite you to explore our website, visit our campus, and experience firsthand the warmth, excellence, and innovation that define ${schoolConfig.name}. Together, let us continue to build a brighter future for our children and our community.

With warm regards,
Dr. Margaret Ssebunya
Principal, ${schoolConfig.name}`
    }
  };

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
            Principal's Message
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            A message from our school leadership
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Section */}
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={principalData.image}
              alt={principalData.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-black" />
                ) : (
                  <Play className="h-8 w-8 text-black ml-1" />
                )}
              </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Principal Info */}
          <div className={`p-4 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          }`}>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
              {principalData.name}
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-2`}>
              {principalData.title}
            </p>
            <div className="space-y-1">
              <div className="flex items-center">
                <Award className="h-4 w-4 text-primary-500 mr-2" />
                <span className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {principalData.qualifications}
                </span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 text-primary-500 mr-2" />
                <span className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {principalData.experience}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-6">
          <div>
            <h4 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
              Welcome Message
            </h4>
            
            <div className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} leading-relaxed`}>
              {showFullMessage ? (
                <div className="space-y-4">
                  {principalData.message.full.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p>{principalData.message.short}</p>
              )}
            </div>

            <button
              onClick={() => setShowFullMessage(!showFullMessage)}
              className="mt-4 text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
            >
              {showFullMessage ? 'Read Less' : 'Read Full Message'}
            </button>
          </div>

          {/* Key Highlights */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
          } border`}>
            <h5 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Our Commitment
            </h5>
            <div className="space-y-3">
              {[
                'Academic Excellence & Character Development',
                'Innovative Teaching & Learning Methods',
                'Strong Community Partnerships',
                'Holistic Student Development',
                'Preparing Global Citizens'
              ].map((commitment, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    {commitment}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Principal */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium text-sm">
              Schedule Meeting
            </button>
            <button className={`flex-1 ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
            } px-4 py-3 rounded-lg transition-colors font-medium text-sm`}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;