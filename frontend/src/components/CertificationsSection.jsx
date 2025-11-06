import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';
import { certifications, education } from '../mockData';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 bg-white relative">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Certifications & <span className="text-[#155724]">Education</span>
            </h2>
            <div className="w-20 h-1 bg-[#155724] mx-auto" />
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-[#155724]/30 rounded-lg p-6 hover:border-[#155724]/50 transition-all hover:shadow-lg hover:shadow-[#155724]/10 shadow-md"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-10 h-10 text-[#155724]" />
                  <span className="px-3 py-1 bg-[#155724]/20 text-[#155724] text-xs font-semibold rounded-full border border-[#155724]/30">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-[#155724] font-semibold mb-1">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.location}</p>
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[#155724]" />
                  <span className="text-gray-700 text-sm font-mono">{edu.gpa}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
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
                className="bg-white border border-[#155724]/30 rounded-lg p-4 hover:border-[#155724]/50 transition-all hover:shadow-md hover:shadow-[#155724]/10 group cursor-pointer shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#155724] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-sm font-semibold mb-1 group-hover:text-[#155724] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-xs mb-1">{cert.issuer}</p>
                    <span className="text-[#155724] text-xs font-mono mb-1 block">{cert.year}</span>
                    {cert.description && (
                      <p className="text-gray-600 text-xs mt-2 leading-relaxed">{cert.description}</p>
                    )}
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
