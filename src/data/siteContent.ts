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
  roles: {
    title: string;
    focus: string;
  }[];
};

export type TeamRoleHighlight = {
  title: string;
  description: string;
  image: string;
};

export type CollaborationPrinciple = {
  title: string;
  description: string;
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
    name: "Cecil Scott",
    title: "Executive Director",
    bio: "Cecil transforms complex challenges into innovative solutions by bridging data-driven insights with human-centered design. With deep expertise in adaptive process design and a passion for digital public infrastructure, he champions equitable pathways to upward mobility. His superpower: creating physiological safety and emotional literacy within high-stakes environments to unlock the best in people and their work.",
    image: "/images/team-founder.jpg",
    responsibilities: [
      "Vision and strategic direction",
      "Process design and operations",
      "Community partnerships and impact",
    ],
  },
];

export const teamClusters: TeamCluster[] = [
  {
    title: "Learning & Mentorship",
    description: "Specialists who help members build practical, career-ready skills.",
    roles: [
      {
        title: "Technical Facilitators",
        focus: "Run hands-on sessions and unblock member projects.",
      },
      {
        title: "Curriculum Coordinators",
        focus: "Shape learning paths and track learner outcomes.",
      },
      {
        title: "Project Mentors",
        focus: "Guide capstone delivery and career readiness.",
      },
    ],
  },
  {
    title: "Operations & Delivery",
    description: "Team members who keep events, sprints, and communications running smoothly.",
    roles: [
      {
        title: "Operations Coordinator",
        focus: "Plans schedules, logistics, and sprint cadence.",
      },
      {
        title: "Community Coordinator",
        focus: "Keeps members engaged through events and updates.",
      },
      {
        title: "Partnership Liaison",
        focus: "Connects programs with institutions and sponsors.",
      },
    ],
  },
  {
    title: "Creative & Support",
    description: "Contributors shaping the brand experience and supporting day-to-day execution.",
    roles: [
      {
        title: "Design Lead",
        focus: "Owns design consistency across learning products.",
      },
      {
        title: "Content and Media Volunteer",
        focus: "Captures stories and publishes community updates.",
      },
      {
        title: "Volunteer Network",
        focus: "Supports workshops, onboarding, and member care.",
      },
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

export const collaborationPrinciples: CollaborationPrinciple[] = [
  {
    title: "Shared Ownership",
    description: "Decisions and outcomes are visible to the whole team.",
  },
  {
    title: "Mentor-Led Delivery",
    description: "Facilitators pair guidance with practical execution.",
  },
  {
    title: "Continuous Feedback",
    description: "Weekly check-ins improve quality and learner support.",
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
