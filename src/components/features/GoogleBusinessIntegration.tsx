import React from 'react';
import { MapPin, Star, Clock, Phone, ExternalLink } from 'lucide-react';
import { SchoolConfig } from '../../config/schoolConfig';

interface GoogleBusinessIntegrationProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const GoogleBusinessIntegration: React.FC<GoogleBusinessIntegrationProps> = ({ 
  schoolConfig, 
  theme 
}) => {
  // Generate Google Business Profile URL
  const generateGoogleBusinessUrl = () => {
    const query = encodeURIComponent(`${schoolConfig.name} ${schoolConfig.address.city} ${schoolConfig.address.country}`);
    return `https://www.google.com/maps/search/${query}`;
  };

  // Generate Google Maps embed URL
  const generateMapsEmbedUrl = () => {
    const { lat, lng } = schoolConfig.address.coordinates;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sen!2sug!4v1640000000000!5m2!1sen!2sug`;
  };

  // Generate review link
  const generateReviewLink = () => {
    return `${generateGoogleBusinessUrl()}/@${schoolConfig.address.coordinates.lat},${schoolConfig.address.coordinates.lng},17z/data=!4m6!3m5!1s0x0:0x0!8m2!3d${schoolConfig.address.coordinates.lat}!4d${schoolConfig.address.coordinates.lng}!16s%2Fg%2F11c0q8q8q8`;
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center mb-6">
        <MapPin className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Find Us on Google
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Visit our Google Business Profile for reviews, photos, and directions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Business Info Card */}
        <div className={`p-6 rounded-2xl ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
        } border`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {schoolConfig.name}
            </h4>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className={`ml-1 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                4.8 (127 reviews)
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  {schoolConfig.address.street}<br />
                  {schoolConfig.address.city}, {schoolConfig.address.state}<br />
                  {schoolConfig.address.country}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-4 w-4 text-primary-500 mr-3" />
              <a 
                href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
                className={`text-sm hover:text-primary-500 transition-colors ${
                  theme === 'dark' ? 'text-white/80' : 'text-black/80'
                }`}
              >
                {schoolConfig.phone.primary}
              </a>
            </div>

            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary-500 mr-3" />
              <div className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                {schoolConfig.hours.monday}
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <a
              href={generateGoogleBusinessUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors text-center text-sm font-medium flex items-center justify-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on Google
            </a>
            <a
              href={generateReviewLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 ${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
              } px-4 py-3 rounded-lg transition-colors text-center text-sm font-medium flex items-center justify-center`}
            >
              <Star className="h-4 w-4 mr-2" />
              Write Review
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={generateMapsEmbedUrl()}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${schoolConfig.name} Location`}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${schoolConfig.address.coordinates.lat},${schoolConfig.address.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border transition-colors text-center`}
          >
            <MapPin className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Get Directions
            </div>
          </a>

          <a
            href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
            className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border transition-colors text-center`}
          >
            <Phone className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Call Now
            </div>
          </a>

          <a
            href={generateReviewLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'
            } border transition-colors text-center`}
          >
            <Star className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Leave Review
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;