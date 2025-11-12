import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Globe } from 'lucide-react';
import { projects } from '../mockData';

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud Security', 'Enterprise Security', 'DevSecOps', 'Infrastructure Security', 'Web Security', 'Academic', 'Research', 'Competitions'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  // Function to extract domain from URL
  const getDomainFromUrl = (url) => {
    if (!url) return 'No Link Available';
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  // Function to format URL for display
  const formatUrl = (url) => {
    if (!url) return null;
    try {
      const urlObj = new URL(url);
      return urlObj.hostname + urlObj.pathname;
    } catch {
      return url.length > 50 ? url.substring(0, 50) + '...' : url;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-[#155724]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
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
                    ? 'bg-[#155724] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-[#155724]/30 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-[#155724]/20 hover:border-[#155724]/40 transition-all hover:shadow-2xl hover:shadow-[#155724]/15 shadow-md hover:-translate-y-1 duration-300"
            >
              {/* Project Image with Link Overlay */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group/image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Link Overlay - Shows on Hover */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#155724]/90 opacity-0 group-hover/image:opacity-100 transition-all duration-300 z-10"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white mb-2">View Project</p>
                    <p className="text-xs font-mono text-white/90 px-4 text-center line-clamp-2 max-w-[90%]">
                      {formatUrl(project.link)}
                    </p>
                    <ExternalLink className="w-4 h-4 text-white mt-2" />
                  </a>
                )}
                
                {/* Badges Container */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
                  {/* Category Badge */}
                  <span className="bg-[#155724] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                    {project.category}
                  </span>
                  
                  {/* Featured Badge */}
                  {project.spotlight && (
                    <div className="bg-white/95 backdrop-blur-sm text-[#155724] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center shadow-lg">
                      <Star className="w-3 h-3 mr-1.5" fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 right-4 z-20">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-mono font-semibold">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#155724] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5 min-h-[28px]">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#155724]/5 border border-[#155724]/20 text-[#155724] text-xs rounded-md font-medium hover:bg-[#155724]/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-[#155724]/10 border border-[#155724]/30 text-[#155724] text-xs rounded-md font-bold">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-[#155724] text-white font-semibold rounded-lg hover:bg-[#155724]/90 transition-all text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </a>
                  ) : (
                    <button className="flex-1 px-4 py-2.5 bg-[#155724] text-white font-semibold rounded-lg hover:bg-[#155724]/90 transition-all text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 rounded-lg hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all border border-gray-200 hover:border-[#155724]/30"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 rounded-lg hover:bg-[#155724]/10 hover:text-[#155724] text-gray-700 transition-all border border-gray-200 hover:border-[#155724]/30"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-5 h-5" />
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
