import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';
import { certifications, education } from '../mockData';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Certifications */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Certifications & <span className="text-[#00ff41]">Education</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff41] mx-auto" />
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-[#00ff41]/30 rounded-lg p-6 hover:border-[#00ff41]/50 transition-all hover:shadow-lg hover:shadow-[#00ff41]/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-10 h-10 text-[#00ff41]" />
                  <span className="px-3 py-1 bg-[#00ff41]/20 text-[#00ff41] text-xs font-semibold rounded-full border border-[#00ff41]/30">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-[#00ff41] font-semibold mb-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-gray-300 text-sm font-mono">{edu.gpa}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="bg-gray-900/50 border border-[#00ff41]/20 rounded-lg p-4 hover:border-[#00ff41]/50 transition-all hover:shadow-md hover:shadow-[#00ff41]/10 group cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 group-hover:text-[#00ff41] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                    <span className="text-[#00ff41] text-xs font-mono">{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
