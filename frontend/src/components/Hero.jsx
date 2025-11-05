import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Shield } from 'lucide-react';
import { personalInfo } from '../mockData';
import CyberShield3D from './CyberShield3D';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#00ff41 1px, transparent 1px),
            linear-gradient(90deg, #00ff41 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent animate-scan" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full"
            >
              <Shield className="w-4 h-4 text-[#00ff41]" />
              <span className="text-sm text-[#00ff41] font-mono">Security Expert</span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl font-semibold text-[#00ff41] mb-2 font-mono"
              >
                &gt; {personalInfo.title}
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-[#00ff41] text-black font-semibold rounded-md hover:bg-[#00ff41]/90 transition-all hover:shadow-lg hover:shadow-[#00ff41]/50 flex items-center space-x-2"
              >
                <span>View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-semibold rounded-md hover:bg-[#00ff41]/10 transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-transparent border-2 border-gray-600 text-gray-400 font-semibold rounded-md hover:border-[#00ff41] hover:text-[#00ff41] transition-all flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4 pt-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-900 rounded-full hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right 3D Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[600px] relative"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#00ff41] border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <CyberShield3D />
            </Suspense>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
