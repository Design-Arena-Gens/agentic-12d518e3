'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Volume2, MessageCircle, Sparkles } from 'lucide-react';

interface VoiceAssistantProps {
  darkMode: boolean;
}

export default function VoiceAssistant({ darkMode }: VoiceAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([
    { type: 'ai', text: 'Hi! I\'m your AI Finance Assistant. You can ask me about your spending, or tell me about new expenses!' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice input
      setTimeout(() => {
        const sampleInputs = [
          'I spent ₹100 on burger',
          'What is my top spending category?',
          'Show me my monthly expenses',
          'Add ₹250 for coffee'
        ];
        const randomInput = sampleInputs[Math.floor(Math.random() * sampleInputs.length)];
        setMessages(prev => [...prev, { type: 'user', text: randomInput }]);
        setIsListening(false);

        // AI response
        setTimeout(() => {
          let response = '';
          if (randomInput.includes('spent') || randomInput.includes('Add')) {
            response = '✅ Expense added successfully! I\'ve categorized it and updated your budget.';
          } else if (randomInput.includes('top spending')) {
            response = 'Your top spending category is Entertainment with ₹12,450 (35% of total spending).';
          } else {
            response = 'Your monthly expenses are ₹45,234. This is 8.2% lower than last month!';
          }
          setMessages(prev => [...prev, { type: 'ai', text: response }]);
        }, 1500);
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: inputText }]);
      setInputText('');

      // AI response
      setTimeout(() => {
        const response = 'I understand! Let me help you with that. Your request has been processed successfully.';
        setMessages(prev => [...prev, { type: 'ai', text: response }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-deep-cyan to-sapphire rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center z-50 hover:shadow-cyan-500/70 transition-all"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-96 h-[600px] glass-card rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-deep-cyan to-sapphire p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">AI Finance Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
              <Volume2 className="w-5 h-5 text-white" />
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-deep-cyan to-sapphire text-white'
                        : 'glass-card text-gray-800 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isListening && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass-card p-3 rounded-2xl flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Listening...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type or use voice..."
                  className="flex-1 px-4 py-3 glass-card rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-cyan text-gray-800 dark:text-white placeholder-gray-400 text-sm"
                />
                <button
                  onClick={handleVoiceToggle}
                  className={`p-3 rounded-xl transition-all ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-gradient-to-r from-deep-cyan to-sapphire text-white'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['Top Spending', 'Add Expense', 'Monthly Report'].map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMessages(prev => [...prev, { type: 'user', text: action }]);
                      setTimeout(() => {
                        setMessages(prev => [...prev, {
                          type: 'ai',
                          text: `Let me help you with ${action.toLowerCase()}...`
                        }]);
                      }, 1000);
                    }}
                    className="px-3 py-1.5 glass-card rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
