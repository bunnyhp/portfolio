// Mock data for Harshil's Cybersecurity Portfolio

export const personalInfo = {
  name: "Harshil Patel",
  title: "Cybersecurity Engineer",
  tagline: "Securing digital assets through threat detection, risk assessment, and vulnerability management.",
  email: "mail2harshilppatel@gmail.com",
  phone: "+1 (312) 438-0016",
  location: "Toledo, Ohio",
  linkedin: "https://linkedin.com/in/harshil-patel",
  github: "https://github.com/harshilpatel",
  bio: "A highly driven and accomplished Master's candidate in Cybersecurity with extensive hands-on experience in managing servers and developing web solutions. Passionate about the intersection of technology, security, and innovation, with a commitment to making the digital world safer. Specialized in threat detection, risk assessment, and vulnerability management with expertise in cloud security, DevSecOps, and penetration testing."
};

export const skills = [
  {
    category: "Cybersecurity",
    items: [
      { name: "Threat Detection & Analysis", level: 90 },
      { name: "Risk Assessment", level: 88 },
      { name: "Vulnerability Management", level: 92 },
      { name: "Network Security", level: 85 },
      { name: "Intrusion Detection Systems", level: 87 },
      { name: "Security Compliance", level: 80 }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS Security", level: 90 },
      { name: "Cloud Data Centers", level: 85 },
      { name: "Server Management (Dell PowerEdge)", level: 88 },
      { name: "Database Security", level: 82 },
      { name: "SSL/TLS Implementation", level: 90 }
    ]
  },
  {
    category: "DevSecOps",
    items: [
      { name: "Secure CI/CD Pipelines", level: 85 },
      { name: "Container Security", level: 80 },
      { name: "Infrastructure as Code", level: 78 },
      { name: "Security Automation", level: 82 }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "ASP.NET", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL & PHP", level: 82 },
      { name: "Web Application Security", level: 88 },
      { name: "API Security", level: 85 }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Firewalls & IDS", level: 90 },
      { name: "SAP Business One", level: 85 },
      { name: "Linux Systems", level: 82 },
      { name: "PLC & Robotics Security", level: 75 },
      { name: "Penetration Testing Tools", level: 80 }
    ]
  }
];

export const experience = [
  {
    id: 1,
    title: "System Engineer",
    company: "ERPBotHub",
    location: "Ahmedabad, India",
    period: "April 2022 - July 2023",
    type: "Full-time",
    description: "Led cybersecurity initiatives for SAP Business One implementations across multiple countries, ensuring robust security architecture and compliance.",
    highlights: [
      "Applied cybersecurity framework to SAP implementations protecting sensitive business data",
      "Managed Dell PowerEdge servers with focus on CIA triad (Confidentiality, Integrity, Availability)",
      "Implemented AWS cloud security with encryption, access controls, and monitoring",
      "Secured web applications with firewalls, SSL certificates, and IDS",
      "Designed security protocols for robotics automation using threat modeling and network segmentation",
      "Conducted security audits and vulnerability assessments for client infrastructure"
    ],
    technologies: ["AWS", "SAP Business One", "Dell PowerEdge", "ASP.NET", "Firewalls", "IDS", "SSL/TLS", "Network Segmentation"]
  },
  {
    id: 2,
    title: "Technical Support",
    company: "Synzeal Research Pvt LTD",
    location: "Ahmedabad, India",
    period: "July 2021 - March 2022",
    type: "Full-time",
    description: "Provided technical support for pharmaceutical supply chain systems while learning security best practices for backend database operations.",
    highlights: [
      "Gained knowledge of .NET programming and database security",
      "Assisted in securing supply chain management systems",
      "Implemented basic security measures for client-facing applications",
      "Learned about data protection in pharmaceutical industry"
    ],
    technologies: [".NET", "Database Security", "Supply Chain Systems"]
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "CRS Laboratory",
    location: "USA",
    period: "Current",
    type: "Part-time",
    description: "Analyzing data patterns and implementing security measures for laboratory information systems.",
    highlights: [
      "Conducting data analysis with security-first approach",
      "Implementing secure data handling procedures",
      "Ensuring compliance with data protection regulations"
    ],
    technologies: ["Python", "Data Analysis", "Security Compliance"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AWS Security Implementation for NIRMA University",
    category: "Cloud Security",
    spotlight: true,
    description: "Designed and implemented secure AWS hosting infrastructure for university application, including multi-layer security architecture.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tech: ["AWS", "CloudWatch", "IAM", "VPC", "Security Groups", "WAF"],
    year: "2023",
    details: [
      "Implemented multi-layered security architecture with WAF and DDoS protection",
      "Configured IAM policies following principle of least privilege",
      "Set up CloudWatch monitoring and alerting for security events",
      "Deployed secure VPC with public/private subnet architecture",
      "Achieved 99.9% uptime with zero security incidents"
    ]
  },
  {
    id: 2,
    title: "SAP Security Enhancement Project",
    category: "Enterprise Security",
    spotlight: true,
    description: "Led security enhancement initiatives for SAP Business One implementations in Kenya, focusing on access control and data protection.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tech: ["SAP Business One", "Access Control", "Encryption", "Audit Logging"],
    year: "2023",
    details: [
      "Implemented role-based access control (RBAC) for 50+ users",
      "Configured database encryption for sensitive financial data",
      "Set up comprehensive audit logging system",
      "Conducted security training for client team",
      "Reduced security vulnerabilities by 85%"
    ]
  },
  {
    id: 3,
    title: "Secure Robotics Automation System",
    category: "DevSecOps",
    spotlight: true,
    description: "Developed security framework for PLC-based robotics automation system at Modtech, ensuring operational technology security.",
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&q=80",
    tech: ["PLC", "ASP.NET", "Network Segmentation", "Threat Modeling", "Access Control"],
    year: "2022",
    details: [
      "Performed threat modeling for industrial control systems",
      "Implemented network segmentation to isolate critical systems",
      "Developed secure communication protocols for PLC integration",
      "Created access control mechanisms for automation systems",
      "Ensured compliance with industrial security standards"
    ]
  },
  {
    id: 4,
    title: "Server Security Infrastructure",
    category: "Infrastructure Security",
    description: "Configured and secured Dell PowerEdge servers for enterprise clients with comprehensive security measures.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["Dell PowerEdge", "Firewalls", "IDS/IPS", "SSL/TLS", "Database Security"],
    year: "2022-2023",
    details: [
      "Hardened server configurations following CIS benchmarks",
      "Implemented firewall rules and intrusion detection systems",
      "Configured SSL/TLS for secure communications",
      "Set up automated backup and disaster recovery systems",
      "Maintained 99.95% server uptime with zero breaches"
    ]
  },
  {
    id: 5,
    title: "ERPBotHub Corporate Website",
    category: "Web Security",
    description: "Developed and secured company website with modern security practices and secure hosting configuration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Web Security", "SSL/TLS", "WAF", "cPanel", "Security Headers"],
    year: "2022",
    details: [
      "Implemented HTTPS with strong SSL/TLS configuration",
      "Configured security headers (CSP, HSTS, X-Frame-Options)",
      "Set up Web Application Firewall (WAF)",
      "Implemented input validation and XSS protection",
      "Achieved A+ rating on security assessment tools"
    ],
    liveUrl: "https://www.erpbothub.com"
  },
  {
    id: 6,
    title: "Clinical Trials Data Security",
    category: "Academic",
    description: "Research project on securing big data analytics and neural networks for clinical trial data, focusing on privacy-preserving computation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["Big Data Analytics", "Neural Networks", "Data Privacy", "Encryption"],
    year: "2021",
    details: [
      "Researched secure data handling for clinical trials",
      "Proposed privacy-preserving analytics methods",
      "Analyzed encryption techniques for sensitive medical data",
      "Achieved 3rd rank in university competition"
    ]
  }
];

export const certifications = [
  { name: "Cloud Computing Certification", issuer: "Industry Standard", year: "2022" },
  { name: "Web Development Certification", issuer: "Professional Institute", year: "2022" },
  { name: "HTML, CSS & JavaScript Certification", issuer: "Online Platform", year: "2021" },
  { name: "SQL and PHP Database Management", issuer: "Technical Institute", year: "2022" },
  { name: "Linux Operating System Beginner", issuer: "Linux Foundation", year: "2021" },
  { name: "Master MS Excel Certification", issuer: "Microsoft", year: "2021" },
  { name: "Master in PowerPoint Certification", issuer: "Microsoft", year: "2021" },
  { name: "Graphic Design Bootcamp: PS, IL, ID, AE", issuer: "Design Institute", year: "2021" },
  { name: "Search Engine Optimization", issuer: "Digital Marketing", year: "2022" },
  { name: "BLS (Basic Life Support) Certification", issuer: "Medical Authority", year: "2021" }
];

export const education = [
  {
    degree: "Master in Cybersecurity",
    institution: "University of Toledo",
    location: "Toledo, Ohio, USA",
    period: "2023 - Present",
    gpa: "In Progress",
    description: "Specializing in threat detection, vulnerability assessment, cloud security, and advanced cybersecurity practices."
  },
  {
    degree: "Bachelor in Pharmacy",
    institution: "Gujarat Technological University",
    location: "Gandhinagar, India",
    period: "June 2017 - July 2021",
    gpa: "7.56 CGPA (First Class with Distinction)",
    description: "Strong foundation in analytical thinking, research methodology, and systematic problem-solving."
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
