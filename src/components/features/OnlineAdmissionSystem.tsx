import React, { useState } from 'react';
import { UserPlus, Upload, CheckCircle, AlertCircle, FileText, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface ApplicationData {
  studentInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    religion: string;
  };
  parentInfo: {
    fatherName: string;
    motherName: string;
    guardianName: string;
    email: string;
    phone: string;
    address: string;
  };
  academicInfo: {
    previousSchool: string;
    gradeApplying: string;
    previousGrade: string;
    subjects: string[];
  };
  documents: {
    birthCertificate: File | null;
    academicRecords: File | null;
    passportPhoto: File | null;
    medicalCertificate: File | null;
  };
}

interface OnlineAdmissionSystemProps {
  theme: string;
}

const OnlineAdmissionSystem: React.FC<OnlineAdmissionSystemProps> = ({ theme }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    studentInfo: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      nationality: 'Ugandan',
      religion: ''
    },
    parentInfo: {
      fatherName: '',
      motherName: '',
      guardianName: '',
      email: '',
      phone: '',
      address: ''
    },
    academicInfo: {
      previousSchool: '',
      gradeApplying: '',
      previousGrade: '',
      subjects: []
    },
    documents: {
      birthCertificate: null,
      academicRecords: null,
      passportPhoto: null,
      medicalCertificate: null
    }
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  
  const schoolConfig = getCurrentSchoolConfig();

  const steps = [
    { id: 1, title: 'Student Information', icon: <UserPlus className="h-5 w-5" /> },
    { id: 2, title: 'Parent/Guardian Details', icon: <Users className="h-5 w-5" /> },
    { id: 3, title: 'Academic Information', icon: <BookOpen className="h-5 w-5" /> },
    { id: 4, title: 'Document Upload', icon: <Upload className="h-5 w-5" /> },
    { id: 5, title: 'Review & Submit', icon: <CheckCircle className="h-5 w-5" /> }
  ];

  const handleInputChange = (section: keyof ApplicationData, field: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field: keyof ApplicationData['documents'], file: File) => {
    setApplicationData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const handleSubmit = () => {
    // Generate application ID
    const id = `APP${Date.now().toString().slice(-6)}`;
    setApplicationId(id);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
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
              Application Submitted Successfully!
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} mb-4`}>
              Thank you for applying to {schoolConfig.name}. Your application has been received.
            </p>
            <div className={`inline-block px-4 py-2 rounded-lg ${
              theme === 'dark' ? 'bg-primary-500/20' : 'bg-primary-500/20'
            }`}>
              <span className="text-primary-500 font-semibold">
                Application ID: {applicationId}
              </span>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          } text-left max-w-md mx-auto`}>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              What's Next?
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Application Review
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Our admissions team will review your application within 3-5 business days
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Interview Invitation
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    If shortlisted, you'll receive an interview invitation via email
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Admission Decision
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Final admission decision will be communicated within 2 weeks
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setApplicationData({
                  studentInfo: { firstName: '', lastName: '', dateOfBirth: '', gender: '', nationality: 'Ugandan', religion: '' },
                  parentInfo: { fatherName: '', motherName: '', guardianName: '', email: '', phone: '', address: '' },
                  academicInfo: { previousSchool: '', gradeApplying: '', previousGrade: '', subjects: [] },
                  documents: { birthCertificate: null, academicRecords: null, passportPhoto: null, medicalCertificate: null }
                });
              }}
              className={`${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
              } px-6 py-3 rounded-lg transition-colors font-medium`}
            >
              Submit Another Application
            </button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Track Application Status
            </button>
          </div>
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
      <div className="flex items-center mb-6">
        <UserPlus className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Online Admission System
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Apply for admission to {schoolConfig.name}
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= step.id 
                ? 'bg-primary-500 text-white' 
                : theme === 'dark'
                ? 'bg-white/10 text-white'
                : 'bg-black/10 text-black'
            } transition-colors`}>
              {currentStep > step.id ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                step.icon
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-2 ${
                currentStep > step.id 
                  ? 'bg-primary-500' 
                  : theme === 'dark'
                  ? 'bg-white/20'
                  : 'bg-black/20'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {currentStep === 1 && (
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Student Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                value={applicationData.studentInfo.firstName}
                onChange={(e) => handleInputChange('studentInfo', 'firstName', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <input
                type="text"
                placeholder="Last Name *"
                value={applicationData.studentInfo.lastName}
                onChange={(e) => handleInputChange('studentInfo', 'lastName', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <input
                type="date"
                placeholder="Date of Birth *"
                value={applicationData.studentInfo.dateOfBirth}
                onChange={(e) => handleInputChange('studentInfo', 'dateOfBirth', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white' 
                    : 'bg-black/5 border-black/20 text-black'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <select
                value={applicationData.studentInfo.gender}
                onChange={(e) => handleInputChange('studentInfo', 'gender', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white' 
                    : 'bg-black/5 border-black/20 text-black'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="">Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Parent/Guardian Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Father's Name"
                value={applicationData.parentInfo.fatherName}
                onChange={(e) => handleInputChange('parentInfo', 'fatherName', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <input
                type="text"
                placeholder="Mother's Name"
                value={applicationData.parentInfo.motherName}
                onChange={(e) => handleInputChange('parentInfo', 'motherName', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={applicationData.parentInfo.email}
                onChange={(e) => handleInputChange('parentInfo', 'email', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={applicationData.parentInfo.phone}
                onChange={(e) => handleInputChange('parentInfo', 'phone', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>
            <textarea
              placeholder="Home Address *"
              value={applicationData.parentInfo.address}
              onChange={(e) => handleInputChange('parentInfo', 'address', e.target.value)}
              rows={3}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                  : 'bg-black/5 border-black/20 text-black placeholder-black/50'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Academic Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Previous School *"
                value={applicationData.academicInfo.previousSchool}
                onChange={(e) => handleInputChange('academicInfo', 'previousSchool', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <select
                value={applicationData.academicInfo.gradeApplying}
                onChange={(e) => handleInputChange('academicInfo', 'gradeApplying', e.target.value)}
                className={`px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white' 
                    : 'bg-black/5 border-black/20 text-black'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="">Grade Applying For *</option>
                {schoolConfig.grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Document Upload
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: 'birthCertificate', label: 'Birth Certificate', required: true },
                { key: 'academicRecords', label: 'Academic Records', required: true },
                { key: 'passportPhoto', label: 'Passport Photo', required: true },
                { key: 'medicalCertificate', label: 'Medical Certificate', required: false }
              ].map((doc) => (
                <div key={doc.key} className={`p-6 rounded-xl border-2 border-dashed ${
                  theme === 'dark' ? 'border-white/20' : 'border-black/20'
                } text-center`}>
                  <FileText className={`h-8 w-8 mx-auto mb-3 ${
                    theme === 'dark' ? 'text-white/50' : 'text-black/50'
                  }`} />
                  <h5 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {doc.label} {doc.required && '*'}
                  </h5>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileUpload(doc.key as keyof ApplicationData['documents'], file);
                      }
                    }}
                    className="hidden"
                    id={doc.key}
                  />
                  <label
                    htmlFor={doc.key}
                    className="cursor-pointer bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium inline-block"
                  >
                    Choose File
                  </label>
                  {applicationData.documents[doc.key as keyof ApplicationData['documents']] && (
                    <div className="mt-2 text-sm text-green-500">
                      ✓ File uploaded
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Review Your Application
            </h4>
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className="space-y-4">
                <div>
                  <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Student: {applicationData.studentInfo.firstName} {applicationData.studentInfo.lastName}
                  </h5>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Applying for: {applicationData.academicInfo.gradeApplying}
                  </p>
                </div>
                <div>
                  <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Contact: {applicationData.parentInfo.email}
                  </h5>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Phone: {applicationData.parentInfo.phone}
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/10 border-blue-500/20'
            } border flex items-start`}>
              <AlertCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  Please review all information carefully before submitting. Once submitted, you cannot edit your application.
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg transition-colors ${
            currentStep === 1
              ? 'opacity-50 cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white'
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
        >
          Previous
        </button>

        {currentStep === steps.length ? (
          <button
            onClick={handleSubmit}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Submit Application
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default OnlineAdmissionSystem;