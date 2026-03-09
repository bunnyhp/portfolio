import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Code, Lock, Server, Terminal, Network, FileSearch, Users, Award, AlertTriangle, Database, Crosshair, Activity } from 'lucide-react';

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Security Architecture', icon: Shield },
    { id: 'cloud', label: 'Cloud & DevSecOps', icon: Cloud },
    { id: 'offensive', label: 'Offensive Security', icon: Crosshair },
    { id: 'sre', label: 'SRE & Automation', icon: Server }
  ];

  const skillsData = {
    architecture: [
      {
        category: 'AI Security & ML',
        icon: Shield,
        color: 'from-green-500 to-emerald-600',
        skills: ['Adversarial Defense', 'Model Hardening', 'LLM Security', 'Inference Protection', 'Data Privacy', 'Algorithm Auditing', 'Bias Detection', 'PyRIT', 'Promptfoo']
      },
      {
        category: 'Security Frameworks',
        icon: Award,
        color: 'from-blue-500 to-cyan-600',
        skills: ['SABSA', 'NIST 800-53', 'ISO 27001', 'MITRE ATT&CK', 'CIS Benchmarks', 'OWASP Top 10', 'OWASP for LLMs', 'Cyber Kill Chain']
      },
      {
        category: 'Identity & Access Management',
        icon: Lock,
        color: 'from-purple-500 to-indigo-600',
        skills: ['OAuth 2.0', 'OIDC', 'SAML', 'Active Directory', 'Azure AD', 'MFA', 'RBAC', 'PIM/PAM', 'Zero Trust']
      },
      {
        category: 'GRC & Compliance',
        icon: FileSearch,
        color: 'from-red-500 to-pink-600',
        skills: ['NIST 800-53', 'HIPAA', 'SOC 2', 'GDPR', 'FedRAMP', 'Risk Assessment', 'Audit Support', 'Data Classification']
      },
      {
        category: 'Data Protection',
        icon: Database,
        color: 'from-yellow-500 to-orange-600',
        skills: ['DLP', 'TLS/SSL', 'Database Security', 'Encryption at Rest', 'Key Management (KMS)', 'Integrity Monitoring', 'PKI']
      },
      {
        category: 'Network Security',
        icon: Network,
        color: 'from-teal-500 to-green-600',
        skills: ['Palo Alto Firewalls', 'VPN', 'IDS/IPS (Snort)', 'Micro-segmentation', 'Zero Trust Architecture', 'TCP/IP', 'DNS Security', 'WAF']
      }
    ],
    cloud: [
      {
        category: 'AWS Security',
        icon: Cloud,
        color: 'from-green-500 to-emerald-600',
        skills: ['GuardDuty', 'CloudTrail', 'Security Hub', 'AWS Config', 'IAM Policies', 'VPC Design', 'KMS Encryption', 'Landing Zones']
      },
      {
        category: 'Azure & GCP',
        icon: Shield,
        color: 'from-blue-500 to-cyan-600',
        skills: ['Azure Sentinel', 'Azure Defender', 'Microsoft Entra', 'Security Copilot', 'GCP Security', 'CSPM', 'CWPP', 'CASB']
      },
      {
        category: 'Infrastructure as Code',
        icon: Code,
        color: 'from-purple-500 to-indigo-600',
        skills: ['Terraform', 'Ansible', 'CloudFormation', 'Jsonnet', 'Helm Charts', 'Workspace Management', 'State Strategies']
      },
      {
        category: 'CI/CD & DevSecOps',
        icon: Server,
        color: 'from-red-500 to-pink-600',
        skills: ['Jenkins', 'GitLab CI', 'Docker Security', 'Container Hardening', 'API Security', 'Git Security', 'Policy Enforcement']
      },
      {
        category: 'Vulnerability Management',
        icon: AlertTriangle,
        color: 'from-yellow-500 to-orange-600',
        skills: ['Nessus', 'Qualys', 'InsightVM', 'Patch Management', 'CVE Analysis', 'Risk Prioritization', 'Remediation']
      },
      {
        category: 'Threat Management',
        icon: Activity,
        color: 'from-teal-500 to-green-600',
        skills: ['Splunk ES', 'CrowdStrike Falcon', 'Threat Hunting', 'IOC Analysis', 'TTP Profiling', 'Anomaly Detection', 'SOAR']
      }
    ],
    offensive: [
      {
        category: 'Penetration Testing',
        icon: Crosshair,
        color: 'from-green-500 to-emerald-600',
        skills: ['Full-Stack Pen Testing', 'Web App Testing', 'API Security Testing', 'Mobile Testing (iOS/Android)', 'Internal Network Audits', 'Cloud Pen Testing']
      },
      {
        category: 'Red Team & Emulation',
        icon: Shield,
        color: 'from-red-500 to-pink-600',
        skills: ['Adversary Emulation', 'Purple Teaming', 'MITRE ATT&CK TTPs', 'Post-Exploitation', 'Lateral Movement', 'C2 Operations']
      },
      {
        category: 'Exploitation Tools',
        icon: Terminal,
        color: 'from-purple-500 to-indigo-600',
        skills: ['Burp Suite Pro', 'Metasploit', 'Cobalt Strike', 'Sliver', 'Havoc', 'Nmap', 'Wireshark', 'Kali Linux']
      },
      {
        category: 'AI & LLM Security',
        icon: Database,
        color: 'from-blue-500 to-cyan-600',
        skills: ['Prompt Injection Testing', 'Jailbreak Testing', 'PyRIT', 'Promptfoo', 'Garak', 'LangChain Security', 'OWASP LLM Top 10']
      },
      {
        category: 'Application Vulnerabilities',
        icon: AlertTriangle,
        color: 'from-yellow-500 to-orange-600',
        skills: ['XSS', 'SQL Injection', 'IDOR', 'Container Escapes', 'IAM Misconfigurations', 'SSRF', 'Deserialization']
      },
      {
        category: 'Bug Bounty & Reporting',
        icon: FileSearch,
        color: 'from-teal-500 to-green-600',
        skills: ['Bug Bounty Triage', 'Vulnerability Reporting', 'Remediation Guidance', 'SAST/DAST', 'Dependency Checks', 'Secure Code Review']
      }
    ],
    sre: [
      {
        category: 'Container Orchestration',
        icon: Server,
        color: 'from-green-500 to-emerald-600',
        skills: ['Kubernetes', 'Docker', 'ReplicaSets', 'Pod Configuration', 'Cluster Management', 'Kubelet', 'Microservices']
      },
      {
        category: 'Observability',
        icon: Activity,
        color: 'from-blue-500 to-cyan-600',
        skills: ['Prometheus', 'Grafana', 'Splunk SIEM', 'Elasticsearch', 'Logstash', 'Kibana (ELK)', 'Continuous Monitoring']
      },
      {
        category: 'Programming & Scripting',
        icon: Code,
        color: 'from-purple-500 to-indigo-600',
        skills: ['Python', 'Go', 'Ruby', 'SQL', 'Bash', 'PowerShell', 'JSON/YAML', 'Regular Expressions']
      },
      {
        category: 'Incident Response',
        icon: AlertTriangle,
        color: 'from-red-500 to-pink-600',
        skills: ['Disaster Recovery', 'Postmortem Analysis', 'Playbook Automation', 'Alert Triage', 'Root Cause Analysis', 'SOAR', 'NIST 800-61']
      },
      {
        category: 'Cloud Platforms',
        icon: Cloud,
        color: 'from-yellow-500 to-orange-600',
        skills: ['AWS', 'GCP', 'Azure', 'VPC', 'IAM', 'CloudTrail', 'AWS KMS', 'Security Groups']
      },
      {
        category: 'Operating Systems',
        icon: Terminal,
        color: 'from-teal-500 to-green-600',
        skills: ['Linux (Ubuntu, CentOS, Kali)', 'Windows Server', 'macOS', 'iOS', 'Android', 'System Hardening']
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
            Comprehensive expertise across security architecture, cloud infrastructure, offensive testing, and reliability engineering
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
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-[#155724] text-white shadow-lg shadow-[#155724]/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-[#155724]/30 hover:border-[#155724]/50'
                }`}
            >
              <tab.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === tab.id ? 'rotate-0' : ''
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
