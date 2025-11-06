import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Code, Lock, Server, Terminal, Network, FileSearch, Users, Award, AlertTriangle, Database } from 'lucide-react';

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeTab, setActiveTab] = useState('core');

  const tabs = [
    { id: 'core', label: 'Core Security', icon: Shield },
    { id: 'tools', label: 'Tools & Platforms', icon: Terminal },
    { id: 'frameworks', label: 'Frameworks & Compliance', icon: Award },
    { id: 'technical', label: 'Technical Skills', icon: Code }
  ];

  const skillsData = {
    core: [
      {
        category: 'Security Operations',
        icon: Shield,
        color: 'from-green-500 to-emerald-600',
        skills: ['Splunk', 'ELK Stack', 'QRadar', 'CrowdStrike', 'Defender ATP', 'SentinelOne', 'SOAR Platforms', 'Real-time Alert Triage', 'Rule Tuning']
      },
      {
        category: 'Network Security',
        icon: Network,
        color: 'from-blue-500 to-cyan-600',
        skills: ['Palo Alto', 'Fortinet', 'Snort', 'Suricata', 'VPN', 'Network Segmentation', 'Zero Trust Architecture', 'TCP/IP', 'DNS/HTTP/S', 'Wireshark']
      },
      {
        category: 'Cloud Security',
        icon: Cloud,
        color: 'from-purple-500 to-indigo-600',
        skills: ['AWS GuardDuty', 'CloudTrail', 'IAM', 'Security Hub', 'Azure Sentinel', 'Azure Defender', 'Cloud Security Posture Management', 'AWS Config']
      },
      {
        category: 'Vulnerability Management',
        icon: AlertTriangle,
        color: 'from-red-500 to-pink-600',
        skills: ['Nessus', 'Qualys', 'OpenVAS', 'Rapid7', 'CVSS Scoring', 'Risk-based Prioritization', 'CVE Analysis', 'CIS Benchmarks']
      },
      {
        category: 'Identity & Access Management',
        icon: Users,
        color: 'from-yellow-500 to-orange-600',
        skills: ['Active Directory', 'SSO', 'MFA', 'Privileged Access Management', 'LDAP', 'IAM Policies', 'Device Compliance', 'PKI', 'Least Privilege']
      },
      {
        category: 'Incident Response',
        icon: FileSearch,
        color: 'from-teal-500 to-green-600',
        skills: ['NIST 800-61', 'IOC Triage', 'Log Analysis', 'IOC Correlation', 'Containment', 'Remediation', 'Root Cause Analysis', 'Automated Playbooks', 'Adversary Emulation']
      }
    ],
    tools: [
      {
        category: 'SIEM & Monitoring',
        icon: Server,
        color: 'from-green-500 to-emerald-600',
        skills: ['Splunk Enterprise', 'Elastic Stack (ELK)', 'IBM QRadar', 'Azure Sentinel', 'Log Analysis', 'Correlation Rules', 'Custom Dashboards']
      },
      {
        category: 'EDR & Detection',
        icon: Shield,
        color: 'from-blue-500 to-cyan-600',
        skills: ['CrowdStrike Falcon', 'Microsoft Defender ATP', 'SentinelOne', 'Carbon Black', 'Threat Detection', 'Behavioral Analysis']
      },
      {
        category: 'Threat Intelligence',
        icon: Database,
        color: 'from-purple-500 to-indigo-600',
        skills: ['MITRE ATT&CK', 'OSINT Feeds', 'Anomaly Detection', 'CTI Pipeline', 'ThreatConnect', 'IOC Management']
      },
      {
        category: 'Forensics & Analysis',
        icon: FileSearch,
        color: 'from-red-500 to-pink-600',
        skills: ['iLEAPP', 'Volatility', 'Static Analysis', 'Dynamic Analysis', 'Memory Forensics', 'Artifact Review', 'Chain of Custody']
      },
      {
        category: 'Collaboration Tools',
        icon: Users,
        color: 'from-yellow-500 to-orange-600',
        skills: ['Jira', 'ServiceNow', 'Git', 'Confluence', 'Slack', 'JSON/YAML', 'Markdown']
      },
      {
        category: 'Scanning & Assessment',
        icon: Lock,
        color: 'from-teal-500 to-green-600',
        skills: ['Nessus', 'Qualys', 'OpenVAS', 'Burp Suite', 'OWASP ZAP', 'Nikto', 'Nmap']
      }
    ],
    frameworks: [
      {
        category: 'Security Frameworks',
        icon: Award,
        color: 'from-green-500 to-emerald-600',
        skills: ['NIST Cybersecurity Framework', 'NIST 800-53', 'NIST 800-61', 'ISO 27001/27002', 'CIS Controls', 'MITRE ATT&CK']
      },
      {
        category: 'Compliance Standards',
        icon: Shield,
        color: 'from-blue-500 to-cyan-600',
        skills: ['PCI-DSS', 'HIPAA', 'SOC 2', 'GDPR', 'SOX', 'CMMC', 'FedRAMP']
      },
      {
        category: 'Risk Management',
        icon: AlertTriangle,
        color: 'from-purple-500 to-indigo-600',
        skills: ['Risk Assessments', 'Business Impact Analysis', 'Threat Modeling', 'Risk Quantification', 'Security Audits']
      }
    ],
    technical: [
      {
        category: 'Scripting & Automation',
        icon: Code,
        color: 'from-green-500 to-emerald-600',
        skills: ['Python', 'PowerShell', 'Bash', 'SQL', 'JavaScript', 'Log Parsing', 'SOC Playbooks', 'Automation Scripts']
      },
      {
        category: 'Operating Systems',
        icon: Terminal,
        color: 'from-blue-500 to-cyan-600',
        skills: ['Windows Server', 'Linux (Ubuntu, CentOS, Kali)', 'VMware vSphere', 'Hyper-V', 'System Hardening']
      },
      {
        category: 'DevSecOps',
        icon: Server,
        color: 'from-purple-500 to-indigo-600',
        skills: ['CI/CD Security', 'Docker Security', 'Kubernetes Security', 'Infrastructure as Code', 'Jenkins', 'GitLab CI']
      },
      {
        category: 'Programming',
        icon: Code,
        color: 'from-red-500 to-pink-600',
        skills: ['Python', 'JavaScript', 'SQL', 'PowerShell', 'Bash', 'REST APIs', 'Automation Tools']
      }
    ]
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #155724 1px, transparent 1px), linear-gradient(-45deg, #155724 1px, transparent 1px)`,
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-[#155724]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#155724] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity, cloud infrastructure, and development
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#155724] text-white shadow-lg shadow-[#155724]/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-[#155724]/30 hover:border-[#155724]/50'
              }`}
            >
              <tab.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                activeTab === tab.id ? 'rotate-0' : ''
              }`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeTab].map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white border border-[#155724]/20 rounded-xl p-6 hover:border-[#155724]/40 hover:shadow-xl hover:shadow-[#155724]/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#155724] transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                      className="px-3 py-1.5 bg-[#155724]/5 border border-[#155724]/20 text-[#155724] text-xs font-medium rounded-lg hover:bg-[#155724]/10 hover:border-[#155724]/40 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
