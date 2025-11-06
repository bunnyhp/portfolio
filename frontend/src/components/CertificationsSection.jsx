import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { certifications, education } from '../mockData';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Education & <span className="text-[#155724]">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-[#155724] mx-auto mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Academic background and professional certifications in cybersecurity
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-[#155724]" />
              <h3 className="text-3xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group bg-white border border-[#155724]/20 rounded-xl p-8 hover:border-[#155724]/40 transition-all hover:shadow-xl hover:shadow-[#155724]/15 shadow-md hover:-translate-y-1 duration-300"
                >
                  {/* Header with Icon and Period */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 bg-[#155724]/10 rounded-xl flex items-center justify-center group-hover:bg-[#155724]/20 transition-colors">
                      <Award className="w-8 h-8 text-[#155724]" />
                    </div>
                    <span className="px-4 py-2 bg-[#155724] text-white text-xs font-bold rounded-lg shadow-md">
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#155724] transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-[#155724] font-bold mb-2 text-lg">{edu.institution}</p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[#155724]" fill="currentColor" />
                    <span className="text-gray-700 font-semibold">{edu.gpa}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#155724]" />
              <h3 className="text-3xl font-bold text-gray-900">Professional Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="group bg-white border border-[#155724]/20 rounded-xl p-6 hover:border-[#155724]/40 transition-all hover:shadow-lg hover:shadow-[#155724]/10 cursor-pointer shadow-sm hover:-translate-y-0.5 duration-300"
                >
                  {/* Header with Status Icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#155724]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#155724]/20 transition-colors">
                      <CheckCircle className="w-6 h-6 text-[#155724]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-gray-900 leading-tight group-hover:text-[#155724] transition-colors mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 text-sm font-semibold">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Year/Status Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold ${
                      cert.year.toLowerCase().includes('scheduled') 
                        ? 'bg-amber-100 text-amber-700 border border-amber-300' 
                        : 'bg-[#155724]/10 text-[#155724] border border-[#155724]/30'
                    }`}>
                      {cert.year}
                    </span>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
