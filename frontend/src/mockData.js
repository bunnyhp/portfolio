// Mock data for Harshil's Cybersecurity Portfolio

export const personalInfo = {
  name: "Harshil Patel",
  title: "Security Engineer",
  tagline: "Securing digital assets through SIEM analysis, incident response, and threat hunting.",
  email: "mail2harshilppatel@gmail.com",
  phone: "+1 (312) 438-0016",
  location: "Toledo, Ohio",
  linkedin: "https://www.linkedin.com/in/harshil-patel-security-engineer/",
  github: "https://github.com/bunnyhp",
  bio: "A highly driven and accomplished Security Engineer with extensive hands-on experience in SIEM analysis, incident response, and threat hunting. Currently serving as an Education Coach at The University of Toledo, supporting individuals with disabilities in their academic and professional development. Previously worked as a Security Operations Center Analyst at CRS Laboratories, where I monitored security events using Splunk SIEM, analyzed 50,000+ daily events, and conducted threat hunting exercises using MITRE ATT&CK framework. Specialized in log correlation, threat hunting, cloud security, and vulnerability management. Passionate about cybersecurity and making a meaningful impact through education and mentorship."
};

export const skills = [
  {
    category: "Cybersecurity",
    items: [
      { name: "SIEM Analysis", level: 95 },
      { name: "Incident Response", level: 92 },
      { name: "Threat Hunting", level: 90 },
      { name: "Log Correlation", level: 93 },
      { name: "False Positive Reduction", level: 88 },
      { name: "Documentation Development", level: 90 },
      { name: "Threat Advisories", level: 85 },
      { name: "IOC Import & Analysis", level: 90 }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML & CSS", level: 95 }
    ]
  },
  {
    category: "Programming & Development",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Web Application Security", level: 88 },
      { name: "API Security", level: 85 }
    ]
  },
  {
    category: "Security Tools & Technologies",
    items: [
      { name: "SIEM Platforms", level: 95 },
      { name: "Security Event Analysis", level: 93 },
      { name: "Ransomware Response", level: 90 },
      { name: "Email Compromise Analysis", level: 90 },
      { name: "Malware Analysis", level: 88 },
      { name: "Threat Intelligence", level: 85 }
    ]
  }
];

export const experience = [
  {
    id: 1,
    title: "Education Coach",
    company: "The University of Toledo",
    location: "Toledo, Ohio Metropolitan Area",
    period: "January 2025 - May 2025",
    type: "Part-time",
    description: "Supporting individuals with disabilities in their academic and professional development under the Toledo Transition Program, providing comprehensive coaching and mentorship.",
    highlights: [
      "Assisting participants during internships by providing guidance on workplace expectations, communication, and skill development",
      "Helping students with academic tasks, reinforcing learning strategies, and ensuring accessibility accommodations",
      "Tailoring assistance based on each participant's strengths, challenges, and career goals",
      "Coordinating with local businesses to facilitate internship opportunities and hands-on learning experiences",
      "Encouraging self-advocacy, independence, and confidence while fostering an inclusive and supportive environment",
      "Enhanced leadership, communication, and mentoring skills while making meaningful impact in transition to independent adulthood"
    ],
    technologies: ["Mentorship", "Education", "Career Development", "Accessibility", "Community Engagement", "Leadership", "Communication"]
  },
  {
    id: 2,
    title: "Security Operations Center Analyst",
    company: "CRS Laboratories - Certified Reference Standards",
    location: "North Carolina, United States",
    period: "December 2023 - December 2024",
    type: "Internship",
    description: "Monitored security events using Splunk SIEM, conducted threat hunting exercises, and created security dashboards for executive leadership.",
    highlights: [
      "Monitored security events using Splunk SIEM, analyzing 50,000+ daily events to identify indicators of compromise and potential security incidents",
      "Conducted threat hunting exercises using MITRE ATT&CK framework, discovering and mitigating 5 previously undetected advanced threats",
      "Created security dashboards and reports for executive leadership, providing visibility into security posture and risk metrics"
    ],
    technologies: ["Splunk SIEM", "MITRE ATT&CK", "Threat Hunting", "IOC Analysis", "Security Dashboards", "Risk Metrics", "Web Application Security", "Firewalls"]
  },
  {
    id: 3,
    title: "Cybersecurity Operations Engineer",
    company: "ErpBotHub Pvt Ltd",
    location: "Ahmedabad, Gujarat, India",
    period: "April 2022 - August 2023",
    type: "Full-time",
    description: "Secured enterprise infrastructure supporting 10,000+ users by implementing defense-in-depth strategies, cloud security controls, and vulnerability management programs.",
    highlights: [
      "Secured enterprise infrastructure supporting 10,000+ users by implementing defense-in-depth strategies including network segmentation, endpoint protection, and SIEM monitoring, reducing security incidents by 87%",
      "Deployed cloud security controls for AWS environments including GuardDuty, CloudTrail, and IAM policies, protecting critical business applications and achieving 100% compliance with security baselines",
      "Implemented vulnerability management program using Nessus and custom Python automation, identifying and remediating 23 critical vulnerabilities before exploitation across servers, endpoints, and network devices",
      "Configured and managed security tools including Palo Alto firewalls, Splunk SIEM, and CrowdStrike EDR, correlating events across 500+ endpoints to detect advanced persistent threats",
      "Developed incident response procedures aligned with NIST 800-61, reducing mean time to respond (MTTR) from 4 hours to 45 minutes through automated playbooks and orchestration",
      "Led security architecture reviews for SAP implementations, ensuring secure configuration of authentication, encryption, and access controls for enterprise resource planning systems",
      "Conducted security assessments including penetration testing and vulnerability scanning, delivering risk-based remediation roadmaps to executive leadership"
    ],
    technologies: ["AWS", "GuardDuty", "CloudTrail", "IAM", "Palo Alto Firewalls", "Splunk SIEM", "CrowdStrike EDR", "Nessus", "Python", "NIST 800-61", "SAP Security", "Penetration Testing", "Vulnerability Assessment", "Firewalls"]
  },
  {
    id: 4,
    title: "Security Analyst",
    company: "SynZeal Research Pvt Ltd",
    location: "Ahmedabad, Gujarat, India",
    period: "July 2020 - March 2022",
    type: "Full-time",
    description: "Hardened Linux systems supporting critical research infrastructure, managed endpoint security, and performed security audits ensuring ISO 27001 compliance.",
    highlights: [
      "Hardened Linux systems supporting critical research infrastructure, implementing CIS benchmarks, firewall rules, and intrusion detection systems across 200+ endpoints",
      "Managed endpoint security using antivirus, host-based firewalls, and security baselines, maintaining 99.9% protection against malware and unauthorized access",
      "Performed security audits and compliance assessments, ensuring adherence to ISO 27001 standards and implementing corrective actions for identified gaps",
      "Developed security awareness training materials and conducted sessions for 100+ employees, reducing phishing susceptibility by 75%"
    ],
    technologies: ["Linux", "CIS Benchmarks", "Firewalls", "IDS", "Endpoint Protection", "ISO 27001", "Security Audits", "Security Awareness Training", "Vulnerability Assessment", "Bash/Linux Shell"]
  },
  {
    id: 5,
    title: "Information Technology Help Desk",
    company: "GAP-ISRCDE",
    location: "Ahmedabad, Gujarat, India",
    period: "March 2016 - September 2020",
    type: "Part-time",
    description: "Managed and maintained the organization's IT infrastructure, provided end-user support and training, and implemented basic cybersecurity practices for a resource-constrained NGO.",
    highlights: [
      "Managed and maintained the organization's IT infrastructure, ensuring all systems were up-to-date, secure, and resistant to malware and phishing attacks",
      "Provided end-user support and training for elderly NGO staff, improving digital literacy and operational efficiency",
      "Implemented basic cybersecurity practices, such as software updates, firewall setup, and endpoint protection",
      "Designed digital content including banners and event promotions for social media, increasing outreach and engagement by 40%",
      "Led hardware troubleshooting and system optimization for staff devices, resulting in a 70% reduction in tech support incidents",
      "Oversaw network setup and basic administrative configuration, contributing to a stable and secure IT environment for a resource-constrained NGO"
    ],
    technologies: ["IT Support", "Network Administration", "Cybersecurity", "Firewall Configuration", "Endpoint Protection", "Digital Content Design", "Hardware Troubleshooting", "System Optimization", "Vulnerability Assessment", "Network Security"]
  }
];

export const projects = [
  {
    id: 1,
    title: "CyberForce Competition (DOE)",
    category: "Competitions",
    spotlight: true,
    description: "Team Captain leading cybersecurity defense simulation. Achieved 5308 points through vulnerability mitigation, incident response, and defense strategies.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    tech: ["Cyber Defense", "Incident Response", "Vulnerability Mitigation", "Team Leadership", "Security Simulation"],
    year: "2024",
    link: "https://www.linkedin.com/posts/harshil-patel-security-engineer_cyberforcecompetition-cyberforce2024-cybersecurity-activity-7266242172541124609-Jw_w",
    details: [
      "Led team as Captain in Department of Energy CyberForce Competition",
      "Scored 5308 points through effective defense strategies",
      "Mitigated vulnerabilities and implemented incident response procedures",
      "Coordinated team defense simulation and security operations",
      "Demonstrated expertise in real-world cybersecurity scenarios"
    ]
  },
  {
    id: 2,
    title: "Evolution of Clinical Trials - Pitch Competition",
    category: "Competitions",
    link: "https://github.com/bunnyhp/Certificates/blob/main/20200207061351_IMG_7892.JPG",
    spotlight: true,
    description: "State-level pitch competition achieving 3rd rank on big-data driven clinical trial automation, focusing on security and privacy in healthcare data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["Big Data Analytics", "Clinical Trials", "Data Privacy", "Automation", "Healthcare Security"],
    year: "2021",
    details: [
      "Achieved 3rd rank in state-level pitch competition",
      "Developed big-data driven clinical trial automation solution",
      "Focused on security and privacy in healthcare data",
      "Presented innovative approach to clinical trial management",
      "Demonstrated expertise in healthcare cybersecurity"
    ]
  },
  {
    id: 3,
    title: "Securing IoT Technologies using Raspberry Pi",
    category: "Research",
    spotlight: true,
    description: "University of Toledo project - Built custom firewall & intrusion detection system for IoT devices, automated vulnerability scanning, and integrated MQTT security protocols.",
    image: "https://raw.githubusercontent.com/bunnyhp/netguard-pro/main/docs/screenshots/dashboard-main.png",
    link: "https://github.com/bunnyhp/netguard-pro/tree/main",
    tech: ["Raspberry Pi", "IoT Security", "Firewall", "IDS", "MQTT", "Network Segmentation", "Python"],
    year: "2023-2024",
    details: [
      "Built custom firewall and intrusion detection system for IoT devices",
      "Automated vulnerability scanning scripts for IoT networks",
      "Integrated MQTT security protocols for secure IoT communication",
      "Applied network segmentation for IoT device isolation",
      "Core project demonstrating IoT Security expertise at University of Toledo"
    ]
  },
  {
    id: 4,
    title: "Automated Vulnerability Categorization & Prioritization",
    category: "Research",
    spotlight: true,
    description: "Analyzed campus-wide vulnerabilities using Vulners.com API for remediation and prioritization. Applied machine learning and product-vision strategies for security automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Vulners.com API", "Machine Learning", "Vulnerability Assessment", "Python", "Automation", "Security Analytics"],
    year: "2024",
    details: [
      "Analyzed campus-wide vulnerabilities for remediation and prioritization",
      "Integrated Vulners.com API for vulnerability intelligence",
      "Applied machine learning for automated categorization",
      "Developed product-vision strategies for future security automation",
      "Enhanced vulnerability management efficiency"
    ]
  },
  {
    id: 5,
    title: "iOS Forensic Demonstration - Cybersecurity Fundamentals",
    category: "Research",
    description: "Built a forensic lab using iLEAPP tool on iPhone 8 Plus for forensic artifact extraction, demonstrating mobile device security and investigation techniques.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    tech: ["iLEAPP", "iOS Forensics", "Mobile Security", "Digital Forensics", "iPhone Analysis"],
    year: "2024",
    details: [
      "Built forensic lab using iLEAPP tool on iPhone 8 Plus",
      "Extracted forensic artifacts for security analysis",
      "Demonstrated mobile device investigation techniques",
      "Applied cybersecurity fundamentals in practical scenario",
      "Showcased expertise in digital forensics"
    ]
  },
  {
    id: 6,
    title: "Honeypot to Analyze Cyber Threats",
    category: "DevSecOps",
    description: "Developed and deployed honeypot systems to attract, analyze, and study cyber threats, providing valuable threat intelligence and attack pattern analysis.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tech: ["Honeypot", "Threat Intelligence", "Threat Analysis", "Python", "Network Security", "SIEM"],
    year: "2024",
    details: [
      "Deployed honeypot systems to attract and analyze cyber threats",
      "Collected threat intelligence and attack pattern data",
      "Analyzed attack vectors and malicious behavior",
      "Integrated with SIEM for threat correlation",
      "Enhanced security monitoring and threat detection capabilities"
    ]
  },
  {
    id: 7,
    title: "Password Strength Checker with Data Breach Detection",
    category: "Web Security",
    description: "Developed password strength checker with data breach detection capabilities, checking passwords against known breach databases and providing security recommendations.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
    tech: ["Password Security", "Data Breach Detection", "Have I Been Pwned API", "Python", "Web Security"],
    year: "2024",
    details: [
      "Implemented password strength analysis algorithms",
      "Integrated data breach detection using breach databases",
      "Provided real-time security recommendations",
      "Enhanced user security awareness",
      "Protected against credential stuffing attacks"
    ]
  },
  {
    id: 8,
    title: "Automate Threat Intelligence with Custom SIEM",
    category: "DevSecOps",
    description: "Developed custom SIEM solution for automated threat intelligence collection, IOC import, and threat hunting, streamlining security operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["SIEM", "Threat Intelligence", "IOC Analysis", "Automation", "Python", "Threat Hunting"],
    year: "2024",
    details: [
      "Built custom SIEM for automated threat intelligence",
      "Implemented IOC import and analysis capabilities",
      "Automated threat hunting workflows",
      "Streamlined security operations and incident response",
      "Enhanced threat detection and response times"
    ]
  },
  {
    id: 9,
    title: "Robotic Automation with PLC - Modtech",
    category: "DevSecOps",
    description: "Integrated robotics with PLC controllers at Modtech, implemented secure network segmentation, and ensured operational technology security for industrial automation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tech: ["PLC", "Robotics", "Network Segmentation", "OT Security", "Industrial Automation", "ASP.NET"],
    year: "2022-2023",
    details: [
      "Integrated robotics with PLC controllers for industrial automation",
      "Implemented secure network segmentation for OT systems",
      "Ensured operational technology (OT) security",
      "Applied cybersecurity principles to industrial control systems",
      "Protected critical automation infrastructure"
    ]
  },
  {
    id: 10,
    title: "SAP Implementation with Cybersecurity Controls",
    category: "Enterprise Security",
    description: "SAP Business One implementation for two companies with server hardening, secure deployment, and comprehensive cybersecurity controls for enterprise resource planning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["SAP Business One", "Server Hardening", "Access Control", "Encryption", "Enterprise Security", "RBAC"],
    year: "2022-2023",
    details: [
      "Implemented SAP Business One for two companies",
      "Performed server hardening and secure configuration",
      "Implemented access control and encryption",
      "Applied comprehensive cybersecurity controls",
      "Ensured secure enterprise resource planning"
    ]
  },
  {
    id: 11,
    title: "AWS Hosting for Nirma University App",
    category: "Cloud Security",
    description: "Migrated Nirma University application to AWS with IAM policies, encryption, and secure cloud architecture, ensuring high availability and security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tech: ["AWS", "IAM", "Encryption", "Cloud Migration", "VPC", "Security Groups"],
    year: "2023",
    details: [
      "Migrated university application to AWS cloud infrastructure",
      "Implemented IAM policies for secure access control",
      "Configured encryption for data at rest and in transit",
      "Designed secure cloud architecture with VPC and security groups",
      "Ensured high availability and security compliance"
    ]
  },
  {
    id: 12,
    title: "Server Configuration & Deployment - Dell PowerEdge",
    category: "Infrastructure Security",
    description: "Server configuration and deployment for two companies using Dell PowerEdge servers, RDP via Proxmox, and RBAC security implementation.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    tech: ["Dell PowerEdge", "Proxmox", "RDP", "RBAC", "Server Management", "Virtualization"],
    year: "2022-2023",
    details: [
      "Configured and deployed Dell PowerEdge servers for enterprise clients",
      "Implemented RDP access via Proxmox virtualization platform",
      "Applied Role-Based Access Control (RBAC) for security",
      "Ensured secure server configuration and management",
      "Maintained high availability and security standards"
    ]
  },
  {
    id: 13,
    title: "ERPBotHub Website Development",
    category: "Web Security",
    description: "Built and secured ERPBotHub corporate website with modern security practices, secure hosting, and comprehensive web security implementation.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tech: ["Web Development", "SSL/TLS", "WAF", "Security Headers", "Web Security"],
    year: "2022",
    details: [
      "Developed and deployed ERPBotHub corporate website",
      "Implemented comprehensive web security measures",
      "Configured SSL/TLS and security headers",
      "Applied secure hosting and deployment practices",
      "Ensured website security and performance"
    ],
    liveUrl: "https://www.erpbothub.com"
  },
  {
    id: 14,
    title: "AI-Driven ID Scanning System - Bedford Inn",
    category: "Enterprise Security",
    description: "Developed AI-driven ID scanning system for Bedford Inn (USA) with blacklist verification and secured hotel network infrastructure.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech: ["AI/ML", "ID Scanning", "Blacklist Verification", "Network Security", "Python"],
    year: "2023-2024",
    details: [
      "Developed AI-driven ID scanning system for hotel security",
      "Implemented blacklist verification for guest screening",
      "Secured hotel network infrastructure",
      "Enhanced physical and digital security measures",
      "Automated security screening processes"
    ]
  },
  {
    id: 15,
    title: "Network Configuration - Bedford Inn, Michigan",
    category: "Infrastructure Security",
    description: "Designed and implemented router & switch configurations for Bedford Inn, Michigan, securing web and guest network connectivity with proper segmentation.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
    tech: ["Network Configuration", "Router Configuration", "Switch Configuration", "Network Segmentation", "Guest Network Security"],
    year: "2023-2024",
    details: [
      "Designed router and switch configurations for hotel network",
      "Secured web and guest network connectivity",
      "Implemented network segmentation for security",
      "Ensured proper isolation between guest and management networks",
      "Enhanced network security and performance"
    ]
  },
  {
    id: 16,
    title: "Backend Automation - SynZeal Research",
    category: "Enterprise Security",
    description: "Developed backend automation for supply-chain system using .NET, database integration, and HPLC R&D support with security-focused implementation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tech: [".NET", "Database Integration", "Supply Chain Systems", "Automation", "Backend Security"],
    year: "2020-2022",
    details: [
      "Developed backend automation for supply-chain management system",
      "Implemented .NET-based solutions with database integration",
      "Provided HPLC R&D support with secure data handling",
      "Applied security best practices in pharmaceutical systems",
      "Enhanced system efficiency and security"
    ]
  },
  {
    id: 17,
    title: "Secure File Storage System with Encryption",
    category: "Enterprise Security",
    description: "Developed secure file storage system with encryption capabilities, ensuring data confidentiality and integrity for sensitive information.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["File Encryption", "Secure Storage", "Data Protection", "Cryptography", "Python"],
    year: "2022-2023",
    details: [
      "Implemented encryption for file storage system",
      "Ensured data confidentiality and integrity",
      "Applied cryptographic best practices",
      "Protected sensitive information from unauthorized access",
      "Enhanced data security posture"
    ]
  },
  {
    id: 18,
    title: "Vulnerability Assessment and Penetration Testing Lab",
    category: "DevSecOps",
    description: "Built and configured vulnerability assessment and penetration testing lab environment for hands-on security testing and research.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["Penetration Testing", "Vulnerability Assessment", "Security Testing", "Kali Linux", "Security Tools"],
    year: "2023-2024",
    details: [
      "Built comprehensive penetration testing lab environment",
      "Configured vulnerability assessment tools and platforms",
      "Conducted hands-on security testing and research",
      "Applied ethical hacking methodologies",
      "Enhanced security testing capabilities"
    ]
  },
  {
    id: 19,
    title: "Automated Vulnerability Scanner with Python",
    category: "DevSecOps",
    description: "Developed automated vulnerability scanner using Python, streamlining vulnerability detection and reporting processes.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
    tech: ["Python", "Vulnerability Scanning", "Automation", "Security Tools", "Nessus API"],
    year: "2023-2024",
    details: [
      "Developed automated vulnerability scanning solution",
      "Streamlined vulnerability detection processes",
      "Automated scanning and reporting workflows",
      "Integrated with security tools and APIs",
      "Enhanced vulnerability management efficiency"
    ]
  },
  {
    id: 20,
    title: "Cloud Security Monitoring Dashboard",
    category: "Cloud Security",
    description: "Developed cloud security monitoring dashboard providing real-time visibility into cloud security posture, threats, and compliance status.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["Cloud Security", "Monitoring Dashboard", "AWS", "Security Analytics", "Python", "React"],
    year: "2024",
    details: [
      "Built cloud security monitoring dashboard",
      "Provided real-time visibility into security posture",
      "Monitored threats and compliance status",
      "Integrated with cloud security services",
      "Enhanced cloud security operations"
    ]
  },
  {
    id: 21,
    title: "HomeLab Infrastructure",
    category: "Infrastructure Security",
    description: "Personal homelab setup demonstrating hands-on infrastructure management, server configuration, and security practices in a home environment.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["Homelab", "Server Management", "Infrastructure", "Linux", "Virtualization"],
    year: "Ongoing",
    githubUrl: "https://github.com/bunnyhp/HOmeLab",
    details: [
      "Personal infrastructure setup for learning and experimentation",
      "Server configuration and management",
      "Network security and segmentation",
      "Virtualization and containerization",
      "Hands-on practice with security tools"
    ]
  },
  {
    id: 22,
    title: "Certificates Portfolio",
    category: "Academic",
    description: "Comprehensive collection of professional certifications and achievements, showcasing expertise in cybersecurity, cloud computing, and various technical domains.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: ["Certifications", "Portfolio", "Documentation"],
    year: "Ongoing",
    githubUrl: "https://github.com/bunnyhp/Certificates",
    details: [
      "Organized collection of professional certifications",
      "Cybersecurity and cloud computing credentials",
      "Technical and professional development achievements",
      "Continuous learning and skill development"
    ]
  }
];

export const certifications = [
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google", year: "Completed", description: "Network security, SIEM, incident response fundamentals" },
  { name: "SANS NetWars Core Certificate", issuer: "SANS", year: "Completed", description: "Hands-on threat detection & incident-response labs" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "Completed", description: "IAM, GuardDuty, CloudTrail, shared-responsibility model" },
  { name: "Linux Essentials", issuer: "Linux Professional Institute", year: "Completed", description: "System hardening & log analysis" },
  { name: "Python for Cybersecurity", issuer: "Cybersecurity Training", year: "Completed", description: "Automation & SOC playbooks" },
  { name: "SQL & PHP Secure Development", issuer: "Security Training", year: "Completed", description: "Securing backend services, validating input, controlling access" },
  { name: "Web Development Security Basics", issuer: "Security Training", year: "Completed", description: "HTTPS, firewall configs, secure web app structure" },
  { name: "Graphic Design Bootcamp (PS, IL, AE)", issuer: "Design Training", year: "Completed", description: "Useful for phishing awareness training and visual reporting" },
  { name: "Ethical Hacking – Most Advanced Level Penetration Testing", issuer: "Security Training", year: "Completed", description: "Red-team tactics & exploit development" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "Scheduled Jul 2025", description: "Core security architecture & operations" },
  { name: "Google Professional Cloud Security Engineer", issuer: "Google", year: "Completed", description: "GCP identity, access, logging, compliance" },
  { name: "OSINT Fundamentals / CTIA", issuer: "Security Training", year: "Completed", description: "Threat-intelligence pipeline & feed triage" }
];

export const education = [
  {
    degree: "Master's in Cyber Security Systems",
    institution: "Florida Institute of Technology",
    location: "Florida, USA",
    period: "August 2021 - May 2023",
    gpa: "Completed",
    description: "Advanced studies in cybersecurity systems, focusing on SIEM analysis, incident response, threat hunting, and security operations. Gained expertise in security event analysis, log correlation, and threat intelligence."
  },
  {
    degree: "Bachelor's in Cyber Security Systems",
    institution: "SUNY at Albany",
    location: "Albany, NY, USA",
    period: "August 2016 - May 2019",
    gpa: "Completed",
    description: "Comprehensive foundation in cybersecurity principles, network security, security operations, and incident response. Developed strong analytical and problem-solving skills in security contexts."
  }
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
