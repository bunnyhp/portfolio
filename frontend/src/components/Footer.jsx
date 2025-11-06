import React from 'react';
import { Github, Linkedin, Mail, Shield } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#155724]/30 py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-[#155724]" />
              <span className="text-xl font-bold text-gray-900">HARSHIL<span className="text-[#155724]">.</span></span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cybersecurity Engineer specializing in threat detection, cloud security, and DevSecOps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-[#155724] text-sm transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-[#155724] text-sm transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-[#155724] text-sm transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#155724] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">{personalInfo.email}</li>
              <li className="text-gray-600">{personalInfo.phone}</li>
              <li className="text-gray-600">{personalInfo.location}</li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex justify-center items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
