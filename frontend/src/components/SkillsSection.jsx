import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../mockData';

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#00ff41]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#00ff41] mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across cybersecurity, cloud infrastructure, and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-black/50 border border-[#00ff41]/20 rounded-lg p-6 hover:border-[#00ff41]/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="text-[#00ff41] mr-2">//</span>
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-[#00ff41] text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00ff41] to-[#0ff] rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
