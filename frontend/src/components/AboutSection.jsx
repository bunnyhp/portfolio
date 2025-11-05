import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Lock, Terminal } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced threat identification and response'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'AWS security architecture & implementation'
    },
    {
      icon: Lock,
      title: 'Risk Assessment',
      description: 'Comprehensive vulnerability management'
    },
    {
      icon: Terminal,
      title: 'DevSecOps',
      description: 'Security automation & integration'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #00ff41 1px, transparent 1px)`,
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00ff41]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#00ff41] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="bg-gray-900/50 border border-[#00ff41]/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Terminal className="w-5 h-5 text-[#00ff41] mr-2" />
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00ff41] mr-2">&gt;</span>
                  <span>Design and implement comprehensive security architectures for cloud and on-premise infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00ff41] mr-2">&gt;</span>
                  <span>Conduct threat modeling, vulnerability assessments, and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00ff41] mr-2">&gt;</span>
                  <span>Develop secure CI/CD pipelines and automate security operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00ff41] mr-2">&gt;</span>
                  <span>Ensure compliance with industry standards and best practices</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gray-900/50 border border-[#00ff41]/20 rounded-lg p-6 hover:border-[#00ff41]/50 transition-all hover:shadow-lg hover:shadow-[#00ff41]/10 group"
              >
                <feature.icon className="w-10 h-10 text-[#00ff41] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
