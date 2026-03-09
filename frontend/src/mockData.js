// Mock data for Harshil's Security Architecture & Engineering Portfolio

export const personalInfo = {
  name: "Harshil Patel",
  title: "Security Architect & Engineer",
  titles: [
    "AI Security Architect",
    "Senior Site Reliability Engineer",
    "Multi-Cloud Security Architect",
    "Staff Offensive Security Engineer"
  ],
  tagline: "Architecting secure infrastructure across AI, cloud, and enterprise environments — from offensive testing to production reliability.",
  email: "mail2harshilppatel@gmail.com",
  phone: "+1 (312) 438-0016",
  location: "Austin, Texas",
  linkedin: "https://www.linkedin.com/in/harshil-patel-security-engineer/",
  github: "https://github.com/bunnyhp",
  portfolio: "portfolio.autoneties.com",
  bio: "AI Security Architect with over eight years designing secure infrastructures for financial and enterprise environments. Architected scalable security frameworks across Azure and AWS, integrating SABSA methodologies to align technical controls with business objectives. Directed DevSecOps teams in securing data pipelines and ML models, reducing adversarial threat risks by implementing rigorous identity and API protection standards. Engineered automated compliance workflows that ensured adherence to NIST and financial regulations while accelerating deployment cycles. Expert in translating complex architectural requirements into execution, fostering a culture of security-by-design across agile engineering teams."
};

export const skills = [
  {
    category: "AI Security & ML",
    items: [
      { name: "Adversarial Defense", level: 92 },
      { name: "Model Hardening", level: 90 },
      { name: "LLM Security", level: 88 },
      { name: "Data Privacy", level: 90 },
      { name: "Inference Protection", level: 85 },
      { name: "Algorithm Auditing", level: 87 },
      { name: "Bias Detection", level: 82 },
      { name: "Prompt Injection Testing", level: 90 }
    ]
  },
  {
    category: "Cloud Architecture",
    items: [
      { name: "AWS (GuardDuty, Config)", level: 95 },
      { name: "Azure (Sentinel, Defender)", level: 92 },
      { name: "GCP Security", level: 85 },
      { name: "IAM & Zero Trust", level: 93 },
      { name: "VPC Design", level: 90 },
      { name: "KMS Encryption", level: 88 },
      { name: "Landing Zones", level: 85 }
    ]
  },
  {
    category: "Offensive Security",
    items: [
      { name: "Penetration Testing", level: 92 },
      { name: "Red Teaming", level: 90 },
      { name: "Adversary Emulation", level: 88 },
      { name: "Bug Bounty Triage", level: 85 },
      { name: "Burp Suite Pro", level: 92 },
      { name: "Cobalt Strike", level: 85 },
      { name: "Metasploit", level: 90 },
      { name: "AppSec (SAST/DAST)", level: 88 }
    ]
  },
  {
    category: "SRE & DevSecOps",
    items: [
      { name: "Terraform & IaC", level: 90 },
      { name: "Kubernetes", level: 88 },
      { name: "Docker Security", level: 90 },
      { name: "Prometheus & Grafana", level: 85 },
      { name: "CI/CD Pipelines", level: 92 },
      { name: "Helm Charts", level: 85 },
      { name: "Incident Response", level: 95 },
      { name: "Postmortem Analysis", level: 90 }
    ]
  }
];

export const experience = [
  {
    id: 1,
    title: "Lead Security Architect",
    company: "CRS Laboratory",
    location: "Chicago, USA",
    period: "January 2024 - October 2025",
    type: "Full-time",
    description: "Architected enterprise-wide AI security standards and led multi-cloud security operations. Combined offensive testing, SRE practices, and threat hunting to protect data pipelines and ML models across distributed systems.",
    highlights: [
      "Architected AI security standards for enterprise data pipelines, integrating adversarial defense mechanisms that secured model training workflows against complex manipulation and unauthorized inference attacks",
      "Built comprehensive observability systems integrating Prometheus and Grafana to detect capacity bottlenecks across hundreds of isolated environments and production workloads",
      "Conducted proactive threat hunting with the MITRE ATT&CK framework, discovering and mitigating 5 previously undetected advanced threats",
      "Built automated SQL/Python workflows and security dashboards, reducing manual reporting time by 40% while providing executive leadership with real-time risk visibility",
      "Executed full-stack penetration testing across complex web applications and APIs using Burp Suite Professional, identifying critical application security flaws",
      "Embedded security-by-design principles into Agile DevOps cycles, automating policy enforcement within CI/CD pipelines to block non-compliant code before deployment"
    ],
    technologies: ["AI Security", "SABSA", "MITRE ATT&CK", "Prometheus", "Grafana", "Splunk SIEM", "Python", "Terraform", "Kubernetes", "Burp Suite", "NIST", "HIPAA"]
  },
  {
    id: 2,
    title: "Cloud Security & SRE Engineer",
    company: "ERPBotHub Pvt. Ltd",
    location: "Ahmedabad, India",
    period: "April 2022 - August 2023",
    type: "Full-time",
    description: "Engineered resilient AWS security architectures and managed cloud-native deployments. Led incident response, vulnerability management, and infrastructure automation for enterprise applications.",
    highlights: [
      "Engineered resilient AWS security architectures using Well-Architected Framework pillars, establishing identity boundaries and encryption standards for critical applications",
      "Deployed cloud security controls including GuardDuty, CloudTrail, and IAM policies, achieving 100% compliance with security baselines",
      "Implemented vulnerability management program using Nessus and custom Python automation, remediating 23 critical vulnerabilities before exploitation",
      "Configured Palo Alto firewalls, Splunk SIEM, and CrowdStrike EDR, correlating events across endpoints to detect advanced persistent threats",
      "Reduced mean time to respond (MTTR) from 4 hours to 45 minutes through automated playbooks and NIST 800-61 aligned incident response procedures",
      "Created Helm Charts for automated version upgrades and managed containerized applications with Kubernetes for high availability"
    ],
    technologies: ["AWS", "GuardDuty", "CloudTrail", "IAM", "Palo Alto", "Splunk SIEM", "CrowdStrike EDR", "Nessus", "Python", "Kubernetes", "Helm", "Terraform"]
  },
  {
    id: 3,
    title: "Network Security Analyst",
    company: "SynZeal Research Pvt. Ltd",
    location: "Ahmedabad, India",
    period: "June 2020 - March 2022",
    type: "Full-time",
    description: "Administered network security baselines and managed endpoint protection across research infrastructure. Conducted vulnerability assessments, patch management, and security compliance audits.",
    highlights: [
      "Administered network security baselines and firewall configurations, enforcing strict access control lists to minimize attack surface across research laboratory infrastructure",
      "Managed endpoint security using antivirus, host-based firewalls, and security baselines, maintaining protection against malware and unauthorized access",
      "Executed routine vulnerability assessments and patch management cycles, rapidly addressing critical CVEs to maintain system integrity",
      "Developed reusable infrastructure code using templating tools to standardize environment configurations and eliminate manual operations"
    ],
    technologies: ["Linux", "CIS Benchmarks", "Firewalls", "IDS/IPS", "Endpoint Protection", "ISO 27001", "Nmap", "Bash", "Vulnerability Assessment", "Network Security"]
  },
  {
    id: 4,
    title: "IT Help Desk & Network Administrator",
    company: "GAP-ISRCDE (NGO)",
    location: "Ahmedabad, India",
    period: "March 2016 - September 2020",
    type: "Part-time",
    description: "Modernized NGO's technology stack, managed IT infrastructure, and provided help desk support to 200+ users over 4 years.",
    highlights: [
      "Modernized NGO's tech stack, enhancing cybersecurity posture and training 8 staff in cybersecurity hygiene",
      "Provided IT help desk support to 200+ users for over 4 years",
      "Implemented basic cybersecurity practices including firewall setup and endpoint protection",
      "Led hardware troubleshooting and system optimization, reducing tech support incidents by 70%"
    ],
    technologies: ["IT Support", "Network Administration", "Cybersecurity", "Firewall Configuration", "Endpoint Protection"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise SOC Implementation",
    category: "Cloud Security",
    spotlight: true,
    description: "Designed and deployed enterprise SOC using Splunk Enterprise, integrating logs from 100+ sources. Achieved 95% threat detection rate with custom MITRE ATT&CK-based detection rules.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["Splunk Enterprise", "MITRE ATT&CK", "SOAR", "Threat Intelligence", "OSINT", "Python"],
    year: "2024",
    link: "https://github.com/bunnyhp/enterprise-soc-blueprint",
    details: [
      "Designed and deployed enterprise SOC using Splunk Enterprise, integrating logs from 100+ sources",
      "Developed custom detection rules based on MITRE ATT&CK tactics, achieving 95% threat detection rate",
      "Created automated incident response workflows using SOAR, reducing resolution time by 60%",
      "Implemented threat intelligence feeds from OSINT sources, enriching security events with contextual information"
    ]
  },
  {
    id: 2,
    title: "Cloud Security Architecture & Migration",
    category: "Cloud Security",
    spotlight: true,
    description: "Architected secure AWS environment implementing Well-Architected Framework security pillar. Deployed cloud-native security tools for continuous compliance monitoring.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tech: ["AWS", "VPC", "IAM", "GuardDuty", "Security Hub", "KMS", "TLS"],
    year: "2022-2023",
    link: "https://nirmauni.ac.in",
    details: [
      "Architected secure AWS environment implementing Well-Architected Framework security pillar",
      "Deployed cloud-native security tools including AWS GuardDuty, Security Hub, and Config",
      "Implemented data encryption at rest and in transit using KMS and TLS",
      "Created disaster recovery plan with RTO of 4 hours and RPO of 1 hour"
    ]
  },
  {
    id: 3,
    title: "Zero Trust Network Implementation",
    category: "Infrastructure Security",
    spotlight: true,
    description: "Built zero trust architecture using software-defined perimeter, micro-segmentation, and continuous verification with PKI-based certificate authentication.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["Zero Trust", "PKI", "Micro-segmentation", "NAC", "SDP", "Certificate Auth"],
    year: "2024",
    link: "https://github.com/bunnyhp/HOmeLab",
    details: [
      "Built zero trust architecture using software-defined perimeter and micro-segmentation",
      "Implemented certificate-based authentication using PKI for all network resources",
      "Deployed network access control enforcing device compliance before access",
      "Continuous verification model for all internal and external connections"
    ]
  },
  {
    id: 4,
    title: "CyberForce Competition (DOE)",
    category: "Competitions",
    spotlight: true,
    description: "Team Captain leading cybersecurity defense simulation. Scored 5,308 points and finished top quartile nationwide through vulnerability mitigation and incident response.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    tech: ["Cyber Defense", "Incident Response", "Blue Team", "Team Leadership", "Security Simulation"],
    year: "2024",
    link: "https://www.linkedin.com/posts/harshil-patel-security-engineer_cyberforcecompetition-cyberforce2024-cybersecurity-activity-7266242172541124609-Jw_w",
    details: [
      "Led six-member blue team as Captain in Department of Energy CyberForce Competition",
      "Scored 5,308 points and finished in the top quartile nationwide",
      "Mitigated vulnerabilities and implemented incident response procedures",
      "Coordinated team defense simulation and security operations"
    ]
  },
  {
    id: 5,
    title: "IoT Security Gateway & Threat Detection",
    category: "DevSecOps",
    spotlight: true,
    description: "Built Raspberry Pi-based IoT gateway with Snort IDS, MQTT hardening, TLS encryption, and ML-based anomaly detection achieving >90% accuracy.",
    image: "https://raw.githubusercontent.com/bunnyhp/netguard-pro/main/docs/screenshots/dashboard-main.png",
    tech: ["Raspberry Pi", "Snort IDS", "MQTT", "TLS", "Python", "Machine Learning", "NAC"],
    year: "2023-2024",
    link: "https://github.com/bunnyhp/netguard-pro/tree/main",
    details: [
      "Built Raspberry Pi-based IoT gateway with Snort IDS, MQTT hardening, and TLS encryption",
      "Automated vulnerability scanning and log correlation with Python",
      "Developed ML-based anomaly detection pipeline achieving >90% accuracy",
      "Contained lateral movement through automated threat response"
    ]
  },
  {
    id: 6,
    title: "Advanced Threat Hunting Platform",
    category: "DevSecOps",
    description: "Developed Python-based threat hunting tools integrating multiple threat intelligence feeds. Created ML models achieving 92% accuracy in anomaly detection.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tech: ["Python", "Threat Intelligence", "Machine Learning", "IOC Analysis", "Automation"],
    year: "2024",
    link: "https://github.com/bunnyhp/Vulnerability-Scanner",
    details: [
      "Developed Python-based threat hunting tools integrating multiple threat intelligence feeds",
      "Created machine learning models for anomaly detection achieving 92% accuracy",
      "Built automated response capabilities for common attack patterns",
      "Prevented lateral movement and data exfiltration through automated containment"
    ]
  },
  {
    id: 7,
    title: "Automated Vulnerability Categorization",
    category: "Research",
    spotlight: true,
    description: "Analyzed campus-wide vulnerabilities using Vulners.com API. Applied machine learning and product-vision strategies for automated security prioritization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Vulners.com API", "Machine Learning", "Python", "Automation", "Security Analytics"],
    year: "2024",
    link: "https://github.com/bunnyhp/Automated-Vulnerability-Categorization",
    details: [
      "Analyzed campus-wide vulnerabilities for remediation and prioritization",
      "Integrated Vulners.com API for vulnerability intelligence",
      "Applied machine learning for automated categorization",
      "Enhanced vulnerability management efficiency"
    ]
  },
  {
    id: 8,
    title: "Secure Hotel Network Infrastructure",
    category: "Infrastructure Security",
    description: "Designed and deployed secure hotel network with VLAN segmentation, firewall rules, VPN access, and AI-based ID verification at check-in.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
    tech: ["Network Design", "VLAN", "Firewall", "VPN", "IDS", "AI/ML ID Scanner"],
    year: "2023-2024",
    link: "https://www.bedfordsuite.com/",
    details: [
      "Designed router and switch configurations with VLAN segmentation",
      "Integrated AI-based ID verification at check-in for guest screening",
      "Delivered scalable, compliant, audit-ready infrastructure",
      "Improved uptime and secured guest/staff Wi-Fi"
    ]
  },
  {
    id: 9,
    title: "Password Strength Checker with Breach Detection",
    category: "Web Security",
    description: "Developed password strength checker with data breach detection capabilities, checking against known breach databases with real-time security recommendations.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
    tech: ["Password Security", "Data Breach Detection", "Have I Been Pwned API", "Python", "Web Security"],
    year: "2024",
    link: "https://github.com/bunnyhp/password-strength-checker",
    details: [
      "Implemented password strength analysis algorithms",
      "Integrated data breach detection using breach databases",
      "Provided real-time security recommendations",
      "Protected against credential stuffing attacks"
    ]
  },
  {
    id: 10,
    title: "Secure File Storage with Encryption",
    category: "Enterprise Security",
    description: "Developed secure file storage system with encryption capabilities, ensuring data confidentiality and integrity for sensitive information.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    tech: ["File Encryption", "Secure Storage", "Cryptography", "Python", "Data Protection"],
    year: "2022-2023",
    link: "https://github.com/bunnyhp/encryption",
    details: [
      "Implemented encryption for file storage system",
      "Ensured data confidentiality and integrity",
      "Applied cryptographic best practices",
      "Protected sensitive information from unauthorized access"
    ]
  },
  {
    id: 11,
    title: "iOS Forensic Demonstration",
    category: "Research",
    description: "Built forensic lab using iLEAPP tool on iPhone 8 Plus for forensic artifact extraction, demonstrating mobile device security and investigation techniques.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    tech: ["iLEAPP", "iOS Forensics", "Mobile Security", "Digital Forensics"],
    year: "2024",
    link: "https://github.com/bunnyhp/iOS-Forensic",
    details: [
      "Built forensic lab using iLEAPP tool on iPhone 8 Plus",
      "Extracted forensic artifacts for security analysis",
      "Demonstrated mobile device investigation techniques",
      "Showcased expertise in digital forensics"
    ]
  },
  {
    id: 12,
    title: "Robotic Automation with PLC - Modtech",
    category: "DevSecOps",
    description: "Integrated robotics with PLC controllers, implemented secure network segmentation, and ensured OT security for industrial automation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tech: ["PLC", "Robotics", "Network Segmentation", "OT Security", "ASP.NET"],
    year: "2022-2023",
    link: "http://www.modtechworld.com/#",
    details: [
      "Integrated robotics with PLC controllers for industrial automation",
      "Implemented secure network segmentation for OT systems",
      "Ensured operational technology security",
      "Protected critical automation infrastructure"
    ]
  },
  {
    id: 13,
    title: "ERPBotHub Website Development",
    category: "Web Security",
    description: "Built and secured ERPBotHub corporate website with SSL/TLS, WAF, security headers, and comprehensive web security implementation.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tech: ["Web Development", "SSL/TLS", "WAF", "Security Headers", "Web Security"],
    year: "2022",
    link: "https://www.erpbothub.com",
    details: [
      "Developed and deployed ERPBotHub corporate website",
      "Implemented comprehensive web security measures",
      "Configured SSL/TLS and security headers",
      "Applied secure hosting and deployment practices"
    ]
  },
  {
    id: 14,
    title: "AI-Driven ID Scanning System",
    category: "Enterprise Security",
    description: "Developed AI-driven ID scanning system for Bedford Inn with blacklist verification and secured hotel network infrastructure.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech: ["AI/ML", "ID Scanning", "Blacklist Verification", "Network Security", "Python"],
    year: "2023-2024",
    link: "https://github.com/bunnyhp/id-scanner",
    details: [
      "Developed AI-driven ID scanning system for hotel security",
      "Implemented blacklist verification for guest screening",
      "Secured hotel network infrastructure",
      "Automated security screening processes"
    ]
  },
  {
    id: 15,
    title: "Server Configuration - Dell PowerEdge",
    category: "Infrastructure Security",
    description: "Server configuration and deployment using Dell PowerEdge servers, RDP via Proxmox, and RBAC security implementation.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    tech: ["Dell PowerEdge", "Proxmox", "RDP", "RBAC", "Virtualization"],
    year: "2022-2023",
    link: "https://www.dell.com/support/kbdoc/en-us/000123958/dell-poweredge-server-start-up-guide",
    details: [
      "Configured and deployed Dell PowerEdge servers for enterprise clients",
      "Implemented RDP access via Proxmox virtualization platform",
      "Applied Role-Based Access Control for security",
      "Maintained high availability and security standards"
    ]
  },
  {
    id: 16,
    title: "Backend Automation - SynZeal Research",
    category: "Enterprise Security",
    description: "Developed backend automation for supply-chain system using .NET, database integration, and HPLC R&D support with security-focused implementation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tech: [".NET", "Database Integration", "Supply Chain", "Automation", "Backend Security"],
    year: "2020-2022",
    link: "https://www.synzeal.com/",
    details: [
      "Developed backend automation for supply-chain management",
      "Implemented .NET solutions with database integration",
      "Provided HPLC R&D support with secure data handling",
      "Enhanced system efficiency and security"
    ]
  },
  {
    id: 17,
    title: "Evolution of Clinical Trials - Pitch",
    category: "Competitions",
    description: "State-level pitch competition achieving 3rd rank on big-data driven clinical trial automation, focusing on security and privacy in healthcare data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["Big Data", "Clinical Trials", "Data Privacy", "Healthcare Security"],
    year: "2021",
    link: "https://github.com/bunnyhp/Certificates/blob/main/20200207061351_IMG_7892.JPG",
    details: [
      "Achieved 3rd rank in state-level pitch competition",
      "Developed big-data driven clinical trial automation solution",
      "Focused on security and privacy in healthcare data",
      "Demonstrated expertise in healthcare cybersecurity"
    ]
  }
];

export const certifications = [
  { name: "SANS NetWars Core Certificate", issuer: "SANS", year: "Completed", description: "Hands-on threat detection & incident-response labs" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google", year: "Completed", description: "Network security, SIEM, incident response fundamentals" },
  { name: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn", year: "Completed", description: "Microsoft Security Copilot, Entra, Defender, and Sentinel" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "Completed", description: "IAM, GuardDuty, CloudTrail, shared-responsibility model" },
  { name: "TryHackMe Red Teaming Lab Path", issuer: "TryHackMe", year: "Completed", description: "Execute adversary attack emulations as a Red Team Operator" },
  { name: "Linux Essentials", issuer: "Linux Professional Institute", year: "Completed", description: "System hardening & log analysis" },
  { name: "Python for Cybersecurity", issuer: "Cybersecurity Training", year: "Completed", description: "Automation & SOC playbooks" },
  { name: "SQL & PHP Secure Development", issuer: "Security Training", year: "Completed", description: "Securing backend services, validating input, controlling access" },
  { name: "Web Development Security Basics", issuer: "Security Training", year: "Completed", description: "HTTPS, firewall configs, secure web app structure" },
  { name: "Ethical Hacking – Advanced Penetration Testing", issuer: "Security Training", year: "Completed", description: "Red-team tactics & exploit development" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "Scheduled Jul 2026", description: "Core security architecture & operations" },
  { name: "Google Professional Cloud Security Engineer", issuer: "Google", year: "Completed", description: "GCP identity, access, logging, compliance" },
  { name: "OSINT Fundamentals / CTIA", issuer: "Security Training", year: "Completed", description: "Threat-intelligence pipeline & feed triage" }
];

export const education = [
  {
    degree: "Master of Science in Cybersecurity",
    institution: "University of Toledo",
    location: "Toledo, Ohio, USA",
    period: "August 2021 - May 2025",
    gpa: "GPA 3.9/4.0",
    description: "Advanced studies in cybersecurity systems, focusing on AI security, cloud architecture, threat hunting, and security operations. Capstone: Founder of Autoneties — AI-powered network security for smart homes."
  },
  {
    degree: "Bachelor of Science",
    institution: "Gujarat Technological University",
    location: "Gandhinagar, India",
    period: "August 2016 - May 2021",
    gpa: "CGPA 7.56/10",
    description: "Foundation in science and technology. Capstone: 'Evolution of Clinical Trials' — 3rd place, state-level pitch competition. Published: Comprehensive Review on Edible Vaccine in J. Drug Delivery Ther."
  }
];

// AI Workflow projects - interactive workflow pages with animations
export const workflows = [
  { id: 1, title: "Threat Detection & Response", path: "threat-detection.html", category: "Cybersecurity", description: "SIEM, UEBA, and SOAR-powered security operations reducing 50,000 daily alerts to 50 actionable incidents.", icon: "🛡️" },
  { id: 2, title: "Fraud Detection", path: "fraud-detection.html", category: "Finance", description: "Real-time transaction monitoring and anomaly detection for fraud prevention.", icon: "💰" },
  { id: 3, title: "Predictive Maintenance & Quality Control", path: "predictive-maintenance.html", category: "Manufacturing", description: "AI-driven equipment health monitoring and quality assurance.", icon: "⚙️" },
  { id: 4, title: "Demand Forecasting & Inventory", path: "demand-forecasting.html", category: "Supply Chain", description: "Intelligent demand prediction and inventory optimization.", icon: "📊" },
  { id: 5, title: "Customer Success Automation", path: "customer-success.html", category: "SaaS", description: "Automated customer health scoring and churn prevention.", icon: "🤝" },
  { id: 6, title: "Conversion Optimization Engine", path: "conversion-optimization.html", category: "Marketing", description: "AI-powered A/B testing and conversion funnel optimization.", icon: "📈" },
  { id: 7, title: "Property Management Automation", path: "property-management.html", category: "Real Estate", description: "Smart property operations and tenant experience automation.", icon: "🏠" },
  { id: 8, title: "Precision Farming Intelligence", path: "precision-farming.html", category: "Agriculture", description: "IoT and AI for crop yield optimization and resource management.", icon: "🌾" },
  { id: 9, title: "Route Optimization & Fleet Management", path: "route-optimization.html", category: "Logistics", description: "Dynamic routing and fleet coordination for delivery efficiency.", icon: "🚚" },
  { id: 10, title: "Patient Care Intelligence", path: "patient-care.html", category: "Healthcare", description: "Clinical decision support and care pathway optimization.", icon: "🏥" },
  { id: 11, title: "Intelligent Credit Underwriting", path: "credit-underwriting.html", category: "Finance", description: "AI-powered credit risk assessment and loan decisioning.", icon: "📋" },
  { id: 12, title: "Smart Grid Optimization", path: "smart-grid.html", category: "Energy", description: "Grid load balancing and renewable energy integration.", icon: "⚡" },
  { id: 13, title: "Autonomous Fleet Coordination", path: "fleet-coordination.html", category: "Logistics", description: "Multi-vehicle coordination and autonomous dispatch.", icon: "🚀" },
  { id: 14, title: "Adaptive Learning Platforms", path: "adaptive-learning.html", category: "EdTech", description: "Personalized learning paths and content recommendation.", icon: "📚" },
  { id: 15, title: "Molecular Discovery", path: "molecular-discovery.html", category: "Life Sciences", description: "AI-driven drug discovery and molecular design.", icon: "🧬" }
];

export const testimonials = [
  {
    id: 1,
    name: "John Mitchell",
    role: "CTO",
    company: "TechSecure Inc",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Harshil's approach to cybersecurity is comprehensive and proactive. His implementation of our AWS security architecture has been flawless."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Security Director",
    company: "CloudGuard Solutions",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Working with Harshil on the SAP security project was excellent. He understands both technical implementation and business requirements."
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "IT Manager",
    company: "Enterprise Systems Ltd",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Harshil's expertise in server security and infrastructure management has significantly improved our security posture. Highly recommended."
  }
];
