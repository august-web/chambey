import {
  BookOpen,
  Globe,
  MessageCircle,
  Send,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Field = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
  image: string;
  responsibilities: string[];
};

export type TeamCluster = {
  title: string;
  description: string;
  roles: string[];
};

export type TeamRoleHighlight = {
  title: string;
  description: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/teams" },
  { label: "Approach", href: "/fields" },
  { label: "Contact", href: "/contact" },
];

export const fields: Field[] = [
  {
    title: "Resource Management & Personal Finance",
    description: "Your financial knowledge, community wealth",
    icon: Wallet,
  },
  {
    title: "Skill Building & Career Capital",
    description: "Hands-on co-learning experience",
    icon: BookOpen,
  },
  {
    title: "Community Building & Communication",
    description: "Open communication, shared ownership, and shared interests",
    icon: Users,
  },
];

export const whatWeDo = [
  "Learn what it means to be a part of the Swarm Economy.",
  "Drive your purpose gaining skills.",
  "Contribute to a change-making movement.",
  "Enjoy your journey to economic prosperity.",
  "Bridge skill gaps for opportunities.",
  "Break cycles that span generations.",
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Founder",
    title: "Founder & Strategic Lead",
    bio: "Defines the long-term mission, builds key partnerships, and aligns community growth with real economic opportunity.",
    image: "/images/team-founder.jpg",
    responsibilities: [
      "Vision and strategy",
      "Partnership development",
      "Community culture",
    ],
  },
  {
    name: "Director",
    title: "Director of Programs",
    bio: "Leads program delivery, mentors facilitators, and ensures every learning track is measurable, practical, and inclusive.",
    image: "/images/team-cofounder.jpg",
    responsibilities: [
      "Program execution",
      "Team coordination",
      "Quality assurance",
    ],
  },
];

export const teamClusters: TeamCluster[] = [
  {
    title: "Learning & Mentorship",
    description: "Specialists who help members build practical, career-ready skills.",
    roles: [
      "Technical Facilitators",
      "Curriculum Coordinators",
      "Project Mentors",
    ],
  },
  {
    title: "Operations & Delivery",
    description: "Team members who keep events, sprints, and communications running smoothly.",
    roles: [
      "Operations Coordinator",
      "Community Coordinator",
      "Partnership Liaison",
    ],
  },
  {
    title: "Creative & Support",
    description: "Contributors shaping the brand experience and supporting day-to-day execution.",
    roles: [
      "Design Lead",
      "Content and Media Volunteer",
      "Volunteer Network",
    ],
  },
];

export const teamRoleHighlights: TeamRoleHighlight[] = [
  {
    title: "Facilitators",
    description: "Technical mentors leading specialized programming tracks.",
    image: "/images/team-facilitator.jpg",
  },
  {
    title: "Coordinators",
    description: "Organizing workshops, events, and sprint execution.",
    image: "/images/team-coordinator.jpg",
  },
  {
    title: "Designers",
    description: "Shaping the user experience and visual identity.",
    image: "/images/team-designer.jpg",
  },
  {
    title: "Volunteers",
    description: "Enthusiastic contributors supporting day-to-day operations.",
    image: "/images/team-volunteer.jpg",
  },
];

export const projects = [
  {
    name: "SkillSprint Labs",
    type: "Community Program",
    status: "In Planning",
    summary: "A guided monthly build sprint where members ship practical web and AI tools.",
  },
  {
    name: "SecureStart",
    type: "Cybersecurity Initiative",
    status: "Pilot",
    summary: "A beginner-first awareness campaign that teaches safe digital behavior in schools.",
  },
  {
    name: "RoboMakers",
    type: "Robotics Track",
    status: "Prototype",
    summary: "Hands-on robotics learning path with simple automation challenges and demo days.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Send },
  { label: "Instagram", href: "https://instagram.com", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", icon: Globe },
];
