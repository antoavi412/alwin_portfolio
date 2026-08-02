// All content sourced directly from the uploaded resume.
// No fabricated companies, projects, achievements, or certifications.

export const profile = {
  name: "Alwin Roshan I",
  title: "Cybersecurity Enthusiast",
  roles: [
    "Ethical Hacker",
    "Penetration Tester",
    "Blue Team & Threat Intelligence",
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "ialwin905@gmail.com",
  phone: "+91 6374597506",
  altEmail: "alwinroshan.i.2023.cce@ritchennai.edu.in",
  linkedin: "https://www.linkedin.com/in/alwin-roshan-i",
  github: "https://github.com/alwin905",
  profileImage: `${import.meta.env.BASE_URL}alwin-profile.jpeg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  summary:
    "Cybersecurity student experienced in penetration testing, vulnerability assessment, and system security. Skilled with industry tools and platforms like HTB and TryHackMe. Eager to enhance skills through internships and teamwork.",
  longSummary:
    "Cybersecurity enthusiast focused on penetration testing, vulnerability assessment, and system security. Pursuing hands-on experience through internships and real-world projects.",
};

export const stats = [
  { label: "Security Projects", value: 3, suffix: "" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Internships & Roles", value: 3, suffix: "" },
  { label: "Hackathon Rank", value: 1, suffix: "st" },
];

export const education = [
  {
    school: "Rajalakshmi Institute of Technology",
    location: "Chennai",
    degree: "B.E. Computer and Communication Engineering",
    date: "Sep 2023 – May 2027",
  },
  {
    school: "Sacred Heart Convent Anglo Indian Hr. Sec. School",
    location: "Villupuram",
    degree: "Higher Secondary Certificate (HSC)",
    date: "Mar 2023",
  },
];

export const skillCategories = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    description:
      "Core security disciplines applied across labs, internships, and independent projects.",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Network Security",
      "Digital Forensics",
      "Cryptography",
      "Threat Intelligence",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    description: "Scripting and development languages used to build and automate security tooling.",
    skills: ["Python", "Bash scripting", "JavaScript"],
  },
  {
    id: "networking",
    label: "Networking",
    description: "Protocols, transfer, and simulation tools used for network analysis and diagnostics.",
    skills: ["Secure FTP", "Packet Tracer", "Network Diagnostics"],
  },
  {
    id: "os",
    label: "Operating Systems",
    description: "Platforms used for security research, forensics, and daily operations.",
    skills: ["Windows", "Linux Mint", "Kali Linux", "Parrot OS", "CAINE", "BlackArch"],
  },
  {
    id: "tools",
    label: "Security Tools",
    description: "Industry tools used for scanning, exploitation, recon, and reporting.",
    skills: [
      "Nmap",
      "Wireshark",
      "Netcat",
      "Enum4linux",
      "Recon-ng",
      "ExifTool",
      "Tcpdump",
      "Nessus",
      "OpenVAS",
      "Nikto",
      "SQLmap",
      "Wapiti",
      "Nuclei",
      "Lynis",
      "Trivy",
      "Metasploit",
      "Burp Suite",
      "Hydra",
      "Aircrack-ng",
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Standards",
    description: "Reference frameworks used to classify, score, and communicate risk.",
    skills: ["CVE", "CVSS", "NVD", "CWE", "MITRE ATT&CK", "CAPEC"],
  },
];

export const experience = [
  {
    role: "Networking Intern",
    org: "Garsen Technology",
    date: "Oct 2025 – Jan 2026",
    points: [
      "Assisted in network configuration, monitoring, and troubleshooting.",
      "Ensured system reliability and performance using networking tools.",
    ],
  },
  {
    role: "Network Engineer",
    org: "Cancer Institute (WIA) – IIT Center",
    date: "May 2025 – Aug 2025",
    points: [
      "Assisted in electrical data analysis and network diagnostics.",
      "Worked to improve reliability and performance of network systems.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "AICTE & IBM SkillBuild",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Conducted lab attacks using SQLmap, Hydra, and Netcat.",
      "Worked on cryptography, steganography, and digital forensics using Kali Linux and Autopsy.",
      "Completed a 6-week internship in collaboration with AICTE, implemented by Edunet Foundation.",
    ],
  },
];

export const projects = [
  {
    id: "nmap-scanner",
    title: "Nmap Risk & Compliance Scanner",
    tech: ["Python", "Nmap", "ISO 27001"],
    description:
      "Automated scanner mapping vulnerabilities to CVEs, CVSS scores, and ISO 27001 controls with risk-based reporting.",
    details: [
      "Automates network scanning and maps findings to CVE identifiers.",
      "Scores discovered vulnerabilities using CVSS.",
      "Aligns findings against ISO 27001 controls for compliance-oriented reporting.",
    ],
  },
  {
    id: "steg-tool",
    title: "Universal Steganography Tool",
    tech: ["Python", "Bit Manipulation"],
    description:
      "Embedded files into image/audio formats (PNG, JPEG, MP3) using LSB and byte-level encoding.",
    details: [
      "Supports PNG, JPEG, and MP3 carrier files.",
      "Uses LSB (least significant bit) and byte-level encoding techniques.",
      "Built to explore data-hiding and covert-channel concepts hands-on.",
    ],
  },
  {
    id: "ai-waf",
    title: "Context-Aware Web Application Firewall (WAF)",
    tech: ["Python", "FastAPI", "LightGBM", "DistilBERT", "FAISS"],
    description:
      "AI-powered WAF with adaptive blocking, OS-level enforcement, and secure OTP-based admin login.",
    details: [
      "Combines LightGBM and DistilBERT for adaptive, context-aware request classification.",
      "Uses FAISS for similarity-based threat matching.",
      "Includes OS-level enforcement and OTP-secured admin access.",
    ],
  },
];

export const certifications = [
  {
    name: "Ethical Hacker Certification",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: "Cybersecurity Internship Certification",
    issuer: "IBM SkillBuild & AICTE",
    year: "2025",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
  {
    name: "Networking Basics Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
  {
    name: "Crash Course on Python",
    issuer: "Google",
    year: "2023",
  },
];

export const achievements = [
  {
    title: "1st Place — Cyber Hackathon",
    org: "TN Nilgiris District Police & CSI College of Engineering Ketti",
    description: "Won first place in a cybersecurity hackathon held on 7th February 2026.",
    date: "February 7, 2026",
    image: `${import.meta.env.BASE_URL}hackathon-certificate.jpeg`,
  },
];

export const loadingSteps = [
  "Loading Portfolio...",
  "Access Granted",
];
