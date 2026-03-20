import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Lock, Terminal, Target, Activity, Code, Award, TrendingUp, Users, Crosshair, Server } from 'lucide-react';
import { personalInfo } from '../mockData';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: 'Years Experience', value: '8+', icon: TrendingUp },
    { label: 'Projects Completed', value: '22+', icon: Award },
    { label: 'Certifications', value: '13+', icon: Shield },
    { label: 'Daily Events Analyzed', value: '50K+', icon: Activity }
  ];

  const expertise = [
    {
      icon: Shield,
      title: 'AI Security & ML',
      description: 'Adversarial defense, model hardening, LLM security, prompt injection testing, and inference protection for AI systems',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Multi-cloud security across AWS, Azure, and GCP -IAM, VPC design, encryption, zero trust, and compliance automation',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Crosshair,
      title: 'Offensive Security',
      description: 'Full-stack penetration testing, red teaming, adversary emulation, bug bounty triage, and application security audits',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'DevSecOps & Automation',
      description: 'CI/CD pipeline security, Terraform IaC, Docker/Kubernetes hardening, and automated compliance workflows',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Threat Hunting & IR',
      description: 'MITRE ATT&CK-based threat hunting, SIEM analysis, incident response automation, and SOAR orchestration',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Server,
      title: 'SRE & Infrastructure',
      description: 'Observability with Prometheus/Grafana, Kubernetes cluster management, Helm deployments, and disaster recovery',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const responsibilities = [
    'Architect AI security standards and protect ML model training pipelines',
    'Design multi-cloud security frameworks aligned with SABSA and NIST',
    'Execute penetration testing and adversary emulation engagements',
    'Build IaC pipelines with Terraform/Ansible for secure cloud provisioning',
    'Manage Kubernetes clusters and implement production observability',
    'Embed security-by-design into CI/CD and Agile DevOps workflows'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #155724 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#155724]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Security Architect specializing in AI security, cloud infrastructure, offensive testing, and site reliability
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-white border border-[#155724]/20 rounded-xl p-6 text-center hover:border-[#155724]/40 hover:shadow-xl hover:shadow-[#155724]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-[#155724] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-[#155724] mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-[#155724]/20 rounded-2xl p-8 md:p-10 mb-16 shadow-lg"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#155724]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-[#155724]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Security Architect & Engineer</h3>
              <p className="text-gray-600 leading-relaxed">
                A versatile security leader with <span className="text-[#155724] font-semibold">8+ years</span> designing secure infrastructures for <span className="text-[#155724] font-semibold">financial and enterprise environments</span>.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed pl-16">
            <p>
              Architected scalable security frameworks across <strong>Azure and AWS</strong>, integrating <strong>SABSA methodologies</strong> to align technical controls with business objectives. Directed DevSecOps teams in securing data pipelines and ML models, reducing adversarial threat risks through rigorous identity and API protection standards.
            </p>
            <p>
              Most recently served as <strong>Lead Security Architect at CRS Laboratory</strong>, building enterprise-wide AI security standards, conducting threat hunting with MITRE ATT&CK, and executing full-stack penetration testing across cloud-native applications.
            </p>
            <p>
              Expert in translating complex architectural requirements into execution -from <span className="text-[#155724] font-semibold">offensive security testing</span> to <span className="text-[#155724] font-semibold">production reliability engineering</span>, fostering a culture of security-by-design across agile teams.
            </p>
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-[#155724]" />
            <h3 className="text-3xl font-bold text-gray-900">What I Do</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group bg-white border border-[#155724]/20 rounded-xl p-5 hover:border-[#155724]/40 hover:shadow-lg transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#155724] font-bold text-xl group-hover:scale-125 transition-transform">▸</span>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[#155724]" />
            <h3 className="text-3xl font-bold text-gray-900">Core Expertise</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group bg-white border border-[#155724]/20 rounded-xl p-6 hover:border-[#155724]/40 hover:shadow-xl hover:shadow-[#155724]/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#155724] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
