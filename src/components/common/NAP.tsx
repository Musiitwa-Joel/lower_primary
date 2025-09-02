import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SchoolConfig } from '../../config/schoolConfig';

interface NAPProps {
  schoolConfig: SchoolConfig;
  variant?: 'full' | 'compact' | 'minimal';
  theme: string;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({ 
  schoolConfig, 
  variant = 'full', 
  theme,
  className = '' 
}) => {
  const baseClasses = `${theme === 'dark' ? 'text-white' : 'text-black'} ${className}`;
  
  if (variant === 'minimal') {
    return (
      <div className={`${baseClasses} space-y-2`}>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2 text-primary-500" />
          <a 
            href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
            className="hover:text-primary-500 transition-colors"
          >
            {schoolConfig.phone.primary}
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-primary-500" />
          <a 
            href={`mailto:${schoolConfig.email.primary}`}
            className="hover:text-primary-500 transition-colors"
          >
            {schoolConfig.email.primary}
          </a>
        </div>
        <div className="flex items-start">
          <MapPin className="h-4 w-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm">
            {schoolConfig.address.street}, {schoolConfig.address.city}
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${baseClasses} grid grid-cols-1 md:grid-cols-3 gap-4`}>
        <div className="flex items-center">
          <Phone className="h-5 w-5 mr-3 text-primary-500" />
          <div>
            <div className="font-medium">Call Us</div>
            <a 
              href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
              className="text-sm hover:text-primary-500 transition-colors"
            >
              {schoolConfig.phone.primary}
            </a>
          </div>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-3 text-primary-500" />
          <div>
            <div className="font-medium">Email Us</div>
            <a 
              href={`mailto:${schoolConfig.email.primary}`}
              className="text-sm hover:text-primary-500 transition-colors"
            >
              {schoolConfig.email.primary}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium">Visit Us</div>
            <span className="text-sm">
              {schoolConfig.address.street}, {schoolConfig.address.city}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`${baseClasses} space-y-6`}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-primary-500" />
            <div>
              <div className="font-medium">Primary Phone</div>
              <a 
                href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
                className="hover:text-primary-500 transition-colors"
              >
                {schoolConfig.phone.primary}
              </a>
            </div>
          </div>
          
          {schoolConfig.phone.secondary && (
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary-500" />
              <div>
                <div className="font-medium">Secondary Phone</div>
                <a 
                  href={`tel:${schoolConfig.phone.secondary.replace(/\D/g, '')}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {schoolConfig.phone.secondary}
                </a>
              </div>
            </div>
          )}
          
          {schoolConfig.phone.whatsapp && (
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary-500" />
              <div>
                <div className="font-medium">WhatsApp</div>
                <a 
                  href={`https://wa.me/${schoolConfig.phone.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  {schoolConfig.phone.whatsapp}
                </a>
              </div>
            </div>
          )}
          
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-primary-500" />
            <div>
              <div className="font-medium">General Inquiries</div>
              <a 
                href={`mailto:${schoolConfig.email.primary}`}
                className="hover:text-primary-500 transition-colors"
              >
                {schoolConfig.email.primary}
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-primary-500" />
            <div>
              <div className="font-medium">Admissions</div>
              <a 
                href={`mailto:${schoolConfig.email.admissions}`}
                className="hover:text-primary-500 transition-colors"
              >
                {schoolConfig.email.admissions}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Location</h3>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium">Address</div>
            <address className="not-italic">
              {schoolConfig.address.street}<br />
              {schoolConfig.address.city}, {schoolConfig.address.state}<br />
              {schoolConfig.address.postalCode}<br />
              {schoolConfig.address.country}
            </address>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
        <div className="space-y-2">
          {Object.entries(schoolConfig.hours).map(([day, hours]) => (
            hours && (
              <div key={day} className="flex items-center justify-between">
                <span className="capitalize font-medium">{day}</span>
                <span>{hours}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default NAP;