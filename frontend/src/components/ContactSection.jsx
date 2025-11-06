import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Clock, MessageSquare, Calendar } from 'lucide-react';
import { personalInfo } from '../mockData';
import { useToast } from '../hooks/use-toast';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9528b9d2-0cca-4fc0-a370-365c954510c8', // Web3Forms access key
          email: 'mail2harshilppatel@gmail.com', // Your email
          subject: `Portfolio Contact: ${formData.subject}`,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 5000,
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-green-500 to-emerald-600',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-blue-500 to-cyan-600',
      description: 'Call or text me'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'from-purple-500 to-indigo-600',
      description: 'Based in'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: personalInfo.github,
      color: 'hover:bg-gray-800'
    },
    {
      icon: Mail,
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'hover:bg-[#155724]'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #155724 12%, transparent 12.5%, transparent 87%, #155724 87.5%, #155724), linear-gradient(150deg, #155724 12%, transparent 12.5%, transparent 87%, #155724 87.5%, #155724)`,
          backgroundSize: '80px 140px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#155724]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Have a project in mind or want to discuss cybersecurity? Let's connect!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#155724]/20">
              <Clock className="w-5 h-5 text-[#155724]" />
              <span className="text-sm font-medium text-gray-700">Response within 24h</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#155724]/20">
              <MessageSquare className="w-5 h-5 text-[#155724]" />
              <span className="text-sm font-medium text-gray-700">Open for opportunities</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      className="group block bg-white border border-[#155724]/20 rounded-xl p-6 hover:border-[#155724]/40 hover:shadow-xl hover:shadow-[#155724]/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <method.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#155724] transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-xs text-gray-500 mb-2">{method.description}</p>
                          <p className="text-sm text-gray-700 font-medium break-all">{method.value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white border border-[#155724]/20 rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <method.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{method.description}</p>
                          <p className="text-sm text-gray-700 font-medium">{method.value}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-[#155724] to-[#0d3e1a] rounded-xl p-6 shadow-xl"
            >
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                    <span className="text-white text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white border border-[#155724]/20 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-lg font-bold text-gray-900">Available for Work</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Currently open to new opportunities in Security Engineering, SOC Analysis, and Cybersecurity roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white border border-[#155724]/20 rounded-2xl p-8 shadow-xl space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-[#155724]/20 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#155724]/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-[#155724]/20 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#155724]/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-[#155724]/20 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#155724]/10 transition-all"
                  placeholder="Project Inquiry / Job Opportunity / Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-[#155724]/20 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#155724]/10 transition-all resize-none"
                  placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#155724] to-[#0d3e1a] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#155724]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
