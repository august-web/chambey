import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Brush,
  Building,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Globe,
  Group,
  Handshake,
  Headphones,
  Laptop,
  Loader,
  Megaphone,
  Palette,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaBluesky } from "react-icons/fa6";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Field = {
  from: string;
  to: string;
  type: "Collaboration outcome" | "Trade collaboration";
  category: "Hiring" | "Trade deal" | "Partnership";
  description: string;
  status: "Active" | "Completed" | "In progress";
};

export type TeamDomain = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
};

export type ImpactArea = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
};

export type Corridor = {
  from: string;
  to: string;
};

export type DonationTier = {
  name: string;
  label: string;
  monthly: string;
  oneTime: string;
  description: string;
  benefits: string[];
  color: string;
  featured?: boolean;
};

export type UseCase = {
  icon: LucideIcon;
  text: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Fields", href: "/fields" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
];

export const corridors: Corridor[] = [
  { from: "Nigeria", to: "Indonesia" },
  { from: "Ghana", to: "Brazil" },
  { from: "Indonesia", to: "Nigeria" },
  { from: "Kenya", to: "Vietnam" },
  { from: "Brazil", to: "Senegal" },
  { from: "Philippines", to: "Ghana" },
];

export const projects: Field[] = [
  {
    from: "Nigeria",
    to: "Indonesia",
    typeF: "Collaboration outcome",
    typeC: "Hiring",
    description: "Backend developer hired by a fintech startup. 3-month contract, extended to full-time.",
    status: "Active",
  },
  {
    from: "Ghana",
    to: "Brazil",
    typeF: "Trade collaboration",
    typeC: "Trade deal",
    description: "Agricultural supplier connected with a food distributor. First shipment cleared.",
    status: "Completed",
  },
  {
    from: "Indonesia",
    to: "Nigeria",
    typeF: "Collaboration outcome",
    typeC: "Partnership",
    description: "Digital agency partnered with a Lagos startup to build their mobile product.",
    status: "Active",
  },
  {
    from: "Kenya",
    to: "Vietnam",
    typeF: "Collaboration outcome",
    typeC: "Partnership",
    description: "SaaS company expanding distribution through a SE Asia reseller network.",
    status: "In progress",
  },
  {
    from: "Brazil",
    to: "Senegal",
    typeF: "Trade collaboration",
    typeC: "Trade deal",
    description: "Consumer goods manufacturer entering West African markets through a local distributor.",
    status: "In progress",
  },
  {
    from: "Philippines",
    to: "Ghana",
    typeF: "Collaboration outcome",
    typeC: "Hiring",
    description: "Design team engaged by a fast-growing media company to build their brand identity.",
    status: "Active",
  },
];

export const teamDomains: TeamDomain[] = [
  {
    title: "Talent & Hiring",
    description: "Connecting developers, designers, and operators with companies building across borders.",
    tags: ["Remote roles", "Vetted talent", "Cross-border contracts"],
    icon: Users,
  },
  {
    title: "Trade & Business",
    description: "Linking suppliers and buyers across Africa, Brazil, and Southeast Asia.",
    tags: ["B2B trade", "Supplier matching", "Verified buyers"],
    icon: Briefcase,
  },
  {
    title: "Startups & Innovation",
    description: "Founders building in one market with eyes on others. Chambey accelerates cross-border growth.",
    tags: ["Co-founders", "Investors", "Market entry"],
    icon: Zap,
  },
];

export const impactAreas: ImpactArea[] = [
  {
    title: "Technology",
    description: "Remote talent, software development, and digital products spanning three continents. The most active corridor in the Chambey network.",
    tags: ["Remote work", "Dev talent", "Digital products"],
    icon: Laptop,
  },
  {
    title: "Trade & Commerce",
    description: "Physical goods, manufacturing, and import/export corridors. Mulacanoe handles the payment rails so deals settle.",
    tags: ["Import/Export", "B2B trade", "Logistics"],
    icon: ArrowRight,
  },
  {
    title: "Creative & Media",
    description: "Global production, content, and creative collaboration across languages, time zones, and cultures.",
    tags: ["Content", "Production", "Brand"],
    icon: Palette,
  },
];

export const donationTiers: DonationTier[] = [
  {
    name: "Contributor",
    label: "Contributor",
    monthly: "$10 – $50",
    oneTime: "$50 – $250",
    description: "Individuals who believe in expanding access to opportunity.",
    benefits: [
      "Early access updates on Chambey's growth",
      "Optional recognition in community spaces",
      "Awareness of initiatives as they launch",
    ],
    color: "teal",
  },
  {
    name: "Partner",
    label: "Partner",
    monthly: "$100 – $500",
    oneTime: "$500 – $2,500",
    description: "Builders, operators, and small organizations supporting cross-border collaboration.",
    benefits: [
      "Priority access to network initiatives",
      "Visibility across Chambey community",
      "Invitation to collaboration programs",
      "Direct updates on outcomes your support enables",
    ],
    color: "cobalt",
    featured: true,
  },
  {
    name: "Sponsor",
    label: "Sponsor",
    monthly: "$5,000+",
    oneTime: "$25,000+",
    description: "Institutions, funds, and organizations supporting ecosystem growth across regions.",
    benefits: [
      "Strategic collaboration opportunities",
      "Visibility across all Chambey surfaces",
      "Direct involvement in programs or initiatives",
      "Alignment with institutional grant partnerships",
    ],
    color: "salmon",
  },
];

export const useCases: UseCase[] = [
  { icon: Users, text: "Hiring or looking for talent" },
  { icon: Briefcase, text: "Finding a trade partner" },
  { icon: Handshake, text: "Exploring a partnership" },
  { icon: CircleDollarSign, text: "Coordinating a cross-border deal" },
];

export const ecosystemLayers = [
  {
    name: "Litany",
    role: "Clarity layer",
    description: "Helps individuals and teams define what they're building and where they're going.",
  },
  {
    name: "Chambey",
    role: "Execution layer",
    description: "Matches talent, creates deals, and coordinates partnerships across borders.",
  },
  {
    name: "Mulacanoe",
    role: "Transaction layer",
    description: "Handles payments, escrow, and settlement so deals actually close.",
  },
];

export const fundingUses = [
  {
    title: "Platform development",
    description: "Building and maintaining the infrastructure that makes cross-border collaboration possible — tools, systems, and access layers.",
    icon: Loader,
  },
  {
    title: "Community programs",
    description: "Funding the collaboration initiatives, regional programs, and cross-border coordination that grow the network's reach and impact.",
    icon: Group,
  },
  {
    title: "Regional expansion",
    description: "Extending Chambey into new corridors, new markets, and new communities across the Global South — widening access to the ecosystem.",
    icon: Globe,
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Bluesky", href: "https://bsky.app/profile/chambey.org", icon: FaBluesky },
];

export const quoteText =
  "For people who don't wait for permission. Who think globally — even when starting locally. Who build beyond borders.";