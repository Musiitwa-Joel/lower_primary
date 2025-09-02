import React, { useState } from 'react';
import { Download, BookOpen, Eye, Share2, FileText, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface DigitalProspectusProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const DigitalProspectus: React.FC<DigitalProspectusProps> = ({ schoolConfig, theme }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<'flipbook' | 'pdf'>('flipbook');

  const prospectusPages = [
    {
      title: "Welcome to Excellence",
      content: "Discover our commitment to academic excellence and holistic development",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
      type: "cover"
    },
    {
      title: "Our Academic Programs",
      content: "Comprehensive curriculum designed for 21st-century learners",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      type: "academics"
    },
    {
      title: "Campus Facilities",
      content: "State-of-the-art facilities supporting learning and growth",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      type: "facilities"
    },
    {
      title: "Student Life",
      content: "Vibrant community fostering personal and social development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      type: "student-life"
    },
    {
      title: "Admissions Information",
      content: "Your pathway to joining our academic community",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      type: "admissions"
    }
  ];

  const handleDownloadPDF = () => {
    // In a real implementation, this would trigger PDF download
    const link = document.createElement('a');
    link.href = '/prospectus.pdf';
    link.download = `${schoolConfig.shortName}-Prospectus-2024.pdf`;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${schoolConfig.name} Digital Prospectus`,
          text: `Explore ${schoolConfig.name}'s academic programs and facilities`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className={`p-8 rounded-3xl ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-black/5 border-black/10'
    } backdrop-blur-xl border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Digital Prospectus
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Explore our school in an interactive format
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'flipbook' ? 'pdf' : 'flipbook')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
            title={viewMode === 'flipbook' ? 'Switch to PDF view' : 'Switch to flipbook view'}
          >
            {viewMode === 'flipbook' ? <FileText className="h-5 w-5" /> : <Image className="h-5 w-5" />}
          </button>
          <button
            onClick={handleShare}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
            }`}
            title="Share prospectus"
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors"
            title="Download PDF"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      {viewMode === 'flipbook' ? (
        <div className="space-y-6">
          {/* Flipbook View */}
          <div className="relative">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={prospectusPages[currentPage].image}
                alt={prospectusPages[currentPage].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-bold mb-2">
                  {prospectusPages[currentPage].title}
                </h4>
                <p className="text-white/90 leading-relaxed">
                  {prospectusPages[currentPage].content}
                </p>
              </div>
            </motion.div>

            {/* Page Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-black/10 hover:bg-black/20 text-black'
                }`}
              >
                Previous
              </button>

              <div className="flex items-center space-x-2">
                {prospectusPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index 
                        ? 'bg-primary-500 w-8' 
                        : theme === 'dark'
                        ? 'bg-white/30 hover:bg-white/50'
                        : 'bg-black/30 hover:bg-black/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(prospectusPages.length - 1, currentPage + 1))}
                disabled={currentPage === prospectusPages.length - 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === prospectusPages.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-black/10 hover:bg-black/20 text-black'
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Page Thumbnails */}
          <div className="grid grid-cols-5 gap-3">
            {prospectusPages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  currentPage === index 
                    ? 'ring-2 ring-primary-500 scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="text-white text-xs font-medium truncate">
                    {page.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* PDF Viewer */
        <div className="space-y-4">
          <div className={`p-8 rounded-2xl border-2 border-dashed ${
            theme === 'dark' ? 'border-white/20' : 'border-black/20'
          } text-center`}>
            <FileText className={`h-16 w-16 mx-auto mb-4 ${
              theme === 'dark' ? 'text-white/50' : 'text-black/50'
            }`} />
            <h4 className={`text-xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              PDF Prospectus
            </h4>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Download our comprehensive school prospectus as a PDF document
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadPDF}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF (2.5 MB)
              </button>
              <button
                onClick={() => window.open('/prospectus.pdf', '_blank')}
                className={`${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
                } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}
              >
                <Eye className="h-5 w-5 mr-2" />
                Preview Online
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleDownloadPDF}
            className={`p-4 rounded-lg transition-colors text-center ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            <Download className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Download PDF
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Complete prospectus
            </div>
          </button>

          <button
            onClick={handleShare}
            className={`p-4 rounded-lg transition-colors text-center ${
              theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            <Share2 className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Share
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              With friends & family
            </div>
          </button>

          <button className={`p-4 rounded-lg transition-colors text-center ${
            theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
          }`}>
            <BookOpen className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Request Print
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Physical copy
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalProspectus;