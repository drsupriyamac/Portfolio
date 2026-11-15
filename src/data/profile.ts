/**
 * Single source of truth for all site content.
 * Everything here is taken from Dr. Supriya Macherla's resume.
 * To update the site, edit this file only — then rebuild.
 */

export const profile = {
  name: "Dr. Supriya Macherla",
  credentials: "BDS",
  shortName: "Supriya Macherla",
  headline: "Regulatory Affairs · Drugs & Medical Devices",
  subheadline:
    "510(k) & global submissions · Design controls · Risk management · Clinical trials (ICH GCP)",
  intro:
    "Dentist turned regulatory affairs professional. MS candidate in Biomedical Regulatory Affairs at the University of Washington, building the 510(k) plan for Iris™, a Class II dental device I originated — backed by 2+ years of clinical practice under CDSCO and NABH compliance.",
  location: "Greater Seattle Area, WA",
  email: "drsupriyamac@gmail.com",
  linkedin: "https://www.linkedin.com/in/dr-supriya-macherla-3101942a3/",
  resumePath: "/Supriya-Macherla-Resume.pdf",
  topSkills: [
    "FDA 510(k) & Predicate Analysis",
    "Design Controls · 21 CFR 820.30",
    "ISO 14971 Risk Management",
    "ICH E6 GCP & Clinical Protocols",
    "International Market Access",
  ],
};

export const targetRoles = {
  summary:
    "Graduating with an MS in Biomedical Regulatory Affairs from the University of Washington in June 2027.",
  groups: [
    {
      title: "Regulatory Affairs",
      roles: [
        "Regulatory Affairs Associate",
        "Regulatory Affairs Specialist",
        "Regulatory Operations / Submissions Associate",
      ],
    },
    {
      title: "Quality & Risk Management",
      roles: [
        "Quality Assurance Associate / Specialist",
        "Risk Management Specialist",
        "Design Quality / Design Assurance Associate",
      ],
    },
    {
      title: "Clinical",
      roles: [
        "Clinical Research Associate (CRA)",
        "Clinical Trial Associate",
        "Pharmacovigilance / Drug Safety Associate",
      ],
    },
  ],
};

export const stats = [
  { value: "3.93", label: "GPA, MS Biomedical Regulatory Affairs (UW)" },
  { value: "2+ yrs", label: "Clinical practice under CDSCO & NABH" },
  { value: "4", label: "Applied regulatory projects" },
  { value: "2", label: "Peer-reviewed publications" },
];

export const about = {
  paragraphs: [
    "I am a regulatory affairs MS candidate at the University of Washington with applied work across the full product lifecycle — from medical device submissions and design controls to clinical trial documentation and international market strategy.",
    "Before moving into regulatory affairs, I practiced as a licensed dentist in India for more than two years, working under CDSCO, NABH and DCI requirements. That gave me firsthand knowledge of how devices are actually handled, sterilized and used on patients — the perspective I now bring to user needs, hazard analysis and labeling decisions.",
    "Today I am taking a device of my own from concept toward market: Iris™, a Class II smart intraoral mirror, for which I am developing the 510(k) plan, risk file and design control framework.",
  ],
  strengths: [
    {
      title: "Clinician's view of device risk",
      text: "Hands-on clinical experience with device handling, sterilization and infection control — including CDSCO, NABH and DCI compliance across 300+ patient cases.",
    },
    {
      title: "Submission-ready thinking",
      text: "Predicate analysis, substantial equivalence, traceability matrices and V&V planning for Class II devices.",
    },
    {
      title: "Detail and data integrity",
      text: "Found 17 CRF errors and 51 unreported lab adverse events during clinical monitoring exercises.",
    },
    {
      title: "Global perspective",
      text: "Tiered launch strategies across FDA, EMA, PMDA, MHRA, TGA, Swissmedic, Health Canada and CDSCO.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Regulatory Pathways",
    icon: "fileCheck",
    skills: [
      "FDA 510(k)",
      "Substantial equivalence & predicate analysis",
      "De Novo",
      "FDA regulation of AI/ML SaMD",
      "PCCPs for AI-enabled devices",
      "CDSCO MDR 2017",
      "EU MDR 2017/745 (CE marking)",
    ],
  },
  {
    title: "Quality & Design Controls",
    icon: "shield",
    skills: [
      "Design controls (21 CFR 820.30)",
      "QMSR / ISO 13485",
      "ISO 14971 risk management",
      "ICH Q9",
      "Design traceability matrices",
      "V&V planning",
      "Supplier quality agreements",
      "Sterilization SOPs",
    ],
  },
  {
    title: "Clinical Operations",
    icon: "clipboard",
    skills: [
      "ICH E6 GCP",
      "ICH E3",
      "21 CFR 50 / 56 / 312",
      "Protocol, ICF & CRF drafting",
      "Monitoring & source data review",
      "AE / SAE reporting",
    ],
  },
  {
    title: "Global Market Access",
    icon: "globe",
    skills: [
      "Reliance & work-sharing pathways",
      "UK MHRA IRP",
      "TGA COR-B",
      "Swissmedic Art. 13 TPA",
      "Health Canada MDSAP",
      "ASEAN CSDT dossier",
      "Regulatory & medical writing",
    ],
  },
  {
    title: "Research & Tools",
    icon: "microscope",
    skills: [
      "FDA databases",
      "PubMed · Cochrane · MEDLINE",
      "Zotero",
      "IBM SPSS",
      "Imaris (3D imaging)",
      "Microsoft 365 · Google Workspace",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tag: string;
  role: string;
  status?: string;
  problem: string;
  contributions: string[];
  outcomes?: string[];
  frameworks: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "iris",
    name: "Iris™ Smart Intraoral Dental Mirror",
    tag: "Class II device · 510(k)",
    role: "Originator · Independent project",
    status: "510(k) plan in development",
    problem:
      "Take a self-originated smart intraoral mirror from concept to a market-ready Class II regulatory plan, including a device that combines reusable electronics with patient-contacting surfaces.",
    contributions: [
      "Originated the device concept and am developing its 510(k) plan.",
      "Building the bill of materials.",
      "Designed a two-zone sterilization architecture: reusable electronics with a disposable barrier sleeve.",
      "Applying ISO 14971 risk management and 21 CFR 820.30 design controls while working through submission planning.",
    ],
    outcomes: [
      "Presented the Iris™ regulatory strategy as a poster at the UW GPSS Symposium (May 2026).",
    ],
    frameworks: ["FDA 510(k)", "21 CFR 820.30", "ISO 14971", "Sterilization design"],
    featured: true,
  },
  {
    id: "perioreach",
    name: "PerioReach Telescoping Ultrasonic Scaler",
    tag: "Class II device · PDP",
    role: "Clinical Lead",
    problem:
      "Define a 510(k) product development plan for a new Class II ultrasonic scaler (21 CFR 872.4850, product code ELC) with a sole-source critical component.",
    contributions: [
      "Originated the clinical concept and led the product development plan.",
      "Built the substantial equivalence comparison against predicate K122501.",
      "Defined user needs and a design traceability matrix linking each need to design outputs, verification tests and validation activities.",
      "Ran the ISO 14971 hazard analysis with risk scores before and after mitigation.",
      "Drafted the supplier quality agreement and qualification requirements for the sole-source shank manufacturer (21 CFR 820.50, ISO 13485 cl. 7.4).",
    ],
    frameworks: ["21 CFR 872.4850", "Predicate K122501", "ISO 14971", "21 CFR 820.50", "ISO 13485"],
    featured: true,
  },
  {
    id: "phase3",
    name: "Phase III Protocol: Creon® vs. Zenpep® in EPI",
    tag: "Clinical operations",
    role: "Co-author",
    problem:
      "Design a randomized, double-blind Phase III trial comparing two pancreatic enzyme therapies in exocrine pancreatic insufficiency — 500 subjects across 10 sites.",
    contributions: [
      "Co-authored the protocol: objectives, inclusion/exclusion criteria, visit schedule, AE/SAE reporting workflow and informed consent per ICH E6 and 21 CFR 50/56/312.",
      "Wrote the CRA monitoring plan, the trial communication plan and the 10-site timeline summary.",
    ],
    outcomes: [
      "Identified 17 errors in a 35-page CRF during monitoring exercises.",
      "Flagged 51 unreported lab adverse events that exceeded protocol thresholds.",
    ],
    frameworks: ["ICH E6 GCP", "21 CFR 50/56/312", "CRA monitoring", "AE/SAE reporting"],
    featured: true,
  },
  {
    id: "global",
    name: "Global Regulatory Strategy",
    tag: "International market access",
    role: "Strategy author",
    problem:
      "Sequence international launches efficiently by using a primary reference-authority approval to unlock faster reliance and work-sharing pathways.",
    contributions: [
      "Built tiered launch strategies sequencing a primary submission (FDA, EMA, PMDA) into reliance pathways: UK MHRA IRP, TGA COR-B and Swissmedic Art. 13 TPA.",
      "Mapped device and drug pathways, review timelines, fees and local representative requirements across major markets, including EU CE marking under MDR 2017/745 and Health Canada MDSAP.",
    ],
    frameworks: ["FDA · EMA · PMDA", "MHRA IRP", "TGA COR-B", "Swissmedic", "EU MDR", "MDSAP"],
  },
];

export type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    title: "Research Assistant (Volunteer)",
    org: "UW School of Dentistry, Oral Health Sciences — Popowics Lab",
    location: "Seattle, WA",
    dates: "Oct 2026 – Present",
    points: [
      "Analyze existing 3D light-sheet images of innervation in mouse teeth using Imaris at the Keck Imaging Center, studying how mechanical load on a tooth transmits to surrounding tissues and cells.",
      "Translate imaging analysis into structured, protocol-compliant documentation with full data integrity and traceability.",
    ],
    tags: ["Imaris", "Data integrity", "Research documentation"],
  },
  {
    title: "Associate Dentist",
    org: "Ajney Dental Care",
    location: "Telangana, India",
    dates: "Sep 2024 – Jul 2025",
    points: [
      "Maintained CDSCO, NABH and DCI regulatory compliance for device handling, sterilization and infection control across 300+ patient cases.",
      "Kept audit-ready quality records, including informed consent documentation and device traceability logs.",
    ],
    tags: ["CDSCO", "NABH", "Device traceability", "Audit readiness"],
  },
  {
    title: "General Dentist & Administrator",
    org: "Cross Healthcare & Scala Dental Care Hospital",
    location: "India",
    dates: "May 2024 – Sep 2024",
    points: [
      "Authored and implemented controlled SOPs for sterilization and chairside preparation, standardizing compliance across clinical operations.",
      "Assessed new dental devices against current regulatory requirements and clinical evidence before adoption.",
      "Trained 15+ clinical staff on regulatory guidelines, infection control protocols and compliance standards; the standardized SOPs reduced protocol deviations by 40%.",
    ],
    tags: ["SOP authoring", "Device assessment", "Staff training", "Clinical operations"],
  },
  {
    title: "House Surgeon, Rotatory Internship",
    org: "Mamata Dental College",
    location: "Khammam, India",
    dates: "Mar 2023 – Apr 2024",
    points: [
      "Applied CDSCO-compliant device sterilization, inventory control and regulatory documentation across procedures for 100+ patients.",
    ],
    tags: ["CDSCO", "Sterilization", "Inventory control"],
  },
];

export const education = [
  {
    degree: "Master of Science, Biomedical Regulatory Affairs",
    school: "University of Washington",
    location: "Seattle, WA",
    dates: "Sep 2025 – Jun 2027 (expected)",
    gpa: "3.93 / 4.0",
    coursework: [
      "Medical Device Regulation & 510(k) Submissions",
      "Risk Management (ISO 14971, ICH Q9)",
      "Clinical Trial Operations",
      "GxP & Quality Systems",
      "Regulatory & Medical Writing",
      "FDA Regulation of AI/ML SaMD",
      "International Regulatory Affairs",
    ],
  },
  {
    degree: "Bachelor of Dental Surgery (BDS)",
    school: "Mamata Dental College & Hospital",
    location: "Khammam, India",
    dates: "Aug 2018 – Jan 2023",
    gpa: "3.78",
    coursework: [],
  },
];

export const credentials = [
  { title: "Licensed Dentist", detail: "Telangana State Dental Council · 2024" },
  { title: "Basic Life Support (BLS)", detail: "Certification" },
  { title: "RAPS Volunteer", detail: "Regulatory Affairs Professionals Society" },
];

export const publications = [
  {
    title:
      "Knowledge and Assessment of Biomimetic Materials in Dentistry among Undergraduate Students",
    venue: "IJARESM",
    date: "Oct 2023",
    note: "Validated questionnaire (n=223), SPSS analysis",
    url: "https://www.ijaresm.com/knowledge-and-assessment-of-biomimetic-materials-in-dentistry-among-undergraduate-students",
  },
  {
    title:
      "Gender Differences in Adherence to Orthodontic Practices: An Evaluation of Oral Hygiene and Appointment Compliance — An Observational Study",
    venue: "African Journal of Biomedical Research",
    date: "Oct 2024",
    url: "https://africanjournalofbiomedicalresearch.com/index.php/AJBR/article/view/2502",
  },
];

export const recognition = [
  {
    title: "Poster presentation — Iris™ regulatory strategy",
    detail: "UW GPSS Symposium · May 2026",
  },
];

export type WritingSample = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  context: string;
  credit: string;
  summary: string;
  demonstrates: string[];
  file: string;
  cover: string;
  coverAlt: string;
  linkLabel: string;
  meta: string;
};

export const writingSamples: WritingSample[] = [
  {
    id: "babysat-strategy",
    type: "Global regulatory strategy",
    title: "Bringing BabySat 3 to Infants at Home",
    subtitle: "An FDA-led, five-market registration plan for a home infant pulse oximeter",
    context: "PHR 527, Global Regulatory Strategy · University of Washington · November 2026",
    credit: "Excerpt · market assessment",
    summary:
      "How an existing FDA 510(k) clearance (K222597) shapes market entry: five markets scored on infant population, device class and route, review time, cost, FDA reliance, labeling language and marketing rules, then ranked into two tiers.",
    demonstrates: [
      "Market assessment framework across Indonesia, Thailand, Malaysia, the EU and the UK",
      "Why the ASEAN markets lead: FDA-reliance routes and one shared CSDT dossier",
      "Why the EU and UK follow: CE marking under the MDR and the UK's reliance on it",
    ],
    file: "/samples/Macherla-BabySat3-Strategy-Excerpt.pdf",
    cover: "/samples/babysat-cover.webp",
    coverAlt: "Table 1 from the BabySat 3 regulatory strategy: population, infants and labeling language by market",
    linkLabel: "Read the excerpt",
    meta: "PDF · 3 pages",
  },
  {
    id: "samd-paper",
    type: "Regulatory policy paper",
    title: "Regulating Intelligence",
    subtitle: "FDA's Framework for AI/ML-Based Software as a Medical Device",
    context: "PHARM 518, Biomedical Regulatory Affairs · University of Washington · June 2026",
    credit: "Sole author",
    summary:
      "Analyzes how FDA moved from one-time gatekeeper to Total Product Lifecycle oversight for adaptive algorithms, and why continuous learning strains the 510(k) substantial-equivalence model.",
    demonstrates: [
      "Executive summary and structured regulatory analysis",
      "510(k), De Novo and PMA pathways; IMDRF SaMD risk categorization",
      "2021 AI/ML SaMD Action Plan and December 2024 PCCP final guidance (FD&C Act §515C)",
      "IDx-DR De Novo precedent, algorithmic bias and post-market drift",
    ],
    file: "/samples/Macherla-AI-ML-SaMD-Regulatory-Paper.pdf",
    cover: "/samples/paper-cover.webp",
    coverAlt: "First page of the paper 'Regulating Intelligence: FDA's Framework for AI/ML-Based Software as a Medical Device'",
    linkLabel: "Read the paper",
    meta: "PDF · 6 pages",
  },
  {
    id: "pccp-slide",
    type: "Presentation slide",
    title: "Predetermined Change Control Plans",
    subtitle: "Pre-approving the boundaries of change",
    context: "From \u201cRegulating Intelligence\u201d · PHARM 518 · University of Washington · May 2026",
    credit: "Co-presented with Jyoti Jaiswal",
    summary:
      "One slide that explains the PCCP concept: the AI is allowed to evolve inside an FDA-authorized envelope, and any change outside it is a prohibited, unauthorized modification that needs a new submission.",
    demonstrates: [
      "Turning December 2024 FDA guidance into a single visual",
      "Clear explanation of what a PCCP allows and prohibits",
    ],
    file: "/samples/Macherla-Jaiswal-PCCP-Slide.webp",
    cover: "/samples/pccp-slide-cover.webp",
    coverAlt: "Slide titled 'Predetermined Change Control Plans (PCCPs), Dec 2024' showing a dynamic container inside a PCCP authorized envelope, with changes outside it marked as prohibited unauthorized modifications",
    linkLabel: "View the slide",
    meta: "Image · 1 slide",
  },
];
