import React from 'react';
import { Github, Linkedin, Mail, Shield, Heart } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#00ff41]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-[#00ff41]" />
              <span className="text-xl font-bold text-white">HARSHIL<span className="text-[#00ff41]">.</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cybersecurity Engineer specializing in threat detection, cloud security, and DevSecOps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#00ff41] text-sm transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-[#00ff41] text-sm transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#00ff41] text-sm transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#00ff41] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">{personalInfo.email}</li>
              <li className="text-gray-400">{personalInfo.phone}</li>
              <li className="text-gray-400">{personalInfo.location}</li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-[#00ff41]" /> and cutting-edge tech
          </p>
        </div>
      </div>
    </footer>
  );
}
