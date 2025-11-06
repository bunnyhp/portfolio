import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../mockData';

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#155724 1px, transparent 1px), linear-gradient(90deg, #155724 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
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
            Work <span className="text-[#155724]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#155724] via-[#28a745] to-transparent" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 lg:text-right lg:pr-12">
                  <div className={`bg-white border border-[#155724]/30 rounded-lg p-6 hover:border-[#155724]/50 transition-all hover:shadow-lg hover:shadow-[#155724]/10 shadow-md ${index % 2 === 0 ? '' : 'lg:text-left lg:pr-0 lg:pl-12'}`}>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-[#155724]/20 text-[#155724] text-xs font-semibold rounded-full border border-[#155724]/30">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-600 text-sm flex-wrap">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1 text-[#155724]" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-[#155724]" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-[#155724]" />
                        {job.period}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-[#155724] mr-2 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-50 border border-[#155724]/30 text-[#155724] text-xs rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <div className="w-6 h-6 bg-[#155724] rounded-full border-4 border-white shadow-lg shadow-[#155724]/50" />
                  <div className="absolute inset-0 w-6 h-6 bg-[#155724] rounded-full animate-ping opacity-75" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
