import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, name: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: personalInfo.linkedin, name: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, name: 'Email', color: 'hover:bg-[#155724]' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #155724 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#155724]/20 to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">HARSHIL <span className="text-[#28a745]">P.</span></span>
              <p className="text-sm text-gray-400 mt-2">Security Engineer</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cybersecurity Engineer specializing in SIEM analysis, incident response, and threat hunting. Passionate about securing digital assets.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#155724] rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#28a745] text-sm transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#28a745] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#155724] rounded-full" />
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-[#155724] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-[#28a745] text-sm break-all transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-[#155724] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-[#28a745] text-sm transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#155724] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 text-sm">
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#155724] rounded-full" />
              Connect
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Let's connect and discuss how I can help secure your digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#155724]/50 group`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#155724] to-[#0d3e1a] text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-[#155724]/30 transition-all duration-300 hover:-translate-y-1 w-full justify-center"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-sm text-gray-400">for Cybersecurity</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#155724] border border-white/20 rounded-lg text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#155724]/50"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
