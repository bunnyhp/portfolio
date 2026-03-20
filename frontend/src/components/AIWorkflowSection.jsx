import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { workflows } from '../mockData';

export default function AIWorkflowSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(workflows.map((w) => w.category))];
  const filteredWorkflows =
    filter === 'All'
      ? workflows
      : workflows.filter((w) => w.category === filter);

  return (
    <section
      id="workflows"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern -matches Skills / Experience sections */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #155724 1px, transparent 1px), linear-gradient(-45deg, #155724 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header -standard site pattern */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI <span className="text-[#155724]">Workflows</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore AI-powered workflow visualizations with step-by-step process
            flows
          </p>

          {/* Filter Buttons -matches ProjectsSection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${filter === category
                    ? 'bg-[#155724] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-[#155724]/30 shadow-sm'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWorkflows.map((workflow, index) => (
              <motion.a
                key={workflow.id}
                href={`/workflows/${workflow.path}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.08, 0.5),
                }}
                className="group bg-white border border-[#155724]/20 rounded-xl p-6 hover:border-[#155724]/40 hover:shadow-xl hover:shadow-[#155724]/10 transition-all duration-300 hover:-translate-y-1 shadow-md block"
              >
                {/* Icon + Category row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#155724]/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#155724]/20 transition-colors">
                    {workflow.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-3 py-1 bg-[#155724]/10 text-[#155724] text-xs font-bold rounded-lg border border-[#155724]/30 mb-2">
                      {workflow.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#155724] transition-colors">
                      {workflow.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-5">
                  {workflow.description}
                </p>

                {/* View link */}
                <span className="inline-flex items-center gap-1.5 text-[#155724] font-semibold text-sm group-hover:gap-2.5 transition-all">
                  View workflow
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
