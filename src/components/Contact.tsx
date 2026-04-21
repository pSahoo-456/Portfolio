'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // You can integrate Formspree here later
      // For now, we'll open email client
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:prakash2004sahoo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/prakash-sahoo-ai', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/pSahoo-456', href: personalInfo.github },
  ];

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect! Whether you have a project idea, research collaboration, or just want to say hi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5, boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }}
                className="flex items-center gap-4 p-4 bg-navy-light rounded-xl border border-gray-800 card-glow hover:border-cyan/50 transition-all duration-300 block"
              >
                <method.icon className="text-cyan flex-shrink-0" size={28} />
                <div>
                  <p className="text-sm text-gray-400 font-mono">{method.label}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-cyan mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-light border border-gray-800 rounded-lg text-white focus:border-cyan focus:outline-none focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                  placeholder="Your Name"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-light border border-gray-800 rounded-lg text-white focus:border-cyan focus:outline-none focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                  placeholder="your.email@example.com"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-light border border-gray-800 rounded-lg text-white focus:border-cyan focus:outline-none focus:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-cyan text-navy font-bold rounded-lg transition-all duration-300 hover:bg-cyan-light flex items-center justify-center gap-2"
                suppressHydrationWarning
              >
                <Send size={20} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
