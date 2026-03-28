// HERO
export const heroContent = {
  title: "Continuously Aware Realtime Tracking Network",
  // subtitle: "RFID • NFC • Barcode",
  highlight: "Tracking Network",
  description:
    "A powerful tool designed to deliver real-time visibility into the location and movement of all your assets.",
  primaryCTA: "Request Demo",
  secondaryCTA: "View Solutions",
};

export const heroStats = [
  { value: "99%", label: "Inventory Accuracy" },
  { value: "24/7", label: "Real-Time Tracking" },
  { value: "50+", label: "Enterprise Clients" },
];

export type PlatformFeature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type DemoRequest = {
  id: number;
  timestamp: string;
  [key: string]: unknown;
};

export type DemoRequestInput = Omit<DemoRequest, "id" | "timestamp"> & {
  [key: string]: unknown;
};

export const platformFeatures: PlatformFeature[] = [
  {
    id: 1,
    title: "Multi-Modal Asset Inventory",
    description:
      "Track assets using RFID, NFC, and Barcode technologies with unified inventory management across all locations.",
    icon: "Package",
  },
  {
    id: 2,
    title: "Track and Locate",
    description:
      "Real-time asset location with GPS integration and indoor positioning for complete visibility.",
    icon: "MapPin",
  },
  {
    id: 3,
    title: "Enterprise Integration",
    description:
      "Seamlessly integrate with ERP, WMS, and other enterprise systems through robust APIs and connectors.",
    icon: "Workflow",
  },
  {
    id: 4,
    title: "On-Prem and SaaS Deployment",
    description:
      "Flexible deployment options - cloud, on-premises, or hybrid to meet your security and compliance needs.",
    icon: "Cloud",
  },
];

export const howItWorksSteps = [
  { id: 1, title: "Asset Tag", description: "RFID/NFC/Barcode", icon: "Tag" },
  {
    id: 2,
    title: "Reader/Scanner",
    description: "Capture Data",
    icon: "Radio",
  },
  {
    id: 3,
    title: "CARTN Platform",
    description: "Process & Store",
    icon: "Database",
  },
  {
    id: 4,
    title: "Dashboard",
    description: "Visualize Data",
    icon: "LayoutDashboard",
  },
  {
    id: 5,
    title: "Analytics",
    description: "Reports & Insights",
    icon: "BarChart3",
  },
];

export const services = [
  {
    id: 1,
    title: "System Design",
    description:
      "Custom RFID/NFC solution architecture tailored to your infrastructure and workflows.",
    icon: "Lightbulb",
  },
  {
    id: 2,
    title: "Implementation",
    description:
      "End-to-end deployment with hardware installation, software configuration, and testing.",
    icon: "Wrench",
  },
  {
    id: 3,
    title: "Integration",
    description:
      "Connect CARTN with your existing ERP, WMS, and enterprise systems seamlessly.",
    icon: "Link",
  },
  {
    id: 4,
    title: "Operational Support",
    description:
      "24/7 monitoring, maintenance, and technical support to ensure optimal performance.",
    icon: "Headphones",
  },
];

export const deploymentOptions = [
  {
    id: 1,
    name: "Cloud",
    description: "Scalable SaaS solution",
    icon: "Cloud",
  },
  {
    id: 2,
    name: "On-Premises",
    description: "Complete control",
    icon: "Server",
  },
  {
    id: 3,
    name: "Hybrid",
    description: "Best of both worlds",
    icon: "GitMerge",
  },
];

export const useCases = [
  {
    id: 1,
    title: "Warehouse Inventory",
    description:
      "Real-time inventory tracking across multiple warehouse locations with 99% accuracy.",
    icon: "Warehouse",
    industry: "Logistics",
  },
  {
    id: 2,
    title: "Hospital Equipment",
    description:
      "Track critical medical equipment, reduce search time, and ensure compliance.",
    icon: "Hospital",
    industry: "Healthcare",
  },
  {
    id: 3,
    title: "Government Assets",
    description:
      "Secure asset management for government facilities with audit trails and compliance.",
    icon: "Building2",
    industry: "Government",
  },
  {
    id: 4,
    title: "Defense & Security",
    description:
      "Track sensitive equipment and materials with military-grade security protocols.",
    icon: "Shield",
    industry: "Defense",
  },
  {
    id: 5,
    title: "IT Asset Tracking",
    description:
      "Manage laptops, servers, and equipment across corporate offices and data centers.",
    icon: "Laptop",
    industry: "Technology",
  },
  {
    id: 6,
    title: "Manufacturing",
    description:
      "Track work-in-progress, tools, and finished goods throughout production facilities.",
    icon: "Factory",
    industry: "Manufacturing",
  },
];

export const whyCartn = [
  {
    id: 1,
    title: "99% Inventory Accuracy",
    description: "Eliminate manual errors",
    icon: "Target",
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    description: "Know asset location instantly",
    icon: "Zap",
  },
  {
    id: 3,
    title: "Reduce Asset Loss",
    description: "Prevent theft and misplacement",
    icon: "ShieldCheck",
  },
  {
    id: 4,
    title: "Secure System",
    description: "Enterprise-grade security",
    icon: "Lock",
  },
  {
    id: 5,
    title: "Scalable Platform",
    description: "Grow from 100 to 1M assets",
    icon: "TrendingUp",
  },
  {
    id: 6,
    title: "Enterprise Integration",
    description: "Connect existing systems",
    icon: "Plug",
  },
];

export const trustedByLogos = [
  { id: 1, name: "Ministry of Defense", type: "government" },
  { id: 2, name: "Department of Health", type: "government" },
  { id: 3, name: "National Logistics", type: "enterprise" },
  { id: 4, name: "Global Manufacturing Corp", type: "enterprise" },
  { id: 5, name: "State Infrastructure", type: "government" },
  { id: 6, name: "Tech Solutions Inc", type: "enterprise" },
];

export const clientLogos = [
  { id: 1, name: "Government Agency A" },
  { id: 2, name: "Enterprise Client B" },
  { id: 3, name: "Healthcare System C" },
  { id: 4, name: "Defense Contractor D" },
  { id: 5, name: "Manufacturing Group E" },
  { id: 6, name: "Logistics Provider F" },
];

export const analyticsData = {
  totalAssets: 45782,
  trackedToday: 3421,
  accuracy: 99.2,
  locations: 127,
  assetsByCategory: [
    { name: "Equipment", value: 15234 },
    { name: "Vehicles", value: 8912 },
    { name: "Containers", value: 12456 },
    { name: "IT Assets", value: 9180 },
  ],
  trackingActivity: [
    { time: "00:00", scans: 120 },
    { time: "04:00", scans: 85 },
    { time: "08:00", scans: 340 },
    { time: "12:00", scans: 520 },
    { time: "16:00", scans: 450 },
    { time: "20:00", scans: 210 },
  ],
};

export const demoRequests: DemoRequest[] = [];

export const addDemoRequest = (request: DemoRequestInput): DemoRequest => {
  const newRequest: DemoRequest = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...request,
  };
  demoRequests.push(newRequest);
  return newRequest;
};

export type AssetTimelineEvent = {
  id: number;
  time: string;
  location: string;
  owner: string;
};

export const assetTimeline: AssetTimelineEvent[] = [
  {
    id: 1,
    time: "2026-03-27 at 10:32 am",
    location: "Storage Zone A",
    owner: "John Doe",
  },
  {
    id: 2,
    time: "2026-03-27 at 11:10 am",
    location: "Server Room",
    owner: "Robin",
  },
  {
    id: 3,
    time: "2026-03-27 at 12:45 pm",
    location: "Zone C",
    owner: "John Doe",
  },
  {
    id: 4,
    time: "2026-03-27 at 02:15 pm",
    location: "Zone B",
    owner: "Thomas Shelby",
  },
  {
    id: 5,
    time: "2026-03-27 at 03:40 pm",
    location: "Storage Zone A",
    owner: "John Doe",
  },
];