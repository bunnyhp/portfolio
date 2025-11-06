import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #155724 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#155724]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss cybersecurity? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of the following channels. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white border border-[#155724]/30 rounded-lg p-6 hover:border-[#155724]/50 transition-all group shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#155724]/10 rounded-lg group-hover:bg-[#155724]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#155724]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 hover:text-[#155724] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#155724]/30 rounded-lg p-6 hover:border-[#155724]/50 transition-all group shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#155724]/10 rounded-lg group-hover:bg-[#155724]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#155724]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Phone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-600 hover:text-[#155724] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#155724]/30 rounded-lg p-6 hover:border-[#155724]/50 transition-all group shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#155724]/10 rounded-lg group-hover:bg-[#155724]/20 transition-colors">
                    <MapPin className="w-6 h-6 text-[#155724]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-[#155724]/30 rounded-lg p-8 space-y-6 shadow-md">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-[#155724]/30 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:outline-none focus:ring-2 focus:ring-[#155724]/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-[#155724]/30 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:outline-none focus:ring-2 focus:ring-[#155724]/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-[#155724]/30 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:outline-none focus:ring-2 focus:ring-[#155724]/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-[#155724]/30 rounded-md text-gray-900 placeholder-gray-400 focus:border-[#155724] focus:outline-none focus:ring-2 focus:ring-[#155724]/20 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#155724] text-white font-semibold rounded-md hover:bg-[#155724]/90 transition-all hover:shadow-lg hover:shadow-[#155724]/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
