import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Shield, Terminal, Lock, Network, Activity } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [binaryRain, setBinaryRain] = useState([]);

  const commands = [
    '$ sudo nmap -sS target.net',
    '$ splunk search "index=security | stats count"',
    '$ tcpdump -i eth0 -n port 443',
    '$ python threat_hunter.py --ioc feed.json',
    '$ kubectl get pods -n security',
    '$ aws guardduty list-detectors',
    '> Scanning network topology...',
    '> Threat detected: 0',
    '> System status: SECURED',
    '$ firewall --status active',
  ];

  useEffect(() => {
    // Initialize terminal with commands
    const initialLines = commands.slice(0, 6).map((cmd, i) => ({ text: cmd, id: i }));
    setTerminalLines(initialLines);

    // Add new commands periodically
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        const newLine = commands[Math.floor(Math.random() * commands.length)];
        const updated = [...prev, { text: newLine, id: Date.now() }];
        return updated.slice(-8); // Keep last 8 lines
      });
    }, 3000);

    // Generate binary rain
    const generateBinary = () => {
      const binary = [];
      for (let i = 0; i < 50; i++) {
        binary.push({
          id: i,
          text: Math.random() > 0.5 ? '1' : '0',
          x: Math.random() * 100,
          delay: Math.random() * 5,
          speed: 2 + Math.random() * 3,
        });
      }
      setBinaryRain(binary);
    };

    generateBinary();

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden flex items-center">
      {/* Animated Cybersecurity Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#155724 1px, transparent 1px),
            linear-gradient(90deg, #155724 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Binary Code Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryRain.map((item) => (
          <div
            key={item.id}
            className="absolute text-[#155724] text-xs font-mono opacity-20"
            style={{
              left: `${item.x}%`,
              animation: `binaryFall ${item.speed}s linear ${item.delay}s infinite`,
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Network Node Connections */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#155724"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            );
          })}
        </svg>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#155724] to-transparent animate-scan" />
      </div>

      {/* Security Status Indicators */}
      <div className="absolute top-20 right-6 lg:right-12 z-20 space-y-3">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/90 backdrop-blur-sm border border-[#155724]/30 rounded-lg px-4 py-2 shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#155724] rounded-full animate-pulse" />
            <span className="text-xs font-mono text-gray-700">SYSTEM SECURED</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/90 backdrop-blur-sm border border-[#155724]/30 rounded-lg px-4 py-2 shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3 text-[#155724]" />
            <span className="text-xs font-mono text-gray-700">THREATS: 0</span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Security Badges */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#155724]/10 border border-[#155724]/30 rounded-lg shadow-sm"
              >
                <Shield className="w-4 h-4 text-[#155724]" />
                <span className="text-sm text-[#155724] font-mono font-semibold">Security Expert</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#155724]/10 border border-[#155724]/30 rounded-lg shadow-sm"
              >
                <Lock className="w-4 h-4 text-[#155724]" />
                <span className="text-sm text-[#155724] font-mono">SOC Analyst</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#155724]/10 border border-[#155724]/30 rounded-lg shadow-sm"
              >
                <Network className="w-4 h-4 text-[#155724]" />
                <span className="text-sm text-[#155724] font-mono">Threat Hunter</span>
              </motion.div>
            </div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight"
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="inline-block"
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2 mb-4"
              >
                <Terminal className="w-6 h-6 text-[#155724]" />
                <span className="text-2xl lg:text-3xl font-semibold text-[#155724] font-mono">
                  {'>'} {personalInfo.title}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-600 font-mono">
                  <div className="w-2 h-2 bg-[#155724] rounded-full animate-pulse" />
                  <span>Active</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 font-mono">
                  <div className="w-2 h-2 bg-[#155724] rounded-full" />
                  <span>Monitoring</span>
                </div>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg text-gray-700 leading-relaxed max-w-xl font-medium"
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
                className="px-8 py-3 bg-[#155724] text-white font-semibold rounded-md hover:bg-[#155724]/90 transition-all hover:shadow-lg hover:shadow-[#155724]/50 flex items-center space-x-2"
              >
                <span>View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-[#155724] text-[#155724] font-semibold rounded-md hover:bg-[#155724]/10 transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
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
                className="p-3 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-100 rounded-full hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[600px] relative"
          >
            {/* Terminal Window */}
            <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl border border-[#155724]/30 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 border-b border-[#155724]/30 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-[#155724] rounded-full" />
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-[#155724]" />
                  <span className="text-xs text-gray-400 font-mono">cyber-terminal</span>
                </div>
                <div className="w-16" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-full overflow-hidden relative">
                {/* Terminal Prompt */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <span className="text-[#155724]">root@security-labs</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-400">~</span>
                    <span className="text-[#155724]">$</span>
                  </div>

                  {/* Terminal Commands */}
                  <div className="space-y-1">
                    {terminalLines.map((line, index) => (
                      <motion.div
                        key={line.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-gray-300 ${
                          line.text.startsWith('>') ? 'text-[#155724]' : 'text-gray-400'
                        }`}
                      >
                        {line.text.startsWith('$') ? (
                          <>
                            <span className="text-[#155724]">$</span>{' '}
                            <span>{line.text.substring(2)}</span>
                          </>
                        ) : (
                          <span className="text-[#155724]">{line.text}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Cursor */}
                  <div className="flex items-center space-x-2 mt-4">
                    <span className="text-[#155724]">$</span>
                    <span className="text-gray-400">|</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-[#155724] inline-block"
                    />
                  </div>
                </div>

                {/* Network Visualization Overlay */}
                <div className="absolute bottom-4 right-4 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 360) / 8;
                      const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                      const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                      return (
                        <g key={i}>
                          <line
                            x1="50"
                            y1="50"
                            x2={x}
                            y2={y}
                            stroke="#155724"
                            strokeWidth="0.5"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="2"
                            fill="#155724"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        </g>
                      );
                    })}
                    <circle cx="50" cy="50" r="3" fill="#155724" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
