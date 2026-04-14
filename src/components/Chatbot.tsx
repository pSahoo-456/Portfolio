'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { personalInfo, skills, experience, projects, achievements, education } from '@/data/portfolio';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const knowledgeBase: Record<string, string> = {
  greeting: `Hi! 👋 I'm Prakash's AI assistant. Ask me about his skills, projects, experience, or achievements!`,
  who: `${personalInfo.name} is a final-year B.Tech CSE student at GIFT Autonomous, Bhubaneswar, specializing in AI/ML. He has interned at DRDO, NIT Rourkela, and IIG Varsity.`,
  about: personalInfo.bio,
  skills: `Prakash is proficient in:\n• Programming: ${skills.Programming.join(', ')}\n• ML/AI: ${skills['ML/AI'].join(', ')}\n• LLM & RAG: ${skills['LLM & RAG'].join(', ')}\n• And more in Data, Web/APIs, Tools, Databases, and Cloud!`,
  projects: `Prakash has worked on 4 major projects:\n1. AI-Powered Tender Evaluation System (RAG, LangChain)\n2. Enhanced Facial Emotion Recognition (IEEE Published)\n3. AI-Powered Air Pollution Monitoring\n4. Contact Management System`,
  experience: `Prakash has 3 internships:\n1. DRDO-ITR: AI/ML Intern (Aug 2025 - Feb 2026)\n2. NIT Rourkela: AI/ML Research Intern (May - Jul 2024)\n3. IIG Varsity: Java Developer Intern (Jul - Aug 2023)`,
  education: `${personalInfo.name} is pursuing B.Tech CSE at GIFT Autonomous (2022-2026) with 8.82 CGPA. He completed 12th with 88% and Matriculation with 76%.`,
  achievements: `Key achievements:\n🏆 1st Place - Hackfest ADVAITA 2025, IIIT Bhubaneswar\n🏆 1st Place - GIET Hackathon 2025\n🥈 4th Place - ML Hackathon, IIT Bhubaneswar\n📄 IEEE Published Paper\n🎖️ 3 NPTEL Silver Badges`,
  hackathon: `Prakash has won multiple hackathons:\n🏆 1st Place - Hackfest ADVAITA 2025, IIIT Bhubaneswar\n🏆 1st Place - GIET Hackathon 2025 (Smart City & Sustainability)\n🥈 4th Place - ML Hackathon, IIT Bhubaneswar (Pravaah'25)`,
  ieee: `Prakash published a paper in IEEE Xplore (IC-SIT 2024) titled "Enhanced FER Using Transfer Learning with ResNet152". The model achieved 85% accuracy in facial emotion recognition.`,
  contact: `You can reach Prakash at:\n📧 ${personalInfo.email}\n📱 ${personalInfo.phone}\n💼 LinkedIn: ${personalInfo.linkedin}\n💻 GitHub: ${personalInfo.github}`,
  email: personalInfo.email,
  phone: personalInfo.phone,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
  cgpa: `Prakash has an excellent academic record:\n• B.Tech CSE: 8.82 CGPA\n• 12th Grade: 88%\n• Matriculation: 76%`,
  drdo: `At DRDO-ITR Chandipur, Prakash built LLM and RAG systems for defense applications. He developed an offline RAG pipeline with dual-path OCR engine, FAISS vector store, achieving 100% data recovery and reducing manual review time by 80%.`,
  rag: `Prakash has extensive RAG experience. At DRDO, he built an offline RAG pipeline using LangChain, Ollama, FAISS, and Llama 3 for tender evaluation. It featured dual-path OCR, vector search, and automated LaTeX report generation.`,
  publication: `Prakash's IEEE paper "Enhanced FER Using Transfer Learning with ResNet152" was published at IC-SIT 2024. The model classified 7 human emotions with 85% accuracy, 10% above baseline.`,
  help: `You can ask me about:\n• Who Prakash is\n• His skills & tech stack\n• Projects he's worked on\n• Work experience & internships\n• Education & CGPA\n• Achievements & hackathons\n• IEEE publications\n• Contact information`,
};

const quickReplies = ['Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(knowledgeBase.greeting);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, sender: 'bot', timestamp: new Date() }]);
      setIsTyping(false);
    }, 800);
  };

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return knowledgeBase.greeting;
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask anything else about Prakash.";
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! 👋 Have a great day! You can always come back if you have more questions about Prakash.";
    }

    if (lowerMessage.includes('python') || lowerMessage.includes('java') || lowerMessage.includes('programming')) {
      return `Prakash is proficient in ${skills.Programming.join(', ')}. He also has extensive experience with ML/AI frameworks like ${skills['ML/AI'].slice(0, 3).join(', ')}.`;
    }

    if (lowerMessage.includes('langchain') || lowerMessage.includes('llm') || lowerMessage.includes('llama')) {
      return `Prakash specializes in LLM & RAG technologies: ${skills['LLM & RAG'].join(', ')}. He built production RAG systems at DRDO!`;
    }

    return `I'm not sure about that specific detail, but you can email Prakash directly at ${personalInfo.email} or check out his LinkedIn at ${personalInfo.linkedin} for more information!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user', timestamp: new Date() }]);
    setInput('');

    const response = findResponse(userMessage);
    addBotMessage(response);
  };

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { text: reply, sender: 'user', timestamp: new Date() }]);
    const response = findResponse(reply.toLowerCase());
    addBotMessage(response);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 group"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-violet blur-lg"
        />
        
        {/* Main button */}
        <div className="relative p-5 bg-gradient-to-br from-cyan via-cyan/90 to-violet rounded-full shadow-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
          {isOpen ? (
            <X size={32} className="text-navy drop-shadow-lg" strokeWidth={2.5} />
          ) : (
            <div className="relative">
              <MessageCircle size={32} className="text-navy drop-shadow-lg" strokeWidth={2.5} />
              {/* Notification dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-violet rounded-full border-2 border-white"
              />
            </div>
          )}
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-navy-light border border-cyan/30 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        >
          <p className="text-xs text-cyan font-mono">Chat with AI Assistant</p>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 left-8 z-50 w-80 md:w-[420px] h-[550px] bg-gradient-to-b from-navy-light to-navy border border-cyan/40 rounded-2xl shadow-[0_0_50px_rgba(0,212,255,0.3)] flex flex-col backdrop-blur-xl"
          >
            <div className="p-4 bg-gradient-to-r from-cyan/20 to-violet/20 border-b border-cyan/30 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan/20 rounded-full">
                  <Bot className="text-cyan" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Prakash's AI Assistant</h3>
                  <p className="text-xs text-gray-400 font-mono">Ask me anything about Prakash!</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-xl text-sm whitespace-pre-line leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-cyan to-cyan-dark text-navy font-medium shadow-lg shadow-cyan/20'
                        : 'bg-navy-lighter/80 text-gray-200 border border-gray-700/50 shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-navy-lighter p-3 rounded-lg border border-gray-700">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 bg-cyan rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-cyan rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-cyan rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <motion.button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan/10 to-violet/10 text-cyan text-xs rounded-full border border-cyan/40 hover:border-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 font-medium"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800/50 bg-navy-light/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Prakash..."
                  className="flex-1 px-4 py-2.5 bg-navy-lighter/70 border border-gray-700/50 rounded-xl text-white text-sm focus:border-cyan focus:outline-none focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300 placeholder:text-gray-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-gradient-to-br from-cyan to-cyan-dark text-navy rounded-xl hover:from-cyan-light hover:to-cyan transition-all duration-300 shadow-lg"
                >
                  <Send size={20} strokeWidth={2.5} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
