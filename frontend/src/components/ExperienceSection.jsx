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

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#155724] to-[#155724]/20" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-8 top-8 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-[#155724] rounded-full border-4 border-white shadow-md z-10 relative" />
                </div>

                {/* Content Card */}
                <div className="md:ml-16 bg-white border border-[#155724]/30 rounded-xl p-8 hover:border-[#155724]/50 transition-all hover:shadow-xl hover:shadow-[#155724]/10 shadow-md">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <Briefcase className="w-4 h-4 text-[#155724]" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-[#155724]/10 text-[#155724] text-xs font-bold rounded-full border border-[#155724]/30 whitespace-nowrap self-start">
                      {job.type}
                    </span>
                  </div>

                  {/* Location and Period */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#155724]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#155724]" />
                      <span className="font-medium">{job.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-5">{job.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start leading-relaxed">
                        <span className="text-[#155724] mr-2.5 mt-1 font-bold">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {job.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-50 border border-[#155724]/30 text-[#155724] text-xs rounded-lg font-medium hover:bg-[#155724]/5 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
