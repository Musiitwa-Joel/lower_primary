import React, { useState } from 'react';
import { CreditCard, Smartphone, DollarSign, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentSchoolConfig } from '../../config/schoolConfig';

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  processingFee: number;
  available: boolean;
}

interface FeePaymentGatewayProps {
  theme: string;
}

const FeePaymentGateway: React.FC<FeePaymentGatewayProps> = ({ theme }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [paymentForm, setPaymentForm] = useState({
    studentId: '',
    amount: '',
    feeType: '',
    term: '',
    year: '2024'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'mtn',
      name: 'MTN Mobile Money',
      icon: <Smartphone className="h-6 w-6 text-yellow-500" />,
      description: 'Pay using MTN Mobile Money - Most popular in Uganda',
      processingFee: 1.5,
      available: true
    },
    {
      id: 'airtel',
      name: 'Airtel Money',
      icon: <Smartphone className="h-6 w-6 text-red-500" />,
      description: 'Pay using Airtel Money - Fast and secure',
      processingFee: 1.5,
      available: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      description: 'Pay using Visa, Mastercard, or local bank cards',
      processingFee: 2.5,
      available: true
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      description: 'Direct bank transfer - No processing fees',
      processingFee: 0,
      available: true
    }
  ];

  const feeTypes = [
    { id: 'tuition', name: 'Tuition Fees', amount: 1200000 },
    { id: 'registration', name: 'Registration Fee', amount: 50000 },
    { id: 'uniform', name: 'Uniform Fee', amount: 150000 },
    { id: 'books', name: 'Books & Materials', amount: 200000 },
    { id: 'transport', name: 'Transport Fee', amount: 300000 },
    { id: 'meals', name: 'Meals Fee', amount: 400000 },
    { id: 'activities', name: 'Activities Fee', amount: 100000 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
    }, 3000);
  };

  const calculateTotal = () => {
    const selectedFee = feeTypes.find(fee => fee.id === paymentForm.feeType);
    if (!selectedFee) return 0;
    
    const baseAmount = selectedFee.amount;
    const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedMethod);
    const processingFee = selectedPaymentMethod ? (baseAmount * selectedPaymentMethod.processingFee / 100) : 0;
    
    return baseAmount + processingFee;
  };

  if (paymentComplete) {
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
              Payment Successful!
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Your fee payment has been processed successfully.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
          } text-left max-w-md mx-auto`}>
            <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Payment Receipt
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Transaction ID:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-mono`}>
                  TXN{Date.now().toString().slice(-8)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Amount:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  UGX {calculateTotal().toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Method:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {paymentMethods.find(m => m.id === selectedMethod)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Date:</span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Download Receipt
            </button>
            <button
              onClick={() => {
                setPaymentComplete(false);
                setPaymentForm({
                  studentId: '',
                  amount: '',
                  feeType: '',
                  term: '',
                  year: '2024'
                });
                setSelectedMethod('');
              }}
              className={`${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
              } px-6 py-3 rounded-lg transition-colors font-medium`}
            >
              Make Another Payment
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
        <CreditCard className="h-8 w-8 text-primary-500 mr-3" />
        <div>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Fee Payment Gateway
          </h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Pay your school fees securely online
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-black/70'
              }`}>
                Student ID *
              </label>
              <input
                type="text"
                value={paymentForm.studentId}
                onChange={(e) => handleInputChange('studentId', e.target.value)}
                placeholder="Enter student ID"
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-black/70'
              }`}>
                Academic Term *
              </label>
              <select
                value={paymentForm.term}
                onChange={(e) => handleInputChange('term', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white' 
                    : 'bg-black/5 border-black/20 text-black'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="">Select Term</option>
                <option value="term1">Term 1</option>
                <option value="term2">Term 2</option>
                <option value="term3">Term 3</option>
              </select>
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Fee Type *
            </label>
            <select
              value={paymentForm.feeType}
              onChange={(e) => handleInputChange('feeType', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20 text-white' 
                  : 'bg-black/5 border-black/20 text-black'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              <option value="">Select Fee Type</option>
              {feeTypes.map((fee) => (
                <option key={fee.id} value={fee.id}>
                  {fee.name} - UGX {fee.amount.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className={`block text-sm font-medium mb-4 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Payment Method *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  disabled={!method.available}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedMethod === method.id
                      ? 'bg-primary-500 text-white border-primary-500'
                      : method.available
                      ? theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                        : 'bg-black/5 hover:bg-black/10 border-black/20 text-black'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {method.icon}
                    <span className="ml-3 font-medium">{method.name}</span>
                  </div>
                  <p className={`text-sm ${
                    selectedMethod === method.id 
                      ? 'text-white/80' 
                      : theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>
                    {method.description}
                  </p>
                  <div className={`text-xs mt-2 ${
                    selectedMethod === method.id 
                      ? 'text-white/70' 
                      : theme === 'dark' ? 'text-white/50' : 'text-black/50'
                  }`}>
                    Processing fee: {method.processingFee}%
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          {paymentForm.feeType && (
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-primary-500/10 border-primary-500/20' : 'bg-primary-500/10 border-primary-500/20'
            } border`}>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Payment Summary
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Fee Type
                  </span>
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {feeTypes.find(f => f.id === paymentForm.feeType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                    Base Amount
                  </span>
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    UGX {(feeTypes.find(f => f.id === paymentForm.feeType)?.amount || 0).toLocaleString()}
                  </span>
                </div>
                {selectedMethod && (
                  <>
                    <div className="flex justify-between">
                      <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                        Processing Fee
                      </span>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        UGX {Math.round((feeTypes.find(f => f.id === paymentForm.feeType)?.amount || 0) * (paymentMethods.find(m => m.id === selectedMethod)?.processingFee || 0) / 100).toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          Total Amount
                        </span>
                        <span className="text-primary-500 text-lg">
                          UGX {calculateTotal().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Payment Processing */}
        <div className="space-y-6">
          {/* Security Notice */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-green-500/10 border-green-500/20' : 'bg-green-500/10 border-green-500/20'
          } border`}>
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-green-500 mr-3" />
              <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Secure Payment
              </h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  256-bit SSL encryption
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  PCI DSS compliant
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                  Instant confirmation
                </span>
              </li>
            </ul>
          </div>

          {/* Payment Instructions */}
          {selectedMethod && (
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Payment Instructions
              </h4>
              {selectedMethod === 'mtn' && (
                <div className="space-y-2 text-sm">
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    1. Dial *165# on your MTN line
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    2. Select "Pay Bills"
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    3. Enter merchant code: 123456
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    4. Enter amount and confirm
                  </p>
                </div>
              )}
              {selectedMethod === 'airtel' && (
                <div className="space-y-2 text-sm">
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    1. Dial *185# on your Airtel line
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    2. Select "Pay Bill"
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    3. Enter business number: 654321
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    4. Enter amount and PIN
                  </p>
                </div>
              )}
              {selectedMethod === 'bank' && (
                <div className="space-y-2 text-sm">
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    Bank: Stanbic Bank Uganda
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    Account: 9030012345678
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    Account Name: {schoolConfig.name}
                  </p>
                  <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    Reference: Student ID + Fee Type
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Process Payment Button */}
          <button
            onClick={handlePayment}
            disabled={!paymentForm.studentId || !paymentForm.feeType || !selectedMethod || isProcessing}
            className={`w-full flex items-center justify-center px-6 py-4 rounded-lg transition-colors font-medium ${
              paymentForm.studentId && paymentForm.feeType && selectedMethod && !isProcessing
                ? 'bg-primary-500 hover:bg-primary-600 text-white'
                : theme === 'dark'
                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                : 'bg-black/10 text-black/50 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5 mr-2" />
                Pay UGX {calculateTotal().toLocaleString()}
              </>
            )}
          </button>

          {/* Help & Support */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/10 border-blue-500/20'
          } border`}>
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Need Help?
              </span>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
              Contact our accounts office at {schoolConfig.phone.primary} or email accounts@{schoolConfig.email.primary.split('@')[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeePaymentGateway;