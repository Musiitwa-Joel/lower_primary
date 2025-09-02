import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SchoolConfig } from '../../config/schoolConfig';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'card';
}

interface AIChatbotProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ schoolConfig, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! I'm the ${schoolConfig.shortName} virtual assistant. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    'Admission requirements',
    'Fee structure',
    'School facilities',
    'Contact information',
    'Academic programs',
    'Application process'
  ];

  const faqResponses: { [key: string]: string } = {
    'admission requirements': `For admission to ${schoolConfig.name}, students need:\n\n• Completed application form\n• Academic transcripts\n• Birth certificate\n• Passport photos\n• Medical certificate\n• Interview (for some grades)\n\nWould you like me to help you with the application process?`,
    'fee structure': `Our fee structure for ${new Date().getFullYear()}:\n\n• Day students: UGX 800,000 - 1,000,000 per term\n• Boarding students: UGX 1,200,000 - 1,400,000 per term\n• Registration fee: UGX 50,000\n• Additional services available\n\nWould you like to use our tuition calculator?`,
    'school facilities': `${schoolConfig.name} offers excellent facilities:\n\n• Modern classrooms with smart boards\n• Science laboratories\n• Computer labs\n• Library and resource center\n• Sports complex\n• Boarding houses\n• Medical center\n\nWould you like to take a virtual tour?`,
    'contact information': `You can reach us at:\n\n📞 Phone: ${schoolConfig.phone.primary}\n📧 Email: ${schoolConfig.email.primary}\n📍 Address: ${schoolConfig.address.street}, ${schoolConfig.address.city}\n\n🕒 Office Hours: ${schoolConfig.hours.monday}\n\nWould you like to schedule a visit?`,
    'academic programs': `We offer comprehensive academic programs:\n\n• ${schoolConfig.curriculum.join('\n• ')}\n• Grades: ${schoolConfig.grades.join(', ')}\n• Qualified teachers\n• Small class sizes\n\nWould you like to learn about a specific program?`,
    'application process': `Our application process is simple:\n\n1. Complete online application\n2. Submit required documents\n3. Pay application fee\n4. Attend interview (if required)\n5. Receive admission decision\n6. Complete enrollment\n\nReady to start your application?`
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "I'd be happy to help you with that! For specific information, please contact our admissions office or visit our website sections.";

      // Check for FAQ matches
      for (const [key, value] of Object.entries(faqResponses)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'hidden' : 'flex'
        } ${
          theme === 'dark' 
            ? 'bg-primary-500 hover:bg-primary-600 text-white' 
            : 'bg-primary-500 hover:bg-primary-600 text-white'
        } items-center justify-center`}
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.3 : 1, 
              y: isMinimized ? 100 : 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 w-96 h-[500px] ${
              theme === 'dark' 
                ? 'bg-black/95 border-white/20' 
                : 'bg-white/95 border-black/20'
            } backdrop-blur-xl border rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className={`p-4 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            } flex items-center justify-between`}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {schoolConfig.shortName} Assistant
                  </h4>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
                  }`}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-primary-500 text-white'
                          : theme === 'dark'
                          ? 'bg-white/10 text-white'
                          : 'bg-black/10 text-black'
                      }`}>
                        <div className="flex items-start">
                          {message.sender === 'bot' && (
                            <Bot className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary-500" />
                          )}
                          <div>
                            <p className="text-sm leading-relaxed whitespace-pre-line">
                              {message.text}
                            </p>
                            <span className={`text-xs mt-1 block ${
                              message.sender === 'user' 
                                ? 'text-white/70' 
                                : theme === 'dark' 
                                ? 'text-white/50' 
                                : 'text-black/50'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className={`p-3 rounded-2xl ${
                        theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                      }`}>
                        <div className="flex items-center space-x-1">
                          <Bot className="h-4 w-4 text-primary-500 mr-2" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="p-4 border-t border-white/10">
                    <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Quick questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.slice(0, 3).map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            theme === 'dark' 
                              ? 'bg-white/10 hover:bg-white/20 text-white' 
                              : 'bg-black/10 hover:bg-black/20 text-black'
                          }`}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className={`p-4 border-t ${
                  theme === 'dark' ? 'border-white/10' : 'border-black/10'
                }`}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputText);
                    }}
                    className="flex space-x-2"
                  >
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type your message..."
                      className={`flex-1 px-3 py-2 rounded-lg border ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                          : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                    />
                    <button
                      type="submit"
                      disabled={!inputText.trim()}
                      className={`p-2 rounded-lg transition-colors ${
                        inputText.trim()
                          ? 'bg-primary-500 hover:bg-primary-600 text-white'
                          : theme === 'dark'
                          ? 'bg-white/10 text-white/50'
                          : 'bg-black/10 text-black/50'
                      }`}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;