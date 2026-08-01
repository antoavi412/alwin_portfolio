// Maps each skill/tool name from the resume to a real icon.
// Priority: an official brand/product icon (react-icons/si or /fa6) when one
// exists, falling back to a well-matched lucide-react glyph when it doesn't
// (many niche security tools like Nmap, Hydra, or Nessus have no logo in any
// open icon set).
import {
  SiPython,
  SiJavascript,
  SiGnubash,
  SiLinux,
  SiKalilinux,
  SiParrotsecurity,
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiOwasp,
  SiCisco,
  SiTrivy,
} from "react-icons/si";
import { FaWindows, FaNetworkWired } from "react-icons/fa6";
import {
  Terminal,
  Radar,
  Bug,
  ShieldAlert,
  Fingerprint,
  Search,
  ScanLine,
  Waypoints,
  FileSearch,
  Camera,
  ActivitySquare,
  Activity,
  Wifi,
  KeyRound,
  ShieldCheck,
  FileWarning,
  Layers,
  Database,
  BookMarked,
  Target,
  Braces,
  Send,
  Cable,
  HardDrive,
  Server,
} from "lucide-react";

// { Icon, brand } — brand:true renders at full color via currentColor from the
// icon set itself; brand:false uses lucide and inherits the app's cyan tone.
export const skillIconMap = {
  // Cybersecurity discipline
  "Penetration Testing": { Icon: Target, brand: false },
  "Vulnerability Assessment": { Icon: FileWarning, brand: false },
  "Network Security": { Icon: ShieldCheck, brand: false },
  "Digital Forensics": { Icon: FileSearch, brand: false },
  "Cryptography": { Icon: KeyRound, brand: false },
  "Threat Intelligence": { Icon: Radar, brand: false },

  // Programming
  "Python": { Icon: SiPython, brand: true },
  "Bash scripting": { Icon: SiGnubash, brand: true },
  "JavaScript": { Icon: SiJavascript, brand: true },

  // Networking
  "Secure FTP": { Icon: Send, brand: false },
  "Packet Tracer": { Icon: Cable, brand: false },
  "Network Diagnostics": { Icon: FaNetworkWired, brand: true },

  // Operating systems
  "Windows": { Icon: FaWindows, brand: true },
  "Linux Mint": { Icon: SiLinux, brand: true },
  "Kali Linux": { Icon: SiKalilinux, brand: true },
  "Parrot OS": { Icon: SiParrotsecurity, brand: true },
  "CAINE": { Icon: HardDrive, brand: false },
  "BlackArch": { Icon: Terminal, brand: false },

  // Security tools
  "Nmap": { Icon: ScanLine, brand: false },
  "Wireshark": { Icon: SiWireshark, brand: true },
  "Netcat": { Icon: ActivitySquare, brand: false },
  "Enum4linux": { Icon: Server, brand: false },
  "Recon-ng": { Icon: Search, brand: false },
  "ExifTool": { Icon: Camera, brand: false },
  "Tcpdump": { Icon: Activity, brand: false },
  "Nessus": { Icon: Bug, brand: false },
  "OpenVAS": { Icon: ShieldAlert, brand: false },
  "Nikto": { Icon: FileWarning, brand: false },
  "SQLmap": { Icon: Database, brand: false },
  "Wapiti": { Icon: Waypoints, brand: false },
  "Nuclei": { Icon: Target, brand: false },
  "Lynis": { Icon: ScanLine, brand: false },
  "Trivy": { Icon: SiTrivy, brand: true },
  "Metasploit": { Icon: SiMetasploit, brand: true },
  "Burp Suite": { Icon: SiBurpsuite, brand: true },
  "Hydra": { Icon: KeyRound, brand: false },
  "Aircrack-ng": { Icon: Wifi, brand: false },

  // Frameworks & standards
  "CVE": { Icon: Bug, brand: false },
  "CVSS": { Icon: ActivitySquare, brand: false },
  "NVD": { Icon: Database, brand: false },
  "CWE": { Icon: Braces, brand: false },
  "MITRE ATT&CK": { Icon: Layers, brand: false },
  "CAPEC": { Icon: BookMarked, brand: false },
};

export const brandFallback = { Icon: Fingerprint, brand: false };

export function getSkillIcon(name) {
  return skillIconMap[name] || brandFallback;
}

// A couple of extra icons used for OWASP / Cisco style references if the
// resume content expands later.
export const extras = { SiOwasp, SiCisco };
