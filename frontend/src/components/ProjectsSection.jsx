import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../mockData';

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud Security', 'Enterprise Security', 'DevSecOps', 'Infrastructure Security', 'Web Security', 'Academic'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00ff41]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#00ff41] mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Real-world cybersecurity implementations and security enhancements
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  filter === category
                    ? 'bg-[#00ff41] text-black'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-[#00ff41]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-all hover:shadow-xl hover:shadow-[#00ff41]/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Spotlight Badge */}
                {project.spotlight && (
                  <div className="absolute top-4 right-4 bg-[#00ff41] text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-md text-[#00ff41] text-xs font-semibold border border-[#00ff41]/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff41] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] text-xs rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] text-xs rounded font-mono">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-800">
                  <button className="flex-1 px-4 py-2 bg-[#00ff41] text-black font-semibold rounded-md hover:bg-[#00ff41]/90 transition-all text-sm flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-md hover:bg-[#00ff41]/10 hover:text-[#00ff41] text-gray-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
